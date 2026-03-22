'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, MessageCircle, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { WHATSAPP_LINK } from '@/lib/config'

const schema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(8, 'Telefone inválido'),
  establishment: z.string().min(2, 'Nome do estabelecimento deve ter pelo menos 2 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    // TODO: Replace this mock with a real API call (e.g. POST /api/contact or an email service)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form data:', data)
    setSubmitted(true)
    reset()
  }

  return (
    <section id="contato" className="py-24 bg-[#111827]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            📩 Contato
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Pronto para transformar seu bar?
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Preencha o formulário e entraremos em contato em até 24 horas. Ou fale diretamente no
            WhatsApp para uma resposta imediata.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            {submitted ? (
              <div className="bg-gray-900/60 border border-emerald-500/30 rounded-2xl p-10 text-center">
                <CheckCircle className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">Mensagem enviada!</h3>
                <p className="text-gray-400">
                  Obrigado pelo contato. Entraremos em contato em breve.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-amber-400 hover:text-amber-300 text-sm underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-gray-900/60 border border-gray-700/40 rounded-2xl p-6 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5">
                      Nome completo *
                    </label>
                    <input
                      {...register('name')}
                      placeholder="Seu nome"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5">
                      Email *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      {...register('phone')}
                      placeholder="+221 XX XXX XXXX"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-400 text-xs font-medium mb-1.5">
                      Nome do estabelecimento *
                    </label>
                    <input
                      {...register('establishment')}
                      placeholder="Bar do João"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                    {errors.establishment && (
                      <p className="text-red-400 text-xs mt-1">{errors.establishment.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1.5">
                    Mensagem *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Conte um pouco sobre seu estabelecimento e o que você precisa..."
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed text-gray-900 font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-amber-500/25"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Side info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 space-y-5"
          >
            <div className="bg-gray-900/60 border border-gray-700/40 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Prefere o WhatsApp?</h3>
              <p className="text-gray-400 text-sm mb-5">
                Fale diretamente com nossa equipe pelo WhatsApp e tire todas as suas dúvidas em
                tempo real.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-6 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-green-500/25"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>

            <div className="bg-gray-900/60 border border-gray-700/40 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-3">Por que escolher o BarManagerPro?</h3>
              <ul className="space-y-2">
                {[
                  '14 dias grátis sem cartão',
                  'Suporte em português',
                  'Funciona offline',
                  'Instalação em minutos',
                  'Sem fidelidade contratual',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="text-amber-400">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
