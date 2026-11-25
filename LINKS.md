# Links dos anúncios

Cada anúncio tem o próprio slug e uma grafia diferente do cupom (a Dafiti não diferencia
maiúsculas de minúsculas). Assim o dashboard mostra de qual anúncio veio cada venda.
A fonte dos dados é `site/links.json`; esta tabela é o registro para consulta e deve ser
atualizada junto com ele.

Base: `https://phyper14.github.io/redirect-page/`. Os destinos são caminhos em `https://www.dafiti.com.br`.

| Anúncio | Slug | Cupom (grafia exata) | Link curto | Destino |
|---|---|---|---|---|
| Sem anúncio específico | `dafiti` | `pablomartins` | https://phyper14.github.io/redirect-page/dafiti | `/promocao/geral/black-tudo-desconto` |
| TikTok 1, feminino | `dafiti-tiktok-1-feminino` | `PABLOMARTINS` | https://phyper14.github.io/redirect-page/dafiti-tiktok-1-feminino | `/promocao/feminino/black-tudo-desconto` |
| TikTok 2, feminino | `dafiti-tiktok-2-feminino` | `pabloMARTINS` | https://phyper14.github.io/redirect-page/dafiti-tiktok-2-feminino | `/promocao/feminino/black-tudo-desconto` |
| TikTok 1, masculino | `dafiti-tiktok-1-masculino` | `PabloMartins` | https://phyper14.github.io/redirect-page/dafiti-tiktok-1-masculino | `/promocao/geral/black-tudo-desconto` |

## Regras para novas variantes

- Cada grafia do cupom deve ser usada em **um único anúncio**; repetir mistura as vendas.
- Escolha grafias bem distintas entre si, para reconhecê-las no dashboard.
- Slug no formato `loja-plataforma-numero-publico`, com letras, números, `-` ou `_` (3 a 32 caracteres).
- A atribuição vale só para quem copia pelo botão: quem digita o cupom à mão usa a própria grafia.

## Oferta (Dafiti, Black Absurda)

- Desconto: 10% OFF, válido de 09/11 a 30/11/2026 (`expires` em `site/links.json`).
- Condições: aplicável apenas a produtos vendidos e entregues pela Dafiti, para compras acima de R$99
  exclusivas no app, com abatimento máximo de R$100 por compra.
