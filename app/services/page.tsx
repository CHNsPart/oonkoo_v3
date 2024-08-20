"use client";
import { AnimatedBeamMultipleOutputDemo } from "@/components/AnimatedBeamMultipleOutputDemo";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ServiceCTA from "@/components/ServiceCTA";
import { ServicesTrace } from "@/components/ServicesTrace";
import RetroGrid from "@/components/magicui/RetroGrid";
import ServicesSection from "@/components/ui/bg-overlay-card";
import React from "react";

export default function page() {
	const tabs = [
		"Custom software solutions",
		"Scalable architecture",
		"Ongoing support and maintenance",
	];

	return (
		<section className="h-full w-full bg-[#1F1C1C] relative flex flex-col items-center justify-start antialiased py-36 md:p-10">
			<Navbar />
			<div className="container relative flex h-screen w-full flex-col items-center justify-center gap-5 overflow-hidden rounded-lg bg-[#1F1C1C]">
				<div className="flex flex-col items-center text-center justify-center gap-4 md:gap-2">
					<span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-emerald-200 via-primary to-emerald-800 bg-clip-text text-center text-5xl md:text-7xl font-bold leading-none tracking-tighter text-transparent">
						Global Talent, Local Impact
					</span>
					<p className="text-white font-bold text-base md:text-lg leading-none md:leading-loose">
						Unlock world-class IT solutions tailored to your business needs.
					</p>
					<p className="text-white/50 text-sm md:text-md leading-none md:leading-loose max-w-lg">
						Our diverse team delivers top-tier IT solutions with a local touch,
						ensuring every project aligns perfectly with your goals.
					</p>
					{/* Loop through tabs */}
					<div className="flex flex-col md:flex-row gap-2 mt-4">
						{tabs.map((tab, index) => (
							<button
								key={tab}
								className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
								type="button"
							>
								<span className="absolute inset-0 overflow-hidden rounded-full">
									<span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
								</span>
								<div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
									<span>{tab}</span>
									<span>✦</span>
								</div>
							</button>
						))}
					</div>
				</div>
				<div className="flex flex-col items-start w-full gap-2">
					<AnimatedBeamMultipleOutputDemo />
				</div>
				<RetroGrid />
			</div>
			<div className="py-10">
				<ServicesTrace />
			</div>
			<div className="mb-24 mt-10">
				<ServicesSection />
			</div>
			<div className="mb-24 mt-10">
				<ServiceCTA />
			</div>
			<Footer />
		</section>
	);
}
