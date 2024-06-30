import React from 'react'
import IconCloud from './magicui/icon-cloud'
import { FlipWords } from './ui/flip-words';
import AvatarCircles from './magicui/avatar-circles';
import Link from 'next/link';

export default function Innovation() {
    const slugs = [
        "typescript",
        "javascript",
        "dart",
        "java",
        "react",
        "flutter",
        "android",
        "html5",
        "css3",
        "nodedotjs",
        "express",
        "nextdotjs",
        "prisma",
        "amazonaws",
        "postgresql",
        "firebase",
        "nginx",
        "vercel",
        "testinglibrary",
        "jest",
        "cypress",
        "docker",
        "git",
        "jira",
        "github",
        "gitlab",
        "visualstudiocode",
        "androidstudio",
        "sonarqube",
        "figma",
      ];
      const words = [
        "typescript",
        "javascript",
        "dart",
        "java",
        "react",
        "flutter",
        "android",
        "html5",
        "css3",
        "node.js",
        "express.js",
        "next.js",
        "prisma",
        "AWS",
        "postgresql",
        "firebase",
        "nginx",
        "vercel",
        "jest",
        "cypress",
        "docker",
        "git",
        "jira",
        "github",
        "androidstudio",
        "figma",
      ];
      const avatarUrls = [
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ];
  return (
    <section className='relative w-full min-h-screen flex flex-col md:flex-row justify-around lg:justify-center items-center md:gap-0 lg:gap-20 bg-[#1F1C1C]'>
        
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden p-10 lg:p-0 rounded-lg bg-none">
            <IconCloud iconSlugs={slugs} />
        </div>

        <div className="relative z-20 h-[30rem] md:h-[40rem] flex flex-col justify-center items-center text-center md:text-left px-4 gap-5">
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            With our extensive expertise in
            <br className='block lg:hidden' /> 
            <FlipWords className='md:max-w-sm' words={words} /> <br />
              we deliver sophisticated and efficient solutions.
          </div>
          <div className='w-full flex flex-col md:flex-row justify-center md:justify-start items-center gap-2'>
            <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
            <p className='text-gray-500 font-light'>Developers & Designers around the globe.</p>
          </div>
          <div className='w-full flex justify-center md:justify-start'>
            <Link target='_blank' href={"#tally-open=mKo7kz&tally-hide-title=1&tally-emoji-text=👽&tally-emoji-animation=bounce"} className="px-4 py-2 transition-all ease-in duration-200 cursor-pointer backdrop-blur-sm border bg-emerald-300/10 hover:bg-emerald-300/30 border-emerald-500/20 text-white text-center rounded-full relative">
              <span>{"Let's Have a Chat →"}</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </Link>
          </div>
        </div>
 
    </section>
  )
}
