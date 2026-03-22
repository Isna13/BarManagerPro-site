'use client'

import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

const problems = [
  {
    icon: '📦',
    title: 'Perda de estoque sem controle',
    desc: 'Produtos sumindo e você não sabe para onde foram.',
  },
  {
    icon: '📒',
    title: 'Fiado sem registro organizado',
    desc: 'Clientes devendo e sem como comprovar os valores.',
  },
  {
    icon: '📊',
    title: 'Sem relatórios de vendas',
    desc: 'Não sabe o que vende mais ou qual horário é mais lucrativo.',
  },
  {
    icon: '🗒️',
    title: 'Garçons anotando em papel',
    desc: 'Pedidos perdidos, erros na comanda e clientes insatisfeitos.',
  },
  {
    icon: '💸',
    title: 'Caixa fechando com diferença',
    desc: 'Dinheiro sumindo no fechamento sem explicação.',
  },
  {
    icon: '🎁',
    title: 'Sem programa de fidelização',
    desc: 'Clientes indo para a concorrência por falta de benefícios.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Problems() {
  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            <AlertTriangle className="h-3.5 w-3.5" />
            Problemas comuns
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Você reconhece esses problemas?
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Donos de bares e restaurantes enfrentam esses desafios diariamente. O BarManagerPro
            resolve todos eles.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-gray-900/60 border border-red-900/30 hover:border-red-500/40 rounded-2xl p-6 transition-colors"
            >
              <div className="text-3xl mb-4">{problem.icon}</div>
              <h3 className="text-white font-bold text-base mb-2">{problem.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{problem.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
