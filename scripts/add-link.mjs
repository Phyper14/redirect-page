// Adiciona um link em site/links.json. Entradas via variáveis de ambiente: COUPON, URL, SLUG.
import fs from 'node:fs';
import crypto from 'node:crypto';

const FILE = 'site/links.json';
const { COUPON = '', URL: DEST = '', SLUG = '' } = process.env;
const fail = m => { console.error('Erro: ' + m); process.exit(1); };

const coupon = COUPON.trim();
if (!coupon || coupon.length > 100) fail('cupom obrigatório (máx. 100 caracteres)');

let url;
if (DEST.trim()) {
  try {
    const u = new URL(DEST.trim());
    if (!/^https?:$/.test(u.protocol)) throw 0;
    url = u.href;
  } catch { fail('URL de destino inválida (use http/https)'); }
}

const links = JSON.parse(fs.readFileSync(FILE, 'utf8'));
let slug = SLUG.trim();
if (!slug) do { slug = crypto.randomBytes(4).toString('base64url').slice(0, 6); } while (links[slug]);
if (!/^[A-Za-z0-9_-]{3,32}$/.test(slug)) fail('slug inválido (3–32: letras, números, - _)');
if (['index', 'links', '404'].includes(slug)) fail('slug reservado');
if (links[slug]) fail(`o slug "${slug}" já existe`);

links[slug] = url ? { coupon, url } : { coupon };
fs.writeFileSync(FILE, JSON.stringify(links, null, 2) + '\n');
console.log(`Link criado: /${slug}`);
if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `slug=${slug}\n`);
