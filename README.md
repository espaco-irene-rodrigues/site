# Espaço Irene Rodrigues — site

Site institucional estático (multi-página) do **Espaço Irene Rodrigues**, salão de
cabeleireiro em **Paraisópolis-MG**, com foco em portfólio de trabalhos e SEO local
(Paraisópolis, Pouso Alegre e Sul de Minas).

HTML estático + Tailwind CSS **compilado** (sem CDN em runtime). Hospedável em
qualquer serviço de arquivos estáticos (Netlify, Vercel, GitHub Pages, etc.).

## Estrutura

```
index.html            Home
noivas.html           Penteado e maquiagem para noiva
mechas-loiros.html    Mechas, loiros, morena iluminada e coloração
maquiagem.html        Maquiagem (noiva e social)
portfolio.html        Galeria completa, com filtro e lightbox
contato.html          Endereço, mapa, horário, WhatsApp e Instagram
robots.txt  sitemap.xml  llms.txt  site.webmanifest
favicon.ico  apple-touch-icon.png  icon-192.png  icon-512.png
assets/
  css/tailwind.css    CSS compilado (gerado — não editar à mão)
  css/custom.css      Ajustes finos (sombras, lightbox, botão WhatsApp)
  js/main.js          Menu mobile, filtro da galeria, lightbox
  img/portfolio/      Fotos otimizadas (WebP + JPG de fallback)
  img/brand/          Logo/perfil e og-image
tailwind.config.js    Tokens do design system
src/input.css         Fonte do build (@tailwind)
```

## Build do CSS

Usa o **Tailwind CLI standalone** (binário único, sem Node/npm).

```bash
# 1. Baixe o binário (macOS Apple Silicon; veja releases para outras plataformas)
curl -sL -o tailwindcss \
  https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.17/tailwindcss-macos-arm64
chmod +x tailwindcss

# 2. Compile (minificado)
./tailwindcss -c tailwind.config.js -i src/input.css -o assets/css/tailwind.css --minify

# Durante o desenvolvimento, use --watch
./tailwindcss -c tailwind.config.js -i src/input.css -o assets/css/tailwind.css --watch
```

> **Fallback sem build:** se não for possível baixar o binário, troque, em cada
> página, o `<link rel="stylesheet" href="/assets/css/tailwind.css">` por
> `<script src="https://cdn.tailwindcss.com"></script>` + o bloco de config. Funciona,
> mas é mais lento (não recomendado em produção).

O binário `tailwindcss` **não** é versionado (ver `.gitignore`).

## Rodar localmente

```bash
python3 -m http.server 8099
# abra http://localhost:8099
```

## Pendências antes de publicar

- [ ] **Domínio:** confirmar a string final e substituir `https://espacoirenerodrigues.com.br`
      em todos os `canonical`, `og:url`, `sitemap.xml`, `robots.txt` e `llms.txt`.
- [ ] **Horário de funcionamento:** preencher o horário real (procure os comentários
      `PENDENTE` em `contato.html` e `index.html`) e, se quiser, descomentar o
      `openingHoursSpecification` no JSON-LD da home.
- [ ] **Depoimentos reais:** a seção está comentada em `index.html` (nenhum depoimento
      fictício foi incluído). Cole avaliações reais quando tiver.
- [ ] **"+15 anos":** confirmar o número (veio das legendas do Instagram).

## SEO — próximos passos (fora do site)

- Criar/otimizar o **Google Business Profile** (Google Meu Negócio) com NAP idêntico
  ao do site — principal fator de ranqueamento local.
- Registrar o site no **Google Search Console** e enviar o `sitemap.xml`.
- Manter NAP consistente em diretórios e pedir **avaliações reais** no Google.

## Conteúdo e imagens

Todo o texto foi escrito a partir de informações reais (legendas do Instagram
[@espaco_irenerodrigues](https://www.instagram.com/espaco_irenerodrigues/) e dados
confirmados). As fotos do portfólio são trabalhos reais, otimizadas para a web.
Nenhuma estatística ou depoimento foi inventado.
