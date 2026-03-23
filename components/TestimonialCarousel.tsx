"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const testimonios = [
  {
    texto: "Levábamos años encontrando un seguro que permitiese como empresa pequeña poder tener cobertura adicional. Hemos encontrado asesoría confiable, con profesionales atentos capacitados para resolver cualquier duda. Excelente servicio, recomiendo Redagrupa a ojos cerrados.",
    nombre: "Marcela Lorenzo",
    cargo: "Partner CEO en JSTL",
    foto: "/images/marcela-lorenzo-ceo-just4u-baja.jpg",
  },
  {
    texto: "Contratamos Redagrupa como beneficio extra para trabajadores, pero al poco tiempo nos dimos cuenta que es un gran aliado, tanto clientes como empleados. Es el agregado bien servicio indiscutible con ellos.",
    nombre: "Manuel Pamplona",
    cargo: "Gerente Regional en EngMe",
    foto: "/images/manuel-pamplona-baja.jpg",
  },
  {
    texto: "Antes no había sido posible conseguir seguro complementario para mis colaboradores, ya que para tratar de una compañía de pocos empleados no cumplíamos con los requisitos. Pero gracias a Redagrupa lo conseguimos.",
    nombre: "Roberto Allaro",
    cargo: "Gerente General en SCLatam",
    foto: "/images/roberto-alfaro-gerente-genera-scm-latam-baja.jpg",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonios.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <div className="relative min-h-[280px]">
        {testimonios.map((t, i) => (
          <div
            key={i}
            className={`flex flex-col items-center text-center space-y-6 transition-opacity duration-500 ${i === current ? "opacity-100" : "opacity-0 absolute inset-0"}`}
          >
            <div className="text-4xl md:text-6xl text-[#cc0033] leading-none">&ldquo;</div>
            <p className="text-[#666666] text-base leading-snug">{t.texto}</p>
            <div className="pt-4 border-t border-gray-200 flex items-center gap-4">
              <Image
                src={t.foto}
                alt={t.nombre}
                width={56}
                height={56}
                className="w-14 h-14 rounded-full object-cover flex-shrink-0"
              />
              <div className="text-left">
                <p className="font-semibold text-[#333333]">{t.nombre}</p>
                <p className="text-sm text-[#666666]">{t.cargo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {testimonios.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir a testimonio ${i + 1}`}
            className={`min-w-[24px] min-h-[24px] bg-clip-content p-[7px] w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#cc0033] w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
