"use client";

import { cn } from "@/lib/utils";
import {
	IconBrandDocker,
	IconBrandFigma,
	IconBrandNodejs,
	IconBrandReact,
	IconSeo,
} from "@tabler/icons-react";
import Image from "next/image";
import type React from "react";
import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "./magicui/AnimatedBeam";

const Circle = forwardRef<
	HTMLDivElement,
	{ className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				"z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
				className,
			)}
		>
			{children}
		</div>
	);
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
	className,
}: {
	className?: string;
}) {
	const containerRef = useRef<HTMLDivElement>(null);
	const div1Ref = useRef<HTMLDivElement>(null);
	const div2Ref = useRef<HTMLDivElement>(null);
	const div3Ref = useRef<HTMLDivElement>(null);
	const div4Ref = useRef<HTMLDivElement>(null);
	const div5Ref = useRef<HTMLDivElement>(null);
	const div6Ref = useRef<HTMLDivElement>(null);
	const div7Ref = useRef<HTMLDivElement>(null);

	return (
		<div
			className={cn(
				"relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-background",
				className,
			)}
			ref={containerRef}
		>
			<div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
				<div className="flex flex-col justify-center">
					<Circle ref={div7Ref}>
						<Icons.user />
					</Circle>
				</div>
				<div className="flex flex-col justify-center">
					<Circle ref={div6Ref} className="size-16">
						<Image src={"/oonkoo_logo.svg"} height={50} width={50} alt="logo" />
					</Circle>
				</div>
				<div className="flex flex-col justify-center gap-2">
					<Circle ref={div1Ref}>
						<Icons.react />
					</Circle>
					<Circle ref={div2Ref}>
						<Icons.nodejs />
					</Circle>
					<Circle ref={div3Ref}>
						<Icons.docker />
					</Circle>
					<Circle ref={div4Ref}>
						<Icons.figma />
					</Circle>
					<Circle ref={div5Ref}>
						<Icons.ads />
					</Circle>
				</div>
			</div>

			{/* AnimatedBeams */}
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div1Ref}
				toRef={div6Ref}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div2Ref}
				toRef={div6Ref}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div3Ref}
				toRef={div6Ref}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div4Ref}
				toRef={div6Ref}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div5Ref}
				toRef={div6Ref}
				duration={3}
			/>
			<AnimatedBeam
				containerRef={containerRef}
				fromRef={div6Ref}
				toRef={div7Ref}
				duration={3}
			/>
		</div>
	);
}

