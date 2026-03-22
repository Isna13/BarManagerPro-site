'use client'

import { useState, useEffect } from 'react'
import { Menu, X, GlassWater } from 'lucide-react'

const navLinks = [
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-1.5 bg-amber-500 rounded-lg">
              <GlassWater className="h-5 w-5 text-gray-900" />
            </div>
            <span className="text-white font-bold text-lg">
              BarManager<span className="text-amber-500">Pro</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA button desktop */}
          <div className="hidden md:block">
            <a
              href="#planos"
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Começar Agora
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-400 hover:text-amber-400 transition-colors py-2 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#planos"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-5 py-2.5 rounded-lg text-sm text-center transition-colors mt-2"
            >
              Começar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
