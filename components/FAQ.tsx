'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'O sistema funciona sem internet?',
    a: 'Sim! O BarManagerPro foi desenvolvido para funcionar 100% offline. Você pode registrar vendas, controlar o estoque e emitir comprovantes sem conexão. Quando a internet voltar, todos os dados sincronizam automaticamente com a nuvem.',
  },
  {
    q: 'Preciso de um computador potente?',
    a: 'Não. O sistema é otimizado para rodar em computadores simples com Windows 7 ou superior. Não é necessário hardware específico — qualquer máquina básica de escritório já é suficiente.',
  },
  {
    q: 'Quantos usuários posso ter?',
    a: 'Depende do plano. O Básico inclui 1 usuário, o Pro até 5 usuários, e o Enterprise oferece usuários ilimitados. Cada usuário tem permissões personalizáveis (caixa, garçom, gerente, administrador).',
  },
  {
    q: 'Como funciona o suporte?',
    a: 'Oferecemos suporte por email para o plano Básico, suporte prioritário para o Pro e suporte 24/7 dedicado para o Enterprise e Vitalício. Também temos uma base de conhecimento com tutoriais em vídeo.',
  },
  {
    q: 'Posso cancelar a qualquer momento?',
    a: 'Sim, sem multa ou fidelidade. Você pode cancelar sua assinatura a qualquer momento pelo painel do sistema. Seus dados ficam disponíveis por 30 dias após o cancelamento para exportação.',
  },
  {
    q: 'O app do garçom é separado?',
    a: 'Sim. O app para garçom é um aplicativo móvel (Android e iOS) que se conecta ao sistema principal via Wi-Fi local. Está disponível nos planos Pro, Enterprise e Vitalício. Os garçons recebem pedidos nas mesas e enviam direto para o cozinha/bar.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-[#0D1117]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            ❓ FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-400 mt-4">
            Ainda tem dúvidas? Fale conosco no WhatsApp.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="bg-gray-900/60 border border-gray-700/40 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-white font-medium text-sm">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-amber-400' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-5 pb-5 border-t border-gray-700/40">
                      <p className="text-gray-400 text-sm leading-relaxed pt-4">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