const Icons = {
	ads: () => (
		<svg id="Apple" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<style>
					{".cls-1{fill:#febd00;}.cls-2{fill:#25a84a;}.cls-3{fill:#2e8add;}"}
				</style>
			</defs>
			<path
				className="cls-1"
				d="M202.33,53.44a80.7,80.7,0,0,0-18.8,22.06L22.29,353.58A81.62,81.62,0,0,0,51.87,464.8h0a81.62,81.62,0,0,0,111.22-29.58l138.59-239C271.1,152.32,226.49,88.29,202.33,53.44Z"
			/>
			<circle className="cls-2" cx="92.69" cy="394.4" r="81.38" />
			<rect
				className="cls-3"
				height="484.21"
				rx="81.38"
				ry="81.38"
				transform="translate(751.31 309.71) rotate(150)"
				width="162.76"
				x="252.78"
				y="13.4"
			/>
		</svg>
	),
	react: () => (
		<svg
			fill="none"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_950_641)">
				<path
					d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_950_641">
					<rect fill="white" height="24" width="24" />
				</clipPath>
			</defs>
		</svg>
	),
	docker: () => (
		<svg
			height="512px"
			version="1.1"
			viewBox="0 0 512 512"
			width="512px"
			xmlSpace="preserve"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<g id="_x39_7-docker">
				<g>
					<g>
						<rect
							height="43.193"
							style={{ fill: "#099CEC" }}
							width="47.506"
							x="229.999"
							y="147.225"
						/>
						<rect
							height="42.69"
							style={{ fill: "#099CEC" }}
							width="47.506"
							x="229.999"
							y="199.115"
						/>
						<rect
							height="43.193"
							style={{ fill: "#099CEC" }}
							width="47.506"
							x="173.869"
							y="147.225"
						/>
						<rect
							height="42.691"
							style={{ fill: "#099CEC" }}
							width="47.507"
							x="286.2"
							y="199.043"
						/>
						<rect
							height="43.625"
							style={{ fill: "#099CEC" }}
							width="47.506"
							x="229.999"
							y="94.975"
						/>
						<rect
							height="43.193"
							style={{ fill: "#099CEC" }}
							width="47.505"
							x="117.738"
							y="147.225"
						/>
						<rect
							height="42.691"
							style={{ fill: "#099CEC" }}
							width="47.506"
							x="173.869"
							y="199.043"
						/>
						<path
							d="M476.441,219.095c-10.35-6.972-34.21-9.487-52.537-6.036c-2.371-17.249-12.003-32.27-29.538-45.782l-10.062-6.685l-6.685,10.062c-13.225,19.98-16.817,52.896-2.658,74.602c-6.252,3.377-18.545,7.978-34.786,7.689H27.757c-6.252,36.511,4.169,83.945,31.624,116.501c26.663,31.551,66.623,47.579,118.872,47.579c113.124,0,196.851-52.104,236.021-146.76c15.381,0.288,48.584,0.073,65.618-32.483c1.078-1.797,4.743-9.488,6.107-12.291L476.441,219.095z"
							style={{ fill: "#099CEC" }}
						/>
						<polygon
							points="109.186,199.043 109.113,199.043 61.68,199.043 61.68,241.734 109.186,241.734"
							style={{ fill: "#099CEC" }}
						/>
						<rect
							height="42.691"
							style={{ fill: "#099CEC" }}
							width="47.505"
							x="117.738"
							y="199.043"
						/>
					</g>
				</g>
			</g>
			<g id="Layer_1" />
		</svg>
	),
	nodejs: () => (
		<svg
			height="512px"
			viewBox="0 0 512 512"
			width="512px"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<g id="_x32_33-node-js">
				<g>
					<path
						style={{ fill: "#539E43" }}
						d="M255.908,485.999c-6.116,0-12.323-1.642-17.708-4.746l-56.319-33.316c-8.397-4.747-4.29-6.389-1.551-7.303c11.226-3.925,13.508-4.745,25.465-11.592c1.279-0.729,2.922-0.457,4.199,0.366l43.266,25.648c1.552,0.912,3.741,0.912,5.202,0l168.592-97.304c1.553-0.913,2.555-2.738,2.555-4.563V158.583c0-1.917-1.002-3.651-2.645-4.654L258.463,56.716c-1.551-0.913-3.65-0.913-5.202,0L84.852,154.019c-1.644,0.913-2.647,2.738-2.647,4.655v194.515c0,1.825,1.003,3.65,2.647,4.473l46.188,26.653c25.102,12.504,40.436-2.191,40.436-17.068V175.195c0-2.738,2.19-4.837,4.93-4.837h21.359c2.647,0,4.928,2.099,4.928,4.837v192.143c0,33.407-18.256,52.576-49.928,52.576c-9.768,0-17.435,0-38.794-10.588l-44.179-25.467c-10.954-6.299-17.708-18.074-17.708-30.76V158.583c0-12.596,6.754-24.462,17.708-30.76L238.2,30.519c10.679-6.024,24.828-6.024,35.416,0l168.594,97.394c10.953,6.298,17.707,18.073,17.707,30.761v194.515c0,12.596-6.754,24.371-17.707,30.761l-168.594,97.303C268.23,484.357,262.113,485.999,255.908,485.999z M392.006,294.224c0-36.421-24.646-46.096-76.4-52.941c-52.396-6.938-57.689-10.498-57.689-22.729c0-10.131,4.473-23.641,43.266-23.641c34.596,0,47.375,7.485,52.668,30.853c0.457,2.19,2.467,3.833,4.746,3.833h21.91c1.367,0,2.645-0.547,3.559-1.552c0.914-1.003,1.369-2.373,1.275-3.743c-3.375-40.252-30.121-58.965-84.158-58.965c-48.103,0-76.764,20.264-76.764,54.311c0,36.876,28.569,47.101,74.664,51.662c55.225,5.387,59.514,13.511,59.514,24.373c0,18.805-15.15,26.835-50.658,26.835c-44.635,0-54.403-11.227-57.689-33.406c-0.365-2.373-2.374-4.107-4.837-4.107h-21.817c-2.738,0-4.836,2.191-4.836,4.836c0,28.39,15.426,62.254,89.271,62.254C361.336,352.005,392.006,330.916,392.006,294.224L392.006,294.224z"
					/>
				</g>
			</g>
		</svg>
	),
	figma: () => (
		<svg
			width={100}
			height={100}
			viewBox="0 0 3000 3000"
			xmlns="http://www.w3.org/2000/svg"
		>
			<style type="text/css">
				{`.st0{fill:#0ACF83;}
      .st1{fill:#A259FF;}
      .st2{fill:#F24E1E;}
      .st3{fill:#FF7262;}
      .st4{fill:#1ABCFE;}`}
			</style>
			<path
				className="st0"
				d="M1083.333374,2750c230,0,416.666626-186.666748,416.666626-416.666748v-416.666626h-416.666626  c-230.000061,0-416.666687,186.666626-416.666687,416.666626S853.333313,2750,1083.333374,2750z"
			/>
			<path
				className="st1"
				d="M666.666687,1500c0-230,186.666626-416.666748,416.666687-416.666748H1500v833.333374  h-416.666626C853.333313,1916.666626,666.666687,1730,666.666687,1500z"
			/>
			<path
				className="st2"
				d="M666.666687,666.666626C666.666687,436.666656,853.333313,250,1083.333374,250H1500  v833.333252h-416.666626C853.333313,1083.333252,666.666687,896.666626,666.666687,666.666626z"
			/>
			<path
				className="st3"
				d="M1500,250h416.666626c230.000122,0,416.666626,186.666656,416.666626,416.666626  s-186.666504,416.666626-416.666626,416.666626H1500V250z"
			/>
			<path
				className="st4"
				d="M2333.333252,1500c0,230-186.666504,416.666626-416.666626,416.666626S1500,1730,1500,1500  s186.666626-416.666748,416.666626-416.666748S2333.333252,1270,2333.333252,1500z"
			/>
		</svg>
	),
	user: () => (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="#000000"
			strokeWidth="2"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</svg>
	),
};
