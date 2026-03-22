'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'

type BillingCycle = 'monthly' | 'annual'

interface Plan {
  name: string
  monthlyPrice: string
  annualPrice: string
  oneTime?: boolean
  features: string[]
  highlighted: boolean
  badge?: string
  cta: string
}

const plans: Plan[] = [
  {
    name: 'Básico',
    monthlyPrice: '15.000',
    annualPrice: '150.000',
    features: [
      'PDV Completo',
      'Controle de Estoque',
      '1 usuário',
      'Relatórios básicos',
      'Suporte por email',
    ],
    highlighted: false,
    cta: 'Começar Básico',
  },
  {
    name: 'Pro',
    monthlyPrice: '35.000',
    annualPrice: '350.000',
    features: [
      'Tudo do Básico',
      'App Mobile para Garçom',
      'Programa de Fidelidade',
      'Controle de Fiado',
      'Até 5 usuários',
      'Relatórios avançados',
      'Suporte prioritário',
    ],
    highlighted: true,
    badge: 'Mais Popular ⭐',
    cta: 'Começar Pro',
  },
  {
    name: 'Enterprise',
    monthlyPrice: '75.000',
    annualPrice: '750.000',
    features: [
      'Tudo do Pro',
      'Multi-unidade',
      'Usuários ilimitados',
      'API de integração',
      'Relatórios personalizados',
      'Gerente de conta dedicado',
      'Suporte 24/7',
    ],
    highlighted: false,
    cta: 'Falar com Vendas',
  },
  {
    name: 'Vitalício',
    monthlyPrice: '—',
    annualPrice: '500.000',
    oneTime: true,
    features: [
      'Tudo do Enterprise',
      'Licença permanente',
      '12 meses de atualizações',
      'Sem mensalidade',
      'Instalação assistida',
      'Treinamento incluído',
    ],
    highlighted: false,
    cta: 'Comprar Vitalício',
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>('monthly')

  return (
    <section id="planos" className="py-24 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            💰 Planos e Preços
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Planos para todos os tamanhos de negócio
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Escolha o plano ideal para o seu estabelecimento. Todos os planos incluem 14 dias grátis.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setBilling('monthly')}
              className={`text-sm font-medium transition-colors ${
                billing === 'monthly' ? 'text-white' : 'text-gray-500'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBilling(billing === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-12 h-6 bg-gray-700 rounded-full transition-colors"
              aria-label="Alternar período de cobrança"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-amber-500 rounded-full transition-transform duration-300 ${
                  billing === 'annual' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`text-sm font-medium flex items-center gap-2 transition-colors ${
                billing === 'annual' ? 'text-white' : 'text-gray-500'
              }`}
            >
              Anual
              <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-0.5 rounded-full border border-emerald-500/30">
                -17%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.highlighted
                  ? 'bg-gray-900 border-2 border-amber-500 shadow-xl shadow-amber-500/10'
                  : 'bg-gray-900/60 border border-gray-700/50'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-500 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-bold text-lg mb-1 ${plan.highlighted ? 'text-amber-400' : 'text-white'}`}>
                  {plan.name}
                </h3>

                {plan.oneTime && billing === 'monthly' ? (
                  <p className="text-gray-500 text-sm italic">Apenas no plano anual/único</p>
                ) : (
                  <div className="mt-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-gray-400 text-sm">FCFA</span>
                      <span className="text-3xl font-extrabold text-white">
                        {billing === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">
                      {plan.oneTime ? 'pagamento único' : billing === 'monthly' ? '/mês' : '/ano'}
                    </p>
                  </div>
                )}
              </div>

              <ul className="space-y-2.5 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? 'bg-amber-500 hover:bg-amber-600 text-gray-900 hover:shadow-lg hover:shadow-amber-500/25'
                    : 'border border-gray-600 hover:border-amber-500/50 text-gray-300 hover:text-amber-400'
                }`}
              >
                {plan.highlighted && <Zap className="h-4 w-4" />}
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          Preços em FCFA (Franco CFA). Todos os planos incluem 14 dias de teste grátis.
        </p>
      </div>
    </section>
  )
}
