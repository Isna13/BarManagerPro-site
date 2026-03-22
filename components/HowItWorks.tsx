'use client'

import { motion } from 'framer-motion'
import { Download, Settings, Zap } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Instale o sistema',
    desc: 'Baixe o aplicativo para desktop e mobile em minutos. Instalação simples e rápida, sem necessidade de técnico.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Configure seu bar',
    desc: 'Cadastre produtos, categorias, usuários e mesas. Interface intuitiva que qualquer pessoa consegue usar.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Comece a vender',
    desc: 'PDV, controle de estoque e relatórios funcionando. Suporte disponível para ajudar em cada etapa.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            🚀 Como funciona
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Comece a usar em 3 passos simples
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Sem complicação. Em menos de um dia você já está operando com o BarManagerPro.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-amber-500/30 via-blue-500/30 to-emerald-500/30" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="text-center relative"
                >
                  {/* Number badge */}
                  <div className="relative mx-auto mb-6 w-fit">
                    <div className={`${step.bg} border ${step.border} rounded-2xl p-5 inline-flex`}>
                      <Icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-gray-900 border border-gray-700 text-gray-500 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                      {step.number.replace('0', '')}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="#planos"
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-10 py-4 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5 inline-block"
          >
            Quero Começar Agora
          </a>
        </motion.div>
      </div>
    </section>
  )
}
