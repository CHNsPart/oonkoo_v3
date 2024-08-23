import { AboutInfos } from "@/components/AboutInfos";
import { Navbar } from "@/components/Navbar";
import Sparkles from "@/components/ui/sparkles";
import React from "react";
import { AboutFeatured } from "../../components/AboutFeatured";
import Footer from "../../components/Footer";
import SparklesText from "../../components/magicui/sparkles-text";
import { AnimatedTooltip } from "../../components/ui/animated-toopltip";
import { AboutTeamData } from "../../data/about";

const page = () => {
	return (
		<div className="h-full w-full bg-[#1f1c1c] flex flex-col items-center overflow-hidden rounded-md md:p-10 p-4 relative">
			<Navbar />
			<Sparkles title="OonkoO" />
			<div className="my-10">
				<AboutInfos />
			</div>
			<div className="py-10">
				<AboutFeatured />
			</div>

			<div className="py-10 mb-48">
				<SparklesText
					className="text-center"
					text="The brains behind the magic"
				/>
				<div className="flex flex-row items-center justify-center my-10 w-full">
					<AnimatedTooltip items={AboutTeamData} />
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default page;
