"use client";
import {
	IconAssembly,
	IconCpu,
	IconHome,
	IconMessage,
	IconMilitaryAward,
} from "@tabler/icons-react";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
export function Navbar() {
	const navItems = [
		{
			name: "Home",
			link: "/",
			icon: <IconHome className="h-4 w-4" />,
		},
		{
			name: "Services",
			link: "/services",
			icon: <IconAssembly className="h-4 w-4" />,
		},
		{
			name: "Projects",
			link: "/projects",
			icon: <IconMilitaryAward className="h-4 w-4" />,
		},
		{
			name: "About",
			link: "/about",
			icon: <IconCpu className="h-4 w-4" />,
		},
		{
			name: "Contact",
			link: "/contact",
			icon: (
				<IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
			),
		},
	];
	return (
		<div className="w-full flex justify-center">
			<FloatingNav navItems={navItems} />
		</div>
	);
}
