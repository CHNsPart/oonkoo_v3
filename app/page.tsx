import Footer from "@/components/Footer";
import { GlobeOonkoO } from "@/components/GlobeOonkoO";
import HeroSection from "@/components/HeroSection";
import Innovation from "@/components/Innovation";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Navbar } from "@/components/Navbar";
import { OurProjects } from "@/components/OurProjects";
import PartnerSection from "@/components/PartnerSection";
import { ProjectCTA } from "@/components/ProjectCTA";
import ReviewSection from "@/components/ReviewSection";
import { ServiceBento } from "@/components/ServiceBento";
import ServiceSection from "@/components/ServiceSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Link target='_blank' href={"https://api.whatsapp.com/send?phone=+16476794219"} className="px-4 py-2 right-10 bottom-10 fixed z-50 transition-all ease-in duration-200 cursor-pointer backdrop-blur-sm border bg-emerald-300/10 hover:bg-emerald-300/30 border-emerald-500/20 text-white text-center rounded-full">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00b341" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
          </span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-2/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </Link>
      <Navbar/>
      <HeroSection/>
      <PartnerSection/>
      <ServiceSection/>
        <VelocityScroll
          text="// 👾 !== 0onko0 // 👽 \\ "
          default_velocity={2}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-primary drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
      <div className="w-full pt-48 pb-24 px-5 bg-[#1F1C1C]">
        <ServiceBento/>
      </div>
      <div className="w-full bg-[#1F1C1C]">
        <OurProjects/>
      </div>
      <ReviewSection/>
      <Innovation/>
      <ProjectCTA/>
      <GlobeOonkoO/>
    </main>
  );
}
