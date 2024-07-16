import React from 'react'
import Link from 'next/link';

export default function ServiceCTA() {
  return (
    <section className="w-full bg-[#1F1C1C] flex flex-col items-center justify-center antialiased py-16">
      <div className="flex flex-col justify-center items-center px-4 gap-5">
        <h2 className="text-2xl md:text-3xl font-normal text-neutral-200 text-center mb-4">
          Ready to bring your <br className='block md:hidden' /> ideas to life?
        </h2>
        <div className='w-full flex justify-center'>
          <Link 
            href={"#tally-open=mKo7kz&tally-hide-title=1&tally-emoji-text=�&tally-emoji-animation=bounce"} 
            target='_blank' 
            className="px-6 py-3 transition-all ease-in duration-200 cursor-pointer backdrop-blur-sm border bg-emerald-300/10 hover:bg-emerald-300/30 border-emerald-500/20 text-white text-center rounded-full relative"
          >
            <span>{"Get Started with Oonkoo →"}</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </Link>
        </div>
      </div>
    </section>
  )
}