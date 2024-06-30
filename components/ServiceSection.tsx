import React from 'react'
import { ServiceCard } from './ServiceCard'
import SparklesText from './magicui/sparkles-text'
import Image from 'next/image'
import Particles from './magicui/particles'

export default function ServiceSection() {
  return (
    <section className="min-h-screen w-full bg-[#1F1C1C] relative flex flex-col items-center justify-center antialiased">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <Image src={"/oonkoo_logo_w.svg"} height={100} width={100} alt="logo" className='py-5' />
      <SparklesText text="Our Services" />
      <p className='text-white/50 py-5'>Comprehensive Solutions Tailored to Your Needs</p>
      <ServiceCard/>
    </section>
  )
}
