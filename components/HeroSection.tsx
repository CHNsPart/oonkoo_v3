import React from 'react'
import { FlipWords } from './ui/flip-words'
import { BackgroundBeams } from './ui/background-beams';
import AvatarCircles from './magicui/avatar-circles';
import Link from 'next/link';

export default function HeroSection() {
  const words = ["websites", "apps", "UI", "e-commerce"];
  const avatarUrls = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <section className="min-h-screen w-full bg-[#1F1C1C] relative flex flex-col items-center justify-center antialiased">
        <div className="relative z-20 h-[40rem] flex flex-col justify-center items-center px-4 gap-5">
          <div className="text-2xl md:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Build
            <FlipWords words={words} /> 
            <br />
              with Oonkoo and watch your ideas come to life
          </div>
          <div className='w-full flex flex-col md:flex-row justify-start items-start md:items-center gap-2'>
            <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
            <p className='text-gray-500 font-light'>Developers & Designers around the globe.</p>
          </div>
          <div className='w-full flex justify-start'>
            <Link target='_blank' href={"#tally-open=mKo7kz&tally-hide-title=1&tally-emoji-text=👽&tally-emoji-animation=bounce"} className="px-4 py-2 transition-all ease-in duration-200 cursor-pointer backdrop-blur-sm border bg-emerald-300/10 hover:bg-emerald-300/30 border-emerald-500/20 text-white text-center rounded-full relative">
              <span>{"Let's Have a Chat →"}</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </Link>
          </div>
        </div>
        <BackgroundBeams />
    </section>
  )
}
