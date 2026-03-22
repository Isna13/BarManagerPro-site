'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Amadou Diallo',
    role: 'Proprietário de bar',
    location: 'Dakar',
    initials: 'AD',
    color: 'bg-amber-500',
    text: 'Desde que instalei o BarManagerPro, meu estoque parou de dar diferença. O controle de fiado me salvou de perder muito dinheiro. Recomendo a todos os donos de bar!',
    stars: 5,
  },
  {
    name: 'Fatoumata Koné',
    role: 'Gerente de restaurante',
    location: 'Abidjan',
    initials: 'FK',
    color: 'bg-purple-500',
    text: 'O app para garçom transformou o atendimento. Menos erros nos pedidos, mais rapidez e clientes muito mais satisfeitos. O PDV é simples e qualquer funcionário aprende em minutos.',
    stars: 5,
  },
  {
    name: 'Kwame Asante',
    role: 'Dono de restaurante',
    location: 'Lomé',
    initials: 'KA',
    color: 'bg-emerald-500',
    text: 'O programa de fidelidade fez meus clientes voltarem com mais frequência. Os relatórios me ajudam a saber o que vende mais e em qual horário. Excelente sistema!',
    stars: 5,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Testimonials() {
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
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            ⭐ Depoimentos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Mais de 500 estabelecimentos já transformaram sua gestão com o BarManagerPro.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-gray-900/60 border border-gray-700/40 hover:border-amber-500/20 rounded-2xl p-6 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`${testimonial.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
