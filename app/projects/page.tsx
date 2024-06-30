"use client";

import Particles from "@/components/magicui/particles";
import SparklesText from "@/components/magicui/sparkles-text";
import { Navbar } from "@/components/Navbar";
import { PinContainer } from "@/components/ui/3d-pin";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";


const Projects = () => {

  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#ffffff");
  }, [theme]);

  return (
    <section className="min-h-screen w-full bg-[#1F1C1C] relative flex flex-col items-center justify-start antialiased p-10">
        <Navbar/>
        <div className="w-full h-full flex flex-col lg:flex-row justify-around items-center pt-32 lg:py-12">
          <div className="flex flex-col gap-2 justify-center items-center lg:items-start w-fit">
            <SparklesText className="text-center" text="Our Projects" /> 
            <p className="max-w-lg text-white/50 pl-2 lg:pl-0 text-center lg:text-left"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora corporis eius nesciunt eveniet voluptatem, natus error, accusamus adipisci explicabo iure? Odit, recusandae quis laudantium facilis amet a sapiente repellendus.</p>
          </div>
          <div className="h-[40rem] w-fit flex items-center justify-center ">
          
            <PinContainer
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-white">
                  OonkoO
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-white/50 ">
                    We build beautiful products with the latest technologies and frameworks. We are a team of passionate developers and designers that love to build amazing products.
                  </span>
                </div>
                <Image className="flex flex-1 w-full rounded-lg mt-4" src={"/oonkoo_logo_b.svg"} height={50} width={50} alt="logo" />                
              </div>
            </PinContainer>
      
          </div>
        </div>
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color={color}
            refresh
          />
    </section>
  )
}

export default Projects;


