# Encurtador de cupons (GitHub Pages)

Links curtos que, ao abrir, copiam um cupom para a área de transferência e (opcionalmente) redirecionam para a loja. 100% estático, grátis em repositório público.

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
