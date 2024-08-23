"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import * as React from "react";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	isTextarea?: boolean;
}

const Input = React.forwardRef<
	HTMLInputElement | HTMLTextAreaElement,
	InputProps
>(({ className, type, isTextarea, ...props }, ref) => {
	const radius = 100; // change this to increase the radius of the hover effect
	const [visible, setVisible] = React.useState(false);

	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: any) {
		const { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	const sharedClasses = cn(
		`flex w-full border-none bg-black dark:bg-zinc-800 text-white dark:text-white shadow-input rounded-md px-3 py-2 text-sm 
        file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 
        focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-800 dark:focus-visible:ring-neutral-600
        disabled:cursor-not-allowed disabled:opacity-50
        dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
        group-hover/input:shadow-none transition duration-400 shadow-none
        `,
		className,
	);

	if (isTextarea) {
		return (
			<motion.div
				style={{
					background: useMotionTemplate`
              radial-gradient(
                ${visible ? `${radius}px` : "0px"} circle at ${mouseX}px ${mouseY}px,
                var(--blue-500),
                transparent 80%
              )
            `,
				}}
				onMouseMove={handleMouseMove}
				onMouseEnter={() => setVisible(true)}
				onMouseLeave={() => setVisible(false)}
				className="p-[2px] rounded-lg transition duration-300 group/input"
			>
				<textarea
					className={cn(sharedClasses, "resize-none h-32")}
					ref={ref as React.Ref<HTMLTextAreaElement>}
					{...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
				/>
			</motion.div>
		);
	}

	return (
		<motion.div
			style={{
				background: useMotionTemplate`
            radial-gradient(
              ${visible ? `${radius}px` : "0px"} circle at ${mouseX}px ${mouseY}px,
              var(--blue-500),
              transparent 80%
            )
          `,
			}}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}
			className="p-[2px] rounded-lg transition duration-300 group/input"
		>
			<input
				type={type}
				className={cn(sharedClasses, "h-10")}
				ref={ref as React.Ref<HTMLInputElement>}
				{...(props as React.InputHTMLAttributes<HTMLInputElement>)}
			/>
		</motion.div>
	);
});
Input.displayName = "Input";

export { Input };
