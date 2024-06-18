"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { IconBrandTabler, IconGeometry, IconAppWindow, IconShoppingBag, IconBoxMargin, IconSeo } from "@tabler/icons-react";

export function ServiceCard() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-[#1F1C1C] w-full gap-4 mx-auto px-8">
        <Card title="Software/App Development" details="Building innovative and scalable software applications tailored to your business needs." icon={<IconBrandTabler className="text-primary size-20" />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="UI/UX Design" details="Crafting user-centric designs that enhance functionality and engagement." icon={<IconGeometry className="text-primary size-20" />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Web Development" details="Developing robust and responsive websites that drive your online presence." icon={<IconAppWindow className="text-primary size-20" />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="E-commerce" details="Creating seamless and secure e-commerce platforms to boost your sales." icon={<IconShoppingBag className="text-primary size-20" />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Brand & Content Creation" details="Developing compelling brand stories and content that resonate with your audience." icon={<IconBoxMargin className="text-primary size-20" />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="SEO Optimization" details="Enhancing your website's visibility and search engine ranking to attract more visitors." icon={<IconSeo className="text-primary size-20" />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  details,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  details: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-primary/[0.2] group/canvas-card flex items-center justify-center  max-w-sm w-full mx-auto p-4 h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-primary" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-primary" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-primary" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-primary" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-center dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="dark:text-white text-lg text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-normal group-hover/canvas-card:text-white/50 group-hover/canvas-card:-translate-y-2 transition duration-200">
          {details}
        </p>
      </div>
    </div>
  );
};


export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
