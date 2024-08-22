import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { cn } from "../lib/utils";
import AnimatedShinyText from "./magicui/animated-shiny-text";
import GradualSpacing from "./magicui/gradual-spacing";

const ContactHeader = () => {
	return (
		<div className="mt-48">
			<GradualSpacing
				text="Build your Dream Project"
				className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-emerald-200 via-primary to-emerald-800 bg-clip-text text-center text-xl md:text-5xl lg:text-7xl font-bold leading-none tracking-tighter text-transparent"
			/>
			<div className="flex items-center justify-center mt-6">
				<div
					className={cn(
						"group rounded-full border border-black/5 text-base text-white transition-all ease-in hover:cursor-pointer dark:border-white/5 bg-neutral-900 hover:bg-neutral-800 self-start w-fit ",
					)}
				>
					<AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-white hover:duration-300 text-neutral-200">
						<span>✨ Introducing Custom AI Model</span>
						<ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
					</AnimatedShinyText>
				</div>
			</div>
		</div>
	);
};

export default ContactHeader;
