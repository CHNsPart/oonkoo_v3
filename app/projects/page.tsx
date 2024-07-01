"use client";

import Particles from "@/components/magicui/particles";
import SparklesText from "@/components/magicui/sparkles-text";
import { Navbar } from "@/components/Navbar";
import { PinContainer } from "@/components/ui/3d-pin";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { IconHome, IconLink, IconBrandTypescript, IconBrandNextjs, IconBrandTailwind, IconBrandPython, IconXd, IconBrandFigma, IconBrandReact, IconBrandFramerMotion, IconBrandStripe, IconBrandPrisma, IconFileSpreadsheet, IconBrandMongodb } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";


const Projects = () => {

  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#ffffff");
  }, [theme]);
  
  const projects = [
    {
      title: "GTA Group",
      link: "https://gta-group.pages.dev/",
      category: "e-commerce",
      icons: [<IconBrandNextjs key="icon1" className="size-6 text-white rounded-full" />, <IconBrandTailwind key="icon2" className="size-6 text-white rounded-full" />],
      thumbnail:
        "/projects/GTAGroup.png",
    },
    {
      title: "AD-IQ Admin Panel",
      link: "https://www.behance.net/gallery/180955839/Admin-Panel-Dashboard?isa0=1&log_shim_removal=1",
      category: "admin dashboard",
      icons: [<IconBrandFigma key="icon5" className="size-6 text-white rounded-full" />, <IconXd key="icon4" className="size-6 text-white rounded-full" />, <IconBrandFramerMotion key="icon4" className="size-6 text-white rounded-full" />, ],
      thumbnail:
        "/projects/project-11.png",
    },
    {
      title: "Broker Status",
      link: "https://brokerstatus-client.vercel.app/",
      category: "web application",
      icons: [<IconBrandReact key="icon6" className="size-6 text-white rounded-full" />, <IconBrandTailwind key="icon2" className="size-6 text-white rounded-full" />],
      thumbnail:
        "/projects/brokerstatus.png",
    },
  
    {
      title: "Tilex E-Commerce",
      link: "https://drive.google.com/drive/folders/0B9wf2qK3ELWVfmVHVUlLbnR1alBqeWhHMW5CVE5SQ04taVpPaVdTS05hTEYwb3dHWDBoTTQ?resourcekey=0-f1QTm3ueCfblMdoAc8Axng",
      category: "ui/ux design",
      icons: [<IconXd key="icon4" className="size-6 text-white rounded-full" />],
      thumbnail:
        "/projects/Project-3.png",
    },
    {
      title: "SDI HR Automation",
      link: "https://drive.google.com/drive/folders/0B9wf2qK3ELWVfnVlTXkwYlIyQTFwZkNnNHBtaGdhVFVDZzlXR082OGZOejJFSXAtXzlCdEU?resourcekey=0-lY7o6RqUGyDQF0F0s0ihkg",
      category: "ui/ux design",
      icons: [<IconXd key="icon4" className="size-6 text-white rounded-full" />],
      thumbnail:
        "/projects/project-4.png",
    },
    {
      title: "Ban Base",
      link: "https://drive.google.com/drive/folders/0B9wf2qK3ELWVfnlCd1dhSV9sUC1CUUVkQWc2VEhPXzJNOTNBZUFSV3BISDFLUWRHXzd3b1U?resourcekey=0-IhgFlCt2SoRt4xF4gqdeAA",
      category: "ui/ux design",
      icons: [<IconXd key="icon4" className="size-6 text-white rounded-full" />, <IconBrandFigma key="icon5" className="size-6 text-white rounded-full" />,],
      thumbnail:
        "/projects/project-5.png",
    },
  
    {
      title: "Secure Nest",
      link: "https://secure-nest.vercel.app/",
      category: "saas",
      icons: [<IconBrandNextjs key="icon1" className="size-6 text-white rounded-full" />, <IconBrandTypescript key="icon0" className="size-6 text-white rounded-full" />, <IconBrandTailwind key="icon2" className="size-6 text-white rounded-full" />, <IconXd key="icon4" className="size-6 text-white rounded-full" />, <IconBrandStripe key="icon8" className="size-6 text-white rounded-full" />, <IconBrandPrisma key="icon10" className="size-6 text-white rounded-full" />, <IconFileSpreadsheet key="icon9" className="size-6 text-white rounded-full" />],
      thumbnail:
        "/projects/secure_nest.png",
    },
    {
      title: "3 Zero Club",
      link: "https://drive.google.com/drive/folders/0B9wf2qK3ELWVfnpsV2NDcWMzNlpvemc4WU9BTS1ZN1VuVWh0TzFUWlB5alEwc2pWdXA3WVE?resourcekey=0-BrE7FHZnw8i-RInbhWq9Ig",
      category: "ui/ux design",
      icons: [<IconXd key="icon4" className="size-6 text-white rounded-full" />, <IconBrandFigma key="icon5" className="size-6 text-white rounded-full" />],
      thumbnail:
        "/projects/3zeroclub.png",
    },
    {
      title: "AD-IQ App",
      link: "https://www.behance.net/gallery/125571951/Dashboard-UI-of-DD-AD",
      category: "saas",
      icons: [<IconBrandNextjs key="icon1" className="size-6 text-white rounded-full" />, <IconBrandTypescript key="icon0" className="size-6 text-white rounded-full" />, <IconBrandPython key="icon1" className="size-6 text-white rounded-full" />, <IconBrandTailwind key="icon2" className="size-6 text-white rounded-full" />, <IconXd key="icon4" className="size-6 text-white rounded-full" />, <IconBrandFigma key="icon5" className="size-6 text-white rounded-full" />, <IconBrandPrisma key="icon10" className="size-6 text-white rounded-full" />, <IconBrandMongodb key="icon11" className="size-6 text-white rounded-full" />],
      thumbnail:
        "/projects/project-8.jpg",
    },
    {
      title: "ADIQ Primitive",
      link: "https://drive.google.com/drive/folders/0B9wf2qK3ELWVfnE4bVcyVzVWdUdMVmhpVjhKNnJCa2RfRXpDOEJFY0JuV1BRaUpBT05nc0E?resourcekey=0-weNzOxZW3HN06OisWdoWXw",
      category: "saas",
      icons: [<IconBrandNextjs key="icon1" className="size-6 text-white rounded-full" />, <IconBrandTypescript key="icon0" className="size-6 text-white rounded-full" />, <IconBrandTailwind key="icon2" className="size-6 text-white rounded-full" />, <IconXd key="icon4" className="size-6 text-white rounded-full" />, <IconBrandFigma key="icon5" className="size-6 text-white rounded-full" />, <IconBrandPrisma key="icon10" className="size-6 text-white rounded-full" />, <IconBrandMongodb key="icon11" className="size-6 text-white rounded-full" />],
      thumbnail:
        "/projects/ADIQ-Primitive.png",
    },
    {
      title: "AD-IQ System",
      link: "https://www.behance.net/gallery/125571951/Dashboard-UI-of-DD-AD",
      category: "saas",
      icons: [<IconBrandNextjs key="icon1" className="size-6 text-white rounded-full" />, <IconBrandTypescript key="icon0" className="size-6 text-white rounded-full" />, <IconBrandTailwind key="icon2" className="size-6 text-white rounded-full" />, <IconXd key="icon4" className="size-6 text-white rounded-full" />, <IconBrandFigma key="icon5" className="size-6 text-white rounded-full" />, <IconBrandPrisma key="icon10" className="size-6 text-white rounded-full" />, <IconBrandMongodb key="icon11" className="size-6 text-white rounded-full" />],
      thumbnail:
        "/projects/project-7.png",
    },
  
    {
      title: "AD-IQ Listing",
      link: "https://www.behance.net/gallery/123426619/AD-IQ-Listing-Website",
      category: "saas",
      icons: [<IconBrandNextjs key="icon1" className="size-6 text-white rounded-full" />, <IconBrandTypescript key="icon0" className="size-6 text-white rounded-full" />, <IconBrandTailwind key="icon2" className="size-6 text-white rounded-full" />, <IconXd key="icon4" className="size-6 text-white rounded-full" />, <IconBrandFigma key="icon5" className="size-6 text-white rounded-full" />, <IconBrandPrisma key="icon10" className="size-6 text-white rounded-full" />, <IconBrandMongodb key="icon11" className="size-6 text-white rounded-full" />],
      thumbnail:
        "/projects/project-6.png",
    },
    {
      title: "Medical Prone",
      link: "https://medical-prone.vercel.app/",
      category: "saas",
      icons: [<IconBrandNextjs key="icon1" className="size-6 text-white rounded-full" />, <IconBrandTypescript key="icon0" className="size-6 text-white rounded-full" />, <IconBrandTailwind key="icon2" className="size-6 text-white rounded-full" />, <IconXd key="icon4" className="size-6 text-white rounded-full" />, <IconBrandFigma key="icon5" className="size-6 text-white rounded-full" />, <IconBrandPrisma key="icon10" className="size-6 text-white rounded-full" />, <IconBrandMongodb key="icon11" className="size-6 text-white rounded-full" />],
      thumbnail:
        "/projects/project-1.png",
    },
    {
      title: "YY Studio",
      link: "https://drive.google.com/drive/folders/0B9wf2qK3ELWVfkFYYTJvTktZT2pTUXl0SEFmdmpwbDFwUzdQNTFRZXA3bWVjbFloaG91Y0U?resourcekey=0-qtlk0G9Bx8zAyOkvdP8zlQ",
      category: "ui/ux design",
      icons: [<IconXd key="icon4" className="size-6 text-white rounded-full" />, <IconBrandFigma key="icon5" className="size-6 text-white rounded-full" />],
      thumbnail:
        "/projects/Project-9.png",
    },
    {
      title: "Yunus Centre",
      link: "https://drive.google.com/drive/folders/0B9wf2qK3ELWVflZBZFc1RE5NZVVZckRvdk80WUlrYjYtSUNEenpYbzVOMnFIRmYtdDNocUE?resourcekey=0-wKQNgEfXgFjE6XoO0SSGvg",
      category: "ui/ux design",
      icons: [<IconXd key="icon4" className="size-6 text-white rounded-full" />, <IconBrandFigma key="icon5" className="size-6 text-white rounded-full" />],
      thumbnail:
        "/projects/project-10.png",
    },
    {
      title: "Mindshare",
      link: "https://www.behance.net/gallery/122890405/MindShare-Billboard-System-UIUX",
      category: "ui/ux design",
      icons: [<IconXd key="icon4" className="size-6 text-white rounded-full" />, <IconBrandFigma key="icon5" className="size-6 text-white rounded-full" />],
      thumbnail:
        "/projects/project-2.png",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-[#1F1C1C] relative flex flex-col items-center justify-start antialiased p-0 md:p-10">
      <Navbar />
      <div className="w-full h-full flex flex-col lg:flex-row justify-around items-center px-10 pt-32 lg:pt-12 z-50">
        <div className="flex flex-col gap-2 justify-center items-center lg:items-start w-fit">
          <SparklesText className="text-center lg:max-w-md lg:text-left" text="Our Pinnacle Projects" />
          <p className="max-w-lg text-white/50 pl-2 lg:pl-0 text-center lg:text-left">
            At OonkoO, we are dedicated to transforming visions into reality through our diverse and impactful projects. Our expert team leverages the latest technologies to create innovative solutions that meet real-world needs. Explore our portfolio to witness our commitment to excellence and the passion that drives our work.
          </p>
        </div>
        <div className="h-[40rem] w-fit flex items-center justify-center">
          <PinContainer title="Tweet OonkoO" href="https://twitter.com/oonkoohq">
            <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-white">
                OonkoO
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-white/50 ">
                  We build beautiful products with the latest technologies and
                  frameworks. We are a team of passionate developers and
                  designers that love to build amazing products.
                </span>
              </div>
              <Image
                className="flex flex-1 w-full rounded-lg mt-4"
                src={"/oonkoo_logo_b.svg"}
                height={50}
                width={50}
                alt="logo"
              />
            </div>
          </PinContainer>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-around items-center z-50">
        {projects.map((project, index) => (
          <div key={index} className="h-[20rem] md:h-[40rem] relative flex flex-col mt-2 items-start justify-center m-4">
            <DirectionAwareHover imageUrl={project.thumbnail}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <p className="font-bold text-xl flex items-center gap-2">
                  <IconLink className="size-6 text-white rounded-full" /> {project.title}
                </p>
                <p className="font-medium text-lg">{project.category}</p>
                <div className="flex gap-2">
                  {project.icons.map((icon, idx) => (
                    <span key={idx}>{icon}</span>
                  ))}
                </div>
              </a>
            </DirectionAwareHover>
            <a href={project.link} className="block text-white md:hidden pt-2" target="_blank" rel="noopener noreferrer">
                <p className="font-bold text-xl flex items-center gap-2">
                  <IconLink className="size-6 text-white rounded-full" /> {project.title}
                </p>
                <p className="font-medium text-lg text-primary">{project.category}</p>
                <div className="flex gap-2">
                  {project.icons.map((icon, idx) => (
                    <span key={idx}>{icon}</span>
                  ))}
                </div>
              </a>
          </div>
        ))}
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


