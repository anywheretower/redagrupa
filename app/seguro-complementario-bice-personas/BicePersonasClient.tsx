"use client"

import Image from "next/image"
import Link from "next/link"
import {
  UsersIcon,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle2,
  BedDouble,
  Stethoscope,
  Siren,
  Pill,
  Smile,
  PawPrint,
  ArrowRightLeft,
  FileCheck,
  ShieldCheck,
  Users,
  Heart,
  MapPin,
  Mail,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/MobileMenu"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import RevealOnScroll from "@/components/RevealOnScroll"
import { motion } from "motion/react"
import { staggerContainer, staggerItem } from "@/lib/animations"

export default function BicePersonasClient() {
  const scrollToForm = () => {
    document.getElementById("formulario-contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#cc0033] text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center -ml-2 lg:ml-0">
            <Image
              src="/images/logo-20redagrupa-3.png"
              alt="RedAgrupa Logo"
              width={160}
              height={40}
              className="h-6 md:h-8 w-auto"
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/nosotros" className="text-white font-medium text-sm">
              Nosotros
            </Link>
            <Link href="/seguros-salud" className="text-white font-medium text-sm">
              Seguro Complementario Salud
            </Link>
            <Link href="/beneficios-redagrupa" className="text-white font-medium text-sm">
              Beneficios RedAgrupa
            </Link>
            <Link href="/seguro-complementario-bice-pyme" className="text-white font-medium text-sm">
              Seguro BICE Pyme
            </Link>
            <Link href="/seguro-complementario-bice-personas" className="text-white font-medium text-sm">
              Seguro BICE Personas
            </Link>
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 w-[180px]"
              onClick={scrollToForm}
            >
              Solicitar Asesoría
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-white text-white hover:bg-white/10"
              asChild
            >
              <a href="/contactos" target="_blank" rel="noopener noreferrer">
                <UsersIcon className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <MobileMenu />
        </div>
      </header>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
        <a
          href="https://www.facebook.com/RedAgrupa/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
        >
          <Facebook className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a
          href="https://www.instagram.com/redagrupa/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
        >
          <Instagram className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/company/redagrupa"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-[#cc0033] hover:bg-[#a30029] flex items-center justify-center shadow-lg transition-colors"
        >
          <Linkedin className="w-4 h-4 text-white" strokeWidth={1.5} />
        </a>
      </div>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <RevealOnScroll className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl font-bold text-[#cc0033]">
                Seguro de Salud Complementario para Personas
              </h1>
              <Image
                src="/images/logo-bice-vida.avif"
                alt="BICE Vida"
                width={200}
                height={50}
                className="mx-auto h-14 w-auto object-contain -mt-2 mb-1"
              />
              <p className="text-base text-gray-700 leading-[1.1]">
                Protege tu salud y la de tu familia con la seguridad y solidez de BICE Vida,
                disponible a traves de RedAgrupa. Un seguro disenado para personas que buscan
                complementar la cobertura de su Isapre o Fonasa con tranquilidad y respaldo.
              </p>
              <p className="text-base text-gray-700 leading-[1.1]">
                Los imprevistos medicos pueden ocurrir en cualquier momento. No dejes tu salud
                al azar, con RedAgrupa y BICE Vida te respaldamos cada dia.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-[#cc0033] hover:bg-[#a30029] text-white px-8 py-3 w-full sm:w-64">
                  <a href="https://segurocomplementariosalud.bicevida.cl/?negocio=aEd0TFolRnQjQzY17OVzwP1NaCN6_V6AdjkZ9TXI5bnYVyiV0rM" target="_blank" rel="noopener noreferrer">
                    Contrata Aquí
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#cc0033] text-[#cc0033] hover:bg-red-50 px-8 py-3 w-full sm:w-64"
                  onClick={scrollToForm}
                >
                  Solicitar Asesoría
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Que cubre */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <RevealOnScroll>
                <div className="text-center space-y-4 mb-16">
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666]">
                    Coberturas principales
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900">
                    ¿Que cubre este seguro de salud?
                  </h2>
                  <p className="text-base text-gray-700 max-w-3xl mx-auto leading-[1.1]">
                    Reembolsa gastos por hospitalizacion, consultas, urgencias y medicamentos
                    que tu Isapre o Fonasa no cubren del todo.
                  </p>
                </div>
              </RevealOnScroll>

              <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                <motion.div variants={staggerItem} className="text-center space-y-3">
                  <BedDouble className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Hospitalizacion</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Cobertura para cirugias, estadias clinicas y procedimientos hospitalarios
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="text-center space-y-3">
                  <Stethoscope className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Consultas medicas</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Atencion ambulatoria, consultas con especialistas y examenes
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="text-center space-y-3">
                  <Siren className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Urgencias</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Atencion de emergencia en clinicas y hospitales
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="text-center space-y-3">
                  <Pill className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Medicamentos</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Reembolso en farmacia segun receta medica
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Para quien es */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                <div className="text-center space-y-4 mb-16">
                  <Users className="w-12 h-12 text-[#cc0033] mx-auto" strokeWidth={1.5} />
                  <h2 className="text-2xl font-bold text-gray-900">
                    ¿Para quien es?
                  </h2>
                  <p className="text-base text-gray-700 leading-[1.1] max-w-3xl mx-auto">
                    Pueden acceder personas entre 18 y 64 anos, sus parejas e hijos, esten en
                    Isapre o Fonasa. Un seguro pensado para proteger a toda tu familia.
                  </p>
                </div>
              </RevealOnScroll>

              <motion.div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                <motion.div variants={staggerItem} className="text-center space-y-3">
                  <div className="w-16 h-16 bg-[#cc0033] rounded-full flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Titular</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Personas entre 18 y 64 anos
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="text-center space-y-3">
                  <div className="w-16 h-16 bg-[#cc0033] rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Pareja</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Conyuges o convivientes
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="text-center space-y-3">
                  <div className="w-16 h-16 bg-[#cc0033] rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Hijos</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Hijos dependientes del titular
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Como funciona el reembolso */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                <div className="text-center space-y-4 mb-16">
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666]">
                    Proceso simple y transparente
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900">
                    ¿Como funciona el reembolso?
                  </h2>
                  <p className="text-base text-gray-700 leading-[1.1] max-w-3xl mx-auto">
                    En simples pasos, te devolvemos un porcentaje de lo que no cubrio tu prevision.
                    Sencillo y transparente.
                  </p>
                </div>
              </RevealOnScroll>

              <motion.div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                <motion.div variants={staggerItem} className="text-center space-y-3">
                  <div className="w-12 h-12 bg-[#cc0033] rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-white text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Atencion medica</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Acude a tu consulta, hospitalizacion o urgencia como lo haces habitualmente
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="text-center space-y-3">
                  <div className="w-12 h-12 bg-[#cc0033] rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-white text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Envia tu solicitud</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Presenta los documentos de respaldo para solicitar el reembolso de tus gastos
                  </p>
                </motion.div>
                <motion.div variants={staggerItem} className="text-center space-y-3">
                  <div className="w-12 h-12 bg-[#cc0033] rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">Recibe tu reembolso</h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    Te devolvemos el porcentaje correspondiente segun tu plan de forma rapida
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Planes y beneficios adicionales */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RevealOnScroll>
                <div className="text-center space-y-4 mb-16">
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-[#666666]">
                    Desde cobertura estandar a elite
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Planes y beneficios adicionales
                  </h2>
                  <p className="text-base text-gray-700 leading-[1.1] max-w-3xl mx-auto">
                    Desde cobertura estandar a elite, puedes sumar asistencia dental y veterinaria
                    segun el plan que elijas. Elige la proteccion que mejor se adapte a tu necesidad.
                  </p>
                </div>
              </RevealOnScroll>

              <motion.div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                <motion.div variants={staggerItem} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#cc0033] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smile className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-1">Asistencia dental completa</h3>
                    <p className="text-sm text-gray-600 leading-snug">
                      Cobertura dental opcional para consultas, tratamientos y procedimientos
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={staggerItem} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#cc0033] rounded-lg flex items-center justify-center flex-shrink-0">
                    <PawPrint className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-1">Asistencia veterinaria para mascotas</h3>
                    <p className="text-sm text-gray-600 leading-snug">
                      Proteccion para tu mascota incluida en los planes Elite
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={staggerItem} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#cc0033] rounded-lg flex items-center justify-center flex-shrink-0">
                    <ArrowRightLeft className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-1">Reembolsos rapidos y transparentes</h3>
                    <p className="text-sm text-gray-600 leading-snug">
                      Proceso agil de devolucion sin tramites complicados
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={staggerItem} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#cc0033] rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-1">Sin tramites complicados</h3>
                    <p className="text-sm text-gray-600 leading-snug">
                      Contratacion y uso simple, sin papeleos innecesarios
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <RevealOnScroll className="max-w-4xl mx-auto text-center space-y-6">
              <Image
                src="/images/logo-bice-vida.avif"
                alt="BICE Vida"
                width={180}
                height={50}
                className="mx-auto h-10 w-auto object-contain"
              />
              <h2 className="text-2xl font-bold text-gray-900">
                Cotiza y protege tu salud hoy
              </h2>
              <p className="text-base text-gray-700 leading-[1.1] max-w-3xl mx-auto">
                Cotiza rapido y asegurate con el respaldo de BICE Vida. Da el paso a la
                tranquilidad para ti y tu familia.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-[#cc0033] hover:bg-[#a30029] text-white px-8 py-3 w-full sm:w-64">
                  <a href="https://segurocomplementariosalud.bicevida.cl/?negocio=aEd0TFolRnQjQzY17OVzwP1NaCN6_V6AdjkZ9TXI5bnYVyiV0rM" target="_blank" rel="noopener noreferrer">
                    Contrata Aquí
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#cc0033] text-[#cc0033] hover:bg-red-50 px-8 py-3 w-full sm:w-64"
                  onClick={scrollToForm}
                >
                  Solicitar Asesoría
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-[#cc0033]" id="formulario-contacto">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
              <RevealOnScroll className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl">
                <ContactForm
                  pagina="bice-personas"
                  heading="Solicita más información sobre el seguro complementario BICE Vida"
                  variant="personas"
                />
              </RevealOnScroll>

              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">
                  Protege tu salud y la de tu familia con el respaldo de BICE Vida
                </h2>
                <p className="text-base text-white/90 leading-[1.1]">
                  Nuestro equipo de asesores te orienta sin costo para que elijas la cobertura
                  que mejor se adapte a ti y a tu familia. Sencillo, transparente y sin tramites
                  complicados.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
