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
| Instagram stories 1 | `dafiti-instagram-1-stories` | `PABLOmartins` | https://phyper14.github.io/redirect-page/dafiti-instagram-1-stories | `/promocao/geral/black-tudo-desconto` |
| TikTok, Adi2000 marrom | `dafiti-tiktok-1-adi2000-marrom` | `pabloMartins` | https://phyper14.github.io/redirect-page/dafiti-tiktok-1-adi2000-marrom | `/Tenis-Masculino-adidas-Originals-Adi2000-Marrom-14998148.html` |
| Instagram, Adi2000 marrom | `dafiti-instagram-1-adi2000-marrom` | `PABLOMartins` | https://phyper14.github.io/redirect-page/dafiti-instagram-1-adi2000-marrom | `/Tenis-Masculino-adidas-Originals-Adi2000-Marrom-14998148.html` |
| TikTok, Adi2000 branco | `dafiti-tiktok-1-adi2000-branco` | `pablomartinS` | https://phyper14.github.io/redirect-page/dafiti-tiktok-1-adi2000-branco | `/ADI2000-adidas-Originals-Branco-15012022.html` |
| Instagram, Adi2000 branco | `dafiti-instagram-1-adi2000-branco` | `PABLOMARTINs` | https://phyper14.github.io/redirect-page/dafiti-instagram-1-adi2000-branco | `/ADI2000-adidas-Originals-Branco-15012022.html` |
| TikTok, Adi2000 azul | `dafiti-tiktok-1-adi2000-azul` | `pablOmartins` | https://phyper14.github.io/redirect-page/dafiti-tiktok-1-adi2000-azul | `/Tenis-Unissex-adidas-Originals-Adi2000-Azul-14998149.html` |
| Instagram, Adi2000 azul | `dafiti-instagram-1-adi2000-azul` | `PABLOmARTINS` | https://phyper14.github.io/redirect-page/dafiti-instagram-1-adi2000-azul | `/Tenis-Unissex-adidas-Originals-Adi2000-Azul-14998149.html` |
| TikTok, Adi2000 (filtro) | `dafiti-tiktok-1-adi2000-filtro` | `Pablomartins` | https://phyper14.github.io/redirect-page/dafiti-tiktok-1-adi2000-filtro | `/adidas-originals/?seller=Dafiti&q=adi2000` |
| Instagram, Adi2000 (filtro) | `dafiti-instagram-1-adi2000-filtro` | `PABLOMArtins` | https://phyper14.github.io/redirect-page/dafiti-instagram-1-adi2000-filtro | `/adidas-originals/?seller=Dafiti&q=adi2000` |
| TikTok, Adizero Evo SL | `dafiti-tiktok-1-adizero` | `pablomARTINS` | https://phyper14.github.io/redirect-page/dafiti-tiktok-1-adizero | `/Tenis-Masculino-adidas-Performance-Adizero-Evo-SL-Branco-15226853.html` |
| Instagram, Adizero Evo SL | `dafiti-instagram-1-adizero` | `PabloMARTINS` | https://phyper14.github.io/redirect-page/dafiti-instagram-1-adizero | `/Tenis-Masculino-adidas-Performance-Adizero-Evo-SL-Branco-15226853.html` |

## Regras para novas variantes

- Cada grafia do cupom deve ser usada em **um único anúncio**; repetir mistura as vendas.
- Escolha grafias bem distintas entre si, para reconhecê-las no dashboard.
- Slug no formato `loja-plataforma-numero-publico`, com letras, números, `-` ou `_` (3 a 40 caracteres).
- A atribuição vale só para quem copia pelo botão: quem digita o cupom à mão usa a própria grafia.

## Lançamentos

Horário (Brasília) em que cada anúncio foi publicado, para comparar com os dados do GoatCounter
(que também mostra horas em Brasília). O horário é o do registro, logo após a publicação, então
pode ter alguns minutos de diferença.

| Data e hora (BRT) | Plataforma | Slug | Cupom |
|---|---|---|---|
| 2026-11-26 13:27 | TikTok | `dafiti-tiktok-1-adizero` | `pablomARTINS` |
| 2026-11-26 13:27 | TikTok | `dafiti-tiktok-1-adi2000-filtro` | `Pablomartins` |

## Oferta (Dafiti, Black Absurda)

- Desconto: 10% OFF, válido de 09/11 a 30/11/2026 (`expires` em `site/links.json`).
- Condições: aplicável apenas a produtos vendidos e entregues pela Dafiti, para compras acima de R$99
  exclusivas no app, com abatimento máximo de R$100 por compra.
