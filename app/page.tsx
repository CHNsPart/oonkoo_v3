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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
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
      <Footer/>
    </main>
  );
}
