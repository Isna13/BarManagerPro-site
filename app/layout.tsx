import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BarManagerPro — Sistema de Gestão para Bares e Restaurantes',
  description:
    'O sistema completo para bares e restaurantes — PDV, estoque, app para garçom e muito mais. Funciona até sem internet.',
  keywords: ['bar', 'restaurante', 'PDV', 'sistema de gestão', 'estoque', 'garçom', 'FCFA'],
  openGraph: {
    title: 'BarManagerPro',
    description: 'Gerencie seu Bar com Inteligência. Venda mais, perca menos.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
