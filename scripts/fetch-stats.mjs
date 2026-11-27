// Busca as contagens do GoatCounter e grava um JSON compacto (hora a hora, fuso de Brasília)
// que o painel /admin lê. Uso: GOATCOUNTER_TOKEN=... node scripts/fetch-stats.mjs <saida.json>
import fs from 'node:fs';

const API = 'https://pablomartins-dafiti.goatcounter.com/api/v0';
const { GOATCOUNTER_TOKEN: TOKEN } = process.env;
const out = process.argv[2];
if (!TOKEN || !out) { console.error('Uso: GOATCOUNTER_TOKEN=... node scripts/fetch-stats.mjs <saida.json>'); process.exit(1); }

const DAYS = 30;
const iso = d => d.toISOString().slice(0, 19) + 'Z';
const start = iso(new Date(Date.now() - DAYS * 864e5));
const end = iso(new Date(Date.now() + 864e5));

// A paginação do GoatCounter é por exclusão: cada página pede os caminhos que já vieram.
const hits = [];
const seen = [];
for (let page = 0; page < 50; page++) {
  const q = new URLSearchParams({ start, end, limit: '100' });
  if (seen.length) q.set('exclude_paths', seen.join(','));
  const res = await fetch(`${API}/stats/hits?${q}`, { headers: { Authorization: `Bearer ${TOKEN}` } });
  if (!res.ok) { console.error(`GoatCounter respondeu ${res.status}: ${(await res.text()).slice(0, 200)}`); process.exit(1); }
  const j = await res.json();
  if (!j.hits?.length) break;
  hits.push(...j.hits);
  seen.push(...j.hits.map(h => h.path_id));
  if (!j.more) break;
}

// Linha: [dia, hora, slug, tipo, n]. Eventos têm caminho "tipo/slug"; visitas, só "slug".
const rows = [];
for (const h of hits) {
  const p = h.path.split('?')[0].replace(/^\/+|\/+$/g, '');
  const [kind, slug] = h.event && p.includes('/') ? p.split('/', 2) : ['visita', p.split('/').pop()];
  for (const d of h.stats ?? []) d.hourly.forEach((n, hour) => { if (n) rows.push([d.day, hour, slug, kind, n]); });
}
fs.writeFileSync(out, JSON.stringify({ generated: new Date().toISOString(), tz: 'America/Sao_Paulo', days: DAYS, rows }));
console.log(`${rows.length} linhas de ${hits.length} caminhos`);
