"use client"

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IconBuildingSkyscraper, IconCode, IconPuzzle, IconRocket, IconUsers, IconWorld } from "@tabler/icons-react";
import { AnimatedTooltip } from "@/components/ui/animated-toopltip";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { BackgroundBeams } from "@/components/ui/background-beams";
import SparklesText from "@/components/magicui/sparkles-text";
import Link from "next/link";

const team = [
  {
    id: 1,
    name: "Touhidul Islam Chayan",
    designation: "CEO/CTO & Founder",
    image: "https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/272624795_4776162262438316_2706778632465731031_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=nxFD-ui_wBIQ7kNvgEUhUwN&_nc_zt=23&_nc_ht=scontent-yyz1-1.xx&_nc_gid=AFYNeJ-_GYYW6LBANCV8zTW&oh=00_AYDwAMPekaBK9N4ZbfO_EpGC2BTwlIEj3GBe9UZjeG5Jdg&oe=67706722",
  },
  {
    id: 2,
    name: "Asif Shariar",
    designation: "Client Management",
    image: "https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/465124709_3727367560926448_6275535182979194491_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9IH-pSCNDvoQ7kNvgGwyryv&_nc_zt=23&_nc_ht=scontent-yyz1-1.xx&_nc_gid=AQ1rorO0v1rdAnGlB6ayuOu&oh=00_AYBD4QDzBQYu1oT7WKGETKyU5OU7Q-SB-QE9FOP211wlzg&oe=67705D23",
  },
  {
    id: 3,
    name: "Saif Anwar",
    designation: "HR Management",
    image: "https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-1/107815425_737610520334219_3539519501191496345_n.jpg?stp=c0.24.271.271a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=gVuWMa5x6tcQ7kNvgEBh9ty&_nc_zt=24&_nc_ht=scontent-yyz1-1.xx&_nc_gid=AA1KO2-FMT_ixlE-cDyEzWy&oh=00_AYB6_bkySDx8wJTj-EkJ_VWv0Lgi3G1dU0reAY4AbfMjfw&oe=6791EF84",
  },
  {
    id: 4,
    name: "Fahim Anis Khan",
    designation: "Marketing Executive",
    image: "https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/154554542_3242192825882934_2069012198837777630_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=JsOt6P8f8KUQ7kNvgH10sa1&_nc_zt=23&_nc_ht=scontent-yyz1-1.xx&_nc_gid=Ae9Bjcr_c6oDUnzja2IeQUA&oh=00_AYBncM24-67_yifbjGwUQtHtLjcn74wApGc2g0zQWzJHvg&oe=6791FFA8",
  },
];

const stats = [
  {
    id: 1,
    name: "Global Clients",
    value: "100+",
    icon: <IconWorld className="h-8 w-8" />,
  },
  {
    id: 2,
    name: "Team Members",
    value: "50+",
    icon: <IconUsers className="h-8 w-8" />,
  },
  {
    id: 3,
    name: "Projects Completed",
    value: "200+",
    icon: <IconBuildingSkyscraper className="h-8 w-8" />,
  },
  {
    id: 4,
    name: "Success Rate",
    value: "98%",
    icon: <IconRocket className="h-8 w-8" />,
  },
];

const values = [
  {
    title: "Innovation First",
    description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
    icon: <IconCode className="h-6 w-6 text-primary" />,
  },
  {
    title: "Client Success",
    description: "Your success is our priority. We work closely with you to understand and achieve your goals.",
    icon: <IconUsers className="h-6 w-6 text-primary" />,
  },
  {
    title: "Quality Driven",
    description: "We maintain the highest standards in everything we do, from code to design to client service.",
    icon: <IconPuzzle className="h-6 w-6 text-primary" />,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#1f1c1c] text-white relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <BackgroundBeams />
        <div className="relative z-10 text-center">
          <SparklesText 
            text="Who We Are" 
            colors={{ first: "#3CB371", second: "#6AF350" }}
            className="text-5xl md:text-7xl"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto px-4"
          >
            A global collective of innovators, designers, and developers crafting 
            digital excellence through creativity and technical mastery.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stat.id * 0.1 }}
                className="flex flex-col items-center justify-center p-6 rounded-lg bg-green-900/10 border border-green-500/20"
              >
                <div className="text-primary mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-white/60 mt-1">{stat.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto space-y-8">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-bold text-primary"
            >
              Our Story
            </motion.h2>
            <div className="prose prose-invert">
              <p>
                {"Founded with a vision to bridge the gap between global talent and local impact, OonkoO has grown into a dynamic force in digital innovation. Our journey began with a simple belief: exceptional technology should be accessible to businesses of all sizes."}
              </p>
              <p>
                {"Today, we're proud to be trusted by organizations worldwide, delivering cutting-edge solutions that drive real business outcomes. Our team spans continents, bringing diverse perspectives and expertise to every project."}
              </p>
              <p>
                {"We don't just build digital solutions; we craft experiences that resonate, platforms that perform, and partnerships that last. Our commitment to excellence is matched only by our passion for innovation."}
              </p>
            </div>
          </div>
        </TracingBeam>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg bg-green-900/10 border border-green-500/20"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-primary">Our Leadership</h2>
          <div className="flex flex-wrap justify-center gap-10">
            <AnimatedTooltip items={team} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-20 pb-36 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-white/60 mb-8 text-lg">
            Join forces with OonkoO and transform your digital vision into reality.
          </p>
					<Link target='_blank' href={"#tally-open=mKo7kz&tally-hide-title=1&tally-emoji-text=👽&tally-emoji-animation=bounce"} className="px-8 py-3 transition-all ease-in duration-200 cursor-pointer backdrop-blur-sm border bg-emerald-300/10 hover:bg-emerald-300/30 border-emerald-500/20 text-white text-center rounded-full relative">
						<span>{"Let's Work Together →"}</span>
						<div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
					</Link>
        </div>
        <BackgroundBeams className="opacity-20" />
      </section>

      <div className="w-full pt-32">
				<Footer/>
			</div>
    </main>
  );
}