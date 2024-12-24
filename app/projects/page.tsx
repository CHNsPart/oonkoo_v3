"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Particles from "@/components/magicui/particles";
import SparklesText from "@/components/magicui/sparkles-text";
import { PinContainer } from "@/components/ui/3d-pin";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import {
  IconBrandFigma, IconBrandFramerMotion, IconBrandMongodb, IconBrandNextjs,
  IconBrandPrisma, IconBrandPython, IconBrandReact, IconBrandStripe,
  IconBrandTailwind, IconBrandTypescript, IconFileSpreadsheet, IconLink, IconXd,
  IconFilter
} from "@tabler/icons-react";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#ffffff");
    setIsVisible(true);
  }, [theme]);

  // Your existing projects array here
	const projects = [
		{
			title: "WhoWorksWhen",
			link: "https://whoworkswhen.com/",
			category: "saas",
			icons: [
				<IconBrandNextjs
					key="icon1"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandTypescript
					key="icon0"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandTailwind
					key="icon2"
					className="size-6 text-white rounded-full"
				/>,
				<IconXd key="icon4" className="size-6 text-white rounded-full" />,
				<IconBrandStripe
					key="icon8"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandPrisma
					key="icon10"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandFramerMotion
					key="icon4"
					className="size-6 text-white rounded-full"
				/>,
			],
			thumbnail: "/projects/www.png",
		},
		{
			title: "GTA Group",
			link: "https://gta-group.pages.dev/",
			category: "e-commerce",
			icons: [
				<IconBrandNextjs
					key="icon1"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandTailwind
					key="icon2"
					className="size-6 text-white rounded-full"
				/>,
			],
			thumbnail: "/projects/GTAGroup.png",
		},
		{
			title: "AD-IQ Admin Panel",
			link: "https://www.behance.net/gallery/180955839/Admin-Panel-Dashboard?isa0=1&log_shim_removal=1",
			category: "admin dashboard",
			icons: [
				<IconBrandFigma
					key="icon5"
					className="size-6 text-white rounded-full"
				/>,
				<IconXd key="icon4" className="size-6 text-white rounded-full" />,
				<IconBrandFramerMotion
					key="icon4"
					className="size-6 text-white rounded-full"
				/>,
			],
			thumbnail: "/projects/project-11.png",
		},
		{
			title: "Broker Status",
			link: "https://brokerstatus-client.vercel.app/",
			category: "web application",
			icons: [
				<IconBrandReact
					key="icon6"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandTailwind
					key="icon2"
					className="size-6 text-white rounded-full"
				/>,
			],
			thumbnail: "/projects/brokerstatus.png",
		},

		{
			title: "Tilex E-Commerce",
			link: "https://drive.google.com/drive/folders/0B9wf2qK3ELWVfmVHVUlLbnR1alBqeWhHMW5CVE5SQ04taVpPaVdTS05hTEYwb3dHWDBoTTQ?resourcekey=0-f1QTm3ueCfblMdoAc8Axng",
			category: "ui/ux design",
			icons: [
				<IconXd key="icon4" className="size-6 text-white rounded-full" />,
			],
			thumbnail: "/projects/Project-3.png",
		},
		{
			title: "SDI HR Automation",
			link: "https://drive.google.com/drive/folders/0B9wf2qK3ELWVfnVlTXkwYlIyQTFwZkNnNHBtaGdhVFVDZzlXR082OGZOejJFSXAtXzlCdEU?resourcekey=0-lY7o6RqUGyDQF0F0s0ihkg",
			category: "ui/ux design",
			icons: [
				<IconXd key="icon4" className="size-6 text-white rounded-full" />,
			],
			thumbnail: "/projects/project-4.png",
		},
		{
			title: "Ban Base",
			link: "https://drive.google.com/drive/folders/0B9wf2qK3ELWVfnlCd1dhSV9sUC1CUUVkQWc2VEhPXzJNOTNBZUFSV3BISDFLUWRHXzd3b1U?resourcekey=0-IhgFlCt2SoRt4xF4gqdeAA",
			category: "ui/ux design",
			icons: [
				<IconXd key="icon4" className="size-6 text-white rounded-full" />,
				<IconBrandFigma
					key="icon5"
					className="size-6 text-white rounded-full"
				/>,
			],
			thumbnail: "/projects/project-5.png",
		},

		{
			title: "Secure Nest",
			link: "https://secure-nest.vercel.app/",
			category: "saas",
			icons: [
				<IconBrandNextjs
					key="icon1"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandTypescript
					key="icon0"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandTailwind
					key="icon2"
					className="size-6 text-white rounded-full"
				/>,
				<IconXd key="icon4" className="size-6 text-white rounded-full" />,
				<IconBrandStripe
					key="icon8"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandPrisma
					key="icon10"
					className="size-6 text-white rounded-full"
				/>,
				<IconFileSpreadsheet
					key="icon9"
					className="size-6 text-white rounded-full"
				/>,
			],
			thumbnail: "/projects/secure_nest.png",
		},
		{
			title: "3 Zero Club",
			link: "https://drive.google.com/drive/folders/0B9wf2qK3ELWVfnpsV2NDcWMzNlpvemc4WU9BTS1ZN1VuVWh0TzFUWlB5alEwc2pWdXA3WVE?resourcekey=0-BrE7FHZnw8i-RInbhWq9Ig",
			category: "ui/ux design",
			icons: [
				<IconXd key="icon4" className="size-6 text-white rounded-full" />,
				<IconBrandFigma
					key="icon5"
					className="size-6 text-white rounded-full"
				/>,
			],
			thumbnail: "/projects/3zeroclub.png",
		},
		{
			title: "AD-IQ App",
			link: "https://www.behance.net/gallery/125571951/Dashboard-UI-of-DD-AD",
			category: "saas",
			icons: [
				<IconBrandNextjs
					key="icon1"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandTypescript
					key="icon0"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandPython
					key="icon1"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandTailwind
					key="icon2"
					className="size-6 text-white rounded-full"
				/>,
				<IconXd key="icon4" className="size-6 text-white rounded-full" />,
				<IconBrandFigma
					key="icon5"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandPrisma
					key="icon10"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandMongodb
					key="icon11"
					className="size-6 text-white rounded-full"
				/>,
			],
			thumbnail: "/projects/project-8.jpg",
		},
		{
			title: "ADIQ Primitive",
			link: "https://drive.google.com/drive/folders/0B9wf2qK3ELWVfnE4bVcyVzVWdUdMVmhpVjhKNnJCa2RfRXpDOEJFY0JuV1BRaUpBT05nc0E?resourcekey=0-weNzOxZW3HN06OisWdoWXw",
			category: "saas",
			icons: [
				<IconBrandNextjs
					key="icon1"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandTypescript
					key="icon0"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandTailwind
					key="icon2"
					className="size-6 text-white rounded-full"
				/>,
				<IconXd key="icon4" className="size-6 text-white rounded-full" />,
				<IconBrandFigma
					key="icon5"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandPrisma
					key="icon10"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandMongodb
					key="icon11"
					className="size-6 text-white rounded-full"
				/>,
			],
			thumbnail: "/projects/ADIQ-Primitive.png",
		},
		{
			title: "AD-IQ System",
			link: "https://www.behance.net/gallery/125571951/Dashboard-UI-of-DD-AD",
			category: "saas",
			icons: [
				<IconBrandNextjs
					key="icon1"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandTypescript
					key="icon0"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandTailwind
					key="icon2"
					className="size-6 text-white rounded-full"
				/>,
				<IconXd key="icon4" className="size-6 text-white rounded-full" />,
				<IconBrandFigma
					key="icon5"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandPrisma
					key="icon10"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandMongodb
					key="icon11"
					className="size-6 text-white rounded-full"
				/>,
			],
			thumbnail: "/projects/project-7.png",
		},

		{
			title: "AD-IQ Listing",
			link: "https://www.behance.net/gallery/123426619/AD-IQ-Listing-Website",
			category: "saas",
			icons: [
				<IconBrandNextjs
					key="icon1"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandTypescript
					key="icon0"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandTailwind
					key="icon2"
					className="size-6 text-white rounded-full"
				/>,
				<IconXd key="icon4" className="size-6 text-white rounded-full" />,
				<IconBrandFigma
					key="icon5"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandPrisma
					key="icon10"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandMongodb
					key="icon11"
					className="size-6 text-white rounded-full"
				/>,
			],
			thumbnail: "/projects/project-6.png",
		},
		{
			title: "Medical Prone",
			link: "https://medical-prone.vercel.app/",
			category: "saas",
			icons: [
				<IconBrandNextjs
					key="icon1"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandTypescript
					key="icon0"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandTailwind
					key="icon2"
					className="size-6 text-white rounded-full"
				/>,
				<IconXd key="icon4" className="size-6 text-white rounded-full" />,
				<IconBrandFigma
					key="icon5"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandPrisma
					key="icon10"
					className="size-6 text-white rounded-full"
				/>,
				<IconBrandMongodb
					key="icon11"
					className="size-6 text-white rounded-full"
				/>,
			],
			thumbnail: "/projects/project-1.png",
		},
		{
			title: "YY Studio",
			link: "https://drive.google.com/drive/folders/0B9wf2qK3ELWVfkFYYTJvTktZT2pTUXl0SEFmdmpwbDFwUzdQNTFRZXA3bWVjbFloaG91Y0U?resourcekey=0-qtlk0G9Bx8zAyOkvdP8zlQ",
			category: "ui/ux design",
			icons: [
				<IconXd key="icon4" className="size-6 text-white rounded-full" />,
				<IconBrandFigma
					key="icon5"
					className="size-6 text-white rounded-full"
				/>,
			],
			thumbnail: "/projects/Project-9.png",
		},
		{
			title: "Yunus Centre",
			link: "https://drive.google.com/drive/folders/0B9wf2qK3ELWVflZBZFc1RE5NZVVZckRvdk80WUlrYjYtSUNEenpYbzVOMnFIRmYtdDNocUE?resourcekey=0-wKQNgEfXgFjE6XoO0SSGvg",
			category: "ui/ux design",
			icons: [
				<IconXd key="icon4" className="size-6 text-white rounded-full" />,
				<IconBrandFigma
					key="icon5"
					className="size-6 text-white rounded-full"
				/>,
			],
			thumbnail: "/projects/project-10.png",
		},
		{
			title: "Mindshare",
			link: "https://www.behance.net/gallery/122890405/MindShare-Billboard-System-UIUX",
			category: "ui/ux design",
			icons: [
				<IconXd key="icon4" className="size-6 text-white rounded-full" />,
				<IconBrandFigma
					key="icon5"
					className="size-6 text-white rounded-full"
				/>,
			],
			thumbnail: "/projects/project-2.png",
		},
	];

  const categories = ["all", "saas", "e-commerce", "ui/ux design", "web application"];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get featured project (first SAAS project)
  const featuredProject = projects.find(project => project.category === "saas");

  const CategoryButton = ({ category }: { category: string }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setSelectedCategory(category)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all
        ${selectedCategory === category 
          ? 'bg-primary text-white' 
          : 'bg-white/5 text-white/70 hover:bg-white/10'
        }`}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </motion.button>
  );

  const ProjectCard = ({ project }: { project: any }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-[20rem] md:h-[40rem] relative flex flex-col items-start justify-center m-4 transition-all duration-500"
    >
      <DirectionAwareHover imageUrl={project.thumbnail}>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="font-bold text-xl flex items-center gap-2">
              <IconLink className="size-6 text-white rounded-full" />
              {project.title}
            </p>
            <p className="font-medium text-lg">{project.category}</p>
            <div className="flex gap-2 mt-2">
              {project.icons.map((icon:any, idx:any) => (
                <motion.span
                  key={icon.key}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  {icon}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </a>
      </DirectionAwareHover>
    </motion.div>
  );

  return (
    <section className="min-h-screen w-full bg-[#1F1C1C] relative flex flex-col items-center justify-start antialiased p-0 md:p-10">
      <Navbar />

      {/* Hero Section with Featured Project */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full flex flex-col lg:flex-row justify-around items-center px-10 pt-32 lg:pt-24 z-50 relative"
      >
        <div className="flex flex-col gap-4 justify-center items-center lg:items-start w-full lg:w-1/2">
          <SparklesText
            text="Our Pinnacle Projects"
            className="text-center lg:text-left text-4xl md:text-6xl"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-lg text-center lg:text-left"
          >
            Discover our portfolio of innovative solutions that transform visions into reality.
            Each project represents our commitment to excellence and passion for cutting-edge technology.
          </motion.p>

          {/* Search and Categories */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="w-full max-w-md"
          >
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                text-white placeholder-white/40 focus:outline-none focus:border-primary/50
                transition-all duration-300"
            />
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-2 mt-4"
          >
            {categories.map((category) => (
              <CategoryButton key={category} category={category} />
            ))}
          </motion.div>
        </div>

        {/* Featured Project in PinContainer */}
        {featuredProject && (
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <PinContainer
              title={featuredProject.title}
              href={featuredProject.link}
            >
              <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-white">
                  Featured Project
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-white/50">
                    {featuredProject.category}
                  </span>
                </div>
                <Image
                  className="flex flex-1 w-full rounded-lg mt-4 object-cover"
                  src={featuredProject.thumbnail}
                  height={200}
                  width={200}
                  alt={featuredProject.title}
                />
              </div>
            </PinContainer>
          </div>
        )}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 relative z-50"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Background Effects */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
			<div className="w-full mt-32">
				<Footer/>
			</div>
    </section>
  );
};

export default ProjectsPage;