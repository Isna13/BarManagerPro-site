# BarManagerPro — Site de Vendas

Landing page profissional e responsiva para o **BarManagerPro**, um sistema de gestão para bares e estabelecimentos food & beverage.

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion** (animações)
- **React Hook Form + Zod** (formulário de contato)
- **TypeScript**
- **lucide-react** (ícones)

## Seções

1. **Navbar** — Responsiva com menu hambúrguer e efeito scroll
2. **Hero** — Headline, CTAs e mock de dashboard animado
3. **Problems** — 6 problemas comuns que o sistema resolve
4. **Features** — 8 funcionalidades principais em grid
5. **HowItWorks** — 3 passos para começar
6. **Pricing** — 4 planos em FCFA com toggle mensal/anual
7. **Testimonials** — 3 depoimentos de clientes
8. **FAQ** — Accordion interativo com 6 perguntas
9. **ContactForm** — Formulário com validação + botão WhatsApp
10. **Footer** — Links organizados por categoria
11. **WhatsAppButton** — Botão flutuante com animação de pulso

## Instalação

```bash
npm install
npm run dev
```

## Deploy na Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Isna13/BarManagerPro-site)

1. Conecte o repositório na [Vercel](https://vercel.com)
2. Framework: **Next.js** (detectado automaticamente)
3. Clique em **Deploy**

## Variáveis de Ambiente

Nenhuma variável de ambiente é necessária para o deploy básico.

## Personalização

- **Número do WhatsApp**: Substitua `+000000000000` em `components/WhatsAppButton.tsx` e `components/ContactForm.tsx`
- **Preços**: Edite o array `plans` em `components/Pricing.tsx`
- **Conteúdo**: Todos os textos estão centralizados nos arrays de cada componente

---

© 2024 BarManagerPro. Todos os direitos reservados. 
