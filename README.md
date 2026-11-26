# Encurtador de cupons (GitHub Pages)

Links curtos que abrem uma página de cupom: ao tocar no botão, o cupom é copiado para a área de transferência e a pessoa é levada para a loja (opcional). A cópia só acontece no toque, sem permissão do navegador. 100% estático, grátis em repositório público.

`https://<usuario>.github.io/<repo>/promo10` → copia `PROMO10` → abre a loja.

## Configuração (uma vez)
1. Settings → Pages → **Source: GitHub Actions**.
2. O deploy roda a cada push na `main` em `site/`, `scripts/` ou no workflow.

## Criar um link
- **Pela aba Actions:** *Publicar site e criar links* → *Run workflow* → preencha cupom, URL e slug (opcionais). O link aparece no resumo da execução.
- **Ou edite `site/links.json`** e faça commit:
  ```json
  { "promo10": { "coupon": "PROMO10", "url": "https://loja.com", "store": "Loja", "discount": "10% OFF", "by": "Seu nome", "expires": "2026-12-31", "terms": "Condições…" } }
  ```
  Só `coupon` é obrigatório; os demais campos são opcionais e aparecem na página.

## Observações
- Sem contagem de cliques; os cupons ficam públicos no `links.json`.
- O caminho `/slug` funciona porque o Pages serve o `404.html` (mesma página) para caminhos inexistentes, com status 404. Alternativa sem isso: `/?c=slug`.
- Domínio próprio funciona: o caminho base é detectado no deploy.

## Contagem de acessos

A página usa o GoatCounter (sem cookies): https://pablomartins-dafiti.goatcounter.com/. Cada slug aparece como um caminho (`/dafiti-tiktok-1-feminino`) e o funil de cada link como eventos: `toque/<slug>` (tocou no botão), `copiado/<slug>` (cópia ok) e `falha/<slug>` (cópia falhou). Se o contador for bloqueado pelo navegador, a página funciona normalmente, só não conta.

## Painel de administração (`/admin`)

Página estática que edita `site/links.json` e `site/launches.json` pela API do GitHub e mostra as
estatísticas do GoatCounter (visitas, toques, cópias, falhas, por link e desde cada lançamento).

1. **Token do GitHub**: fine-grained, só este repositório, permissão `Contents: Read and write`.
   Cole na tela de entrada; fica só no `localStorage` do navegador.
2. **Estatísticas**: crie o segredo `GOATCOUNTER_TOKEN` (token de API do GoatCounter, só leitura) em
   Settings → Secrets and variables → Actions. O workflow republica o site a cada 30 min e inclui
   `stats.json`, que o painel lê. Sem o segredo, o painel funciona sem números.
3. Cada salvamento é um commit em `main`; o deploy leva cerca de 1 min.

`stats.json` é público, como o resto do site (contém só contagens por link e hora).
