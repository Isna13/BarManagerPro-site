'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Play } from 'lucide-react'

const badges = [
  '✓ Funciona offline',
  '✓ App para garçom',
  '✓ Sincronização automática',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden bg-[#0D1117]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column — text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              🚀 Sistema completo para bares &amp; restaurantes
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Gerencie seu Bar com{' '}
              <span className="text-amber-500">Inteligência.</span>
              <br />
              <span className="text-gray-300">Venda mais, perca menos.</span>
            </h1>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
              O sistema completo para bares e restaurantes — PDV, estoque, app para garçom e muito
              mais. <strong className="text-gray-300">Funciona até sem internet.</strong>
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 bg-gray-800/60 border border-gray-700/50 text-gray-300 text-sm px-4 py-2 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#planos"
                className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-8 py-4 rounded-xl text-base text-center transition-all hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-0.5"
              >
                Teste Grátis 14 dias
              </a>
              <a
                href="#funcionalidades"
                className="flex items-center justify-center gap-2 border border-gray-600 hover:border-amber-500/50 text-gray-300 hover:text-amber-400 font-semibold px-8 py-4 rounded-xl text-base text-center transition-all"
              >
                <Play className="h-4 w-4 fill-current" />
                Ver Demonstração
              </a>
            </div>
          </motion.div>

          {/* Right column — mock dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard mock */}
            <div className="bg-gray-900 border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
              {/* Top bar */}
              <div className="bg-gray-800/80 px-4 py-3 flex items-center gap-2 border-b border-gray-700/50">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-gray-500 text-xs font-mono">BarManagerPro — Dashboard</span>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 p-4">
                {[
                  { label: 'Vendas Hoje', value: '1.240.000', unit: 'FCFA', color: 'text-amber-400' },
                  { label: 'Pedidos', value: '47', unit: 'abertas', color: 'text-emerald-400' },
                  { label: 'Estoque', value: '98%', unit: 'OK', color: 'text-blue-400' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-800/60 rounded-xl p-3">
                    <p className="text-gray-500 text-xs mb-1">{stat.label}</p>
                    <p className={`font-bold text-lg ${stat.color}`}>{stat.value}</p>
                    <p className="text-gray-600 text-xs">{stat.unit}</p>
                  </div>
                ))}
              </div>

              {/* Chart mock */}
              <div className="px-4 pb-2">
                <div className="bg-gray-800/60 rounded-xl p-4">
                  <div className="flex items-end gap-2 h-24">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-amber-500/20 rounded-t hover:bg-amber-500/40 transition-colors"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-xs mt-2 text-center">Vendas — últimas 12 horas</p>
                </div>
              </div>

              {/* Orders mock */}
              <div className="px-4 pb-4">
                <div className="bg-gray-800/60 rounded-xl p-3">
                  <p className="text-gray-500 text-xs mb-3 font-medium">PEDIDOS RECENTES</p>
                  {[
                    { table: 'Mesa 3', item: '2x Cerveja + 1x Petisco', status: 'Pronto', color: 'bg-emerald-500/20 text-emerald-400' },
                    { table: 'Mesa 7', item: '1x Caipirinha + 1x Frango', status: 'Preparo', color: 'bg-amber-500/20 text-amber-400' },
                    { table: 'Mesa 1', item: '3x Refrigerante', status: 'Entregue', color: 'bg-blue-500/20 text-blue-400' },
                  ].map((order) => (
                    <div key={order.table} className="flex items-center justify-between py-1.5">
                      <div>
                        <p className="text-gray-300 text-xs font-medium">{order.table}</p>
                        <p className="text-gray-600 text-xs">{order.item}</p>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${order.color}`}>
                        {order.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-lg flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5" />
              Online &amp; Offline
            </div>
            <div className="absolute -top-4 -right-4 bg-amber-500 text-gray-900 text-xs font-bold px-3 py-2 rounded-lg shadow-lg">
              📱 App para Garçom
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
