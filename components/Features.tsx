'use client'

import { motion } from 'framer-motion'
import {
  ShoppingCart,
  Smartphone,
  Package,
  CreditCard,
  Star,
  DollarSign,
  BarChart3,
  Wifi,
} from 'lucide-react'

const features = [
  {
    icon: ShoppingCart,
    title: 'PDV Completo',
    desc: 'Vendas rápidas com múltiplos métodos de pagamento e emissão de comprovante.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    icon: Smartphone,
    title: 'App para Garçom',
    desc: 'Pedidos direto da mesa pelo celular, sem papel e sem erros.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Package,
    title: 'Controle de Estoque',
    desc: 'Entradas, saídas e alertas automáticos para nunca ficar sem produto.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: CreditCard,
    title: 'Fiado / Vale',
    desc: 'Controle de dívidas dos clientes com histórico e cobrança facilitada.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Star,
    title: 'Programa de Fidelidade',
    desc: 'Pontos por compra que fidelizam clientes e aumentam o retorno.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
  },
  {
    icon: DollarSign,
    title: 'Caixa por Turno',
    desc: 'Abertura e fechamento de caixa com conferência e controle de turno.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
  },
  {
    icon: BarChart3,
    title: 'Relatórios Completos',
    desc: 'Vendas, estoque, inadimplência e muito mais em dashboards intuitivos.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: Wifi,
    title: 'Funciona Offline',
    desc: 'Continue vendendo sem internet. Os dados sincronizam automaticamente.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Features() {
  return (
    <section id="funcionalidades" className="py-24 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            ✨ Funcionalidades
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Tudo que seu bar precisa em um único sistema
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Do pedido ao fechamento, do estoque ao relatório — todas as ferramentas que você precisa
            para gerenciar seu negócio com excelência.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-gray-900/60 border border-gray-700/40 hover:border-amber-500/30 rounded-2xl p-5 transition-all group"
              >
                <div className={`${feature.bg} rounded-xl p-3 w-fit mb-4`}>
                  <Icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
