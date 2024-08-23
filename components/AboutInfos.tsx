import BoxReveal from "@/components/magicui/box-reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ShimmerButton from "./magicui/shimmer-button";

export async function AboutInfos() {
	return (
		<div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8 text-white text-center">
			<BoxReveal boxColor={"hsl(var(--primary)"} duration={0.5}>
				<p className="text-[3.5rem] font-semibold text-center">
					About Us<span className="text-primary">.</span>
				</p>
			</BoxReveal>

			<BoxReveal boxColor={"hsl(var(--primary)"} duration={0.5}>
				<h2 className="mt-[.5rem] text-[1rem]">
					One-stop solution for{" "}
					<span className="text-primary">Tech Products</span>
				</h2>
			</BoxReveal>

			<BoxReveal boxColor={"hsl(var(--primary)"} duration={0.5}>
				<div className="mt-[1.5rem] text-left">
					<p>
						-&gt; 20+ tech solutions built with
						<span className="font-semibold text-primary"> Next.Js</span>,
						<span className="font-semibold text-primary"> Typescript</span>,
						<span className="font-semibold text-primary"> Tailwind CSS</span>,
						<span className="font-semibold text-primary">
							{" "}
							Custom and Scalable backend
						</span>
						, and
						<span className="font-semibold text-primary"> Framer Motion</span>.
						<br />
						-&gt;
						<span className="font-semibold text-primary">
							Fully Responsive{" "}
						</span>
						and
						<span className="font-semibold text-primary"> Optimized </span>
						for performance across all devices, ensuring a seamless user
						experience. <br />
						<br />
						Designed with{" "}
						<span className="font-semibold text-primary">scalability</span> in
						mind, ensuring that the{" "}
						<span className="font-semibold text-primary">backend</span> {`can grow
						with your application's needs.`}
					</p>
				</div>
			</BoxReveal>

			<BoxReveal boxColor={"hsl(var(--primary)"} duration={0.5}>
				<Link
					href="/contact"
					className="w-full flex justify-center items-center"
				>
					<ShimmerButton className="shadow-2xl mt-[1.5rem]">
						<span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
							Get in touch
						</span>
					</ShimmerButton>
				</Link>
			</BoxReveal>
		</div>
	);
}
