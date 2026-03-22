import { GlassWater } from 'lucide-react'
import { WHATSAPP_LINK } from '@/lib/config'

const footerLinks = {
  Produto: [
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Planos', href: '#planos' },
    { label: 'Como Funciona', href: '#como-funciona' },
  ],
  Suporte: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
    { label: 'WhatsApp', href: WHATSAPP_LINK },
  ],
  Legal: [
    { label: 'Termos de Uso', href: '#' },
    { label: 'Privacidade', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-amber-500 rounded-lg">
                <GlassWater className="h-5 w-5 text-gray-900" />
              </div>
              <span className="text-white font-bold text-lg">
                BarManager<span className="text-amber-500">Pro</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              O sistema completo para bares e restaurantes. Gerencie com inteligência, venda mais e
              perca menos.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-amber-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2024 BarManagerPro. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">Desenvolvido com ❤️ para bares e restaurantes africanos</p>
        </div>
      </div>
    </footer>
  )
}
