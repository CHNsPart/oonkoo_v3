"use client";
import React, { memo } from "react";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconTopologyFullHierarchy,
  IconTableColumn,
  IconRocket,
  IconBuildingSkyscraper,
  IconDeviceLaptop
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { cn } from "@/lib/utils";

// Base Skeleton component
const Skeleton = memo(() => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
));
Skeleton.displayName = 'Skeleton';

// First skeleton variant
const SkeletonOne = memo(() => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-primary dark:border-primary/[0.2] p-2 items-center space-x-2 bg-primary dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#1F1C1C] to-[#6AF350] flex-shrink-0" />
        <div className="w-full bg-[#6AF350]/50 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-primary dark:border-primary/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-primary dark:bg-black"
      >
        <div className="w-full bg-[#6AF350]/50 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#1F1C1C] to-[#6AF350] flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-primary dark:border-primary/[0.2] p-2 items-center space-x-2 bg-primary dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#1F1C1C] to-[#6AF350] flex-shrink-0" />
        <div className="w-full bg-[#6AF350]/50 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
});
SkeletonOne.displayName = 'SkeletonOne';

// Second skeleton variant
const SkeletonTwo = memo(() => {
  const variants = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: { duration: 0.2 },
    },
    hover: {
      width: ["0%", "100%"],
      transition: { duration: 2 },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`skeleton-two-${i}`}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-primary dark:border-primary/[0.2] p-2 items-center space-x-2 bg-primary dark:bg-black w-full h-4"
        />
      ))}
    </motion.div>
  );
});
SkeletonTwo.displayName = 'SkeletonTwo';

// Third skeleton variant
const SkeletonThree = memo(() => {
  const containerVariants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };

  const shapeVariants = {
    initial: { 
      scale: 1,
      opacity: 0.5
    },
    hover: { 
      scale: 1.1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={containerVariants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] relative overflow-hidden cursor-pointer"
      style={{
        background: "linear-gradient(-45deg, #1F1C1C, #3CB371, #6AF350, #1F1C1C)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Center circle */}
      <motion.div
        variants={{
          initial: { scale: 1 },
          hover: { 
            scale: 1.2,
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse" as const,
              ease: "easeInOut"
            }
          }
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-white/20 backdrop-blur-sm"
      />
      
      {/* Simple shapes */}
      <motion.div
        variants={shapeVariants}
        className="absolute top-1/3 left-1/3 w-12 h-12 border-2 border-white/20 rounded-lg backdrop-blur-sm"
      />
      <motion.div
        variants={shapeVariants}
        className="absolute bottom-1/3 right-1/3 w-16 h-16 border-2 border-white/20 rounded-full backdrop-blur-sm"
      />
    </motion.div>
  );
});

SkeletonThree.displayName = 'SkeletonThree';

// Fourth skeleton variant
const SkeletonFour = memo(() => {
  const first = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 },
  };
  const second = {
    initial: { x: -20, rotate: 5 },
    hover: { x: 0, rotate: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-none p-4 dark:bg-black dark:border-white/[0.1] border border-primary flex flex-col items-center justify-center"
      >
        <IconRocket className="h-10 w-10 text-primary" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Innovative Solutions
        </p>
        <p className="border border-primary bg-primary/20 text-primary text-xs rounded-full px-2 py-0.5 mt-4">
          Technology
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-gradient-to-br from-primary to-[#6AF350] p-4 dark:bg-black dark:border-white/[0.1] border border-primary flex flex-col items-center justify-center">
        <IconBuildingSkyscraper className="h-10 w-10 text-white" />
        <p className="sm:text-sm text-xs text-center font-semibold text-white mt-4">
          Enterprise Scale
        </p>
        <p className="border border-white/20 bg-white/20 text-white text-xs rounded-full px-2 py-0.5 mt-4">
          Growth
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-none p-4 dark:bg-black dark:border-white/[0.1] border border-primary flex flex-col items-center justify-center"
      >
        <IconDeviceLaptop className="h-10 w-10 text-primary" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Digital Excellence
        </p>
        <p className="border border-primary bg-primary/20 text-primary text-xs rounded-full px-2 py-0.5 mt-4">
          Innovation
        </p>
      </motion.div>
    </motion.div>
  );
});
SkeletonFour.displayName = 'SkeletonFour';

// Fifth skeleton variant
const SkeletonFive = memo(() => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-primary dark:border-white/[0.2] p-2 items-start space-x-2 bg-none dark:bg-black"
      >
        <IconRocket className="h-10 w-10 text-primary" />
        <p className="text-xs text-neutral-500">
          Ready to launch your next big project?
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-primary dark:bg-black"
      >
        <p className="text-xs text-white">{"Let's make it happen."}</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#1F1C1C] to-[#6AF350] flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
});
SkeletonFive.displayName = 'SkeletonFive';

// Content items array
const items = [
  {
    title: "Global Talent, Local Impact",
    description: (
      <span className="text-sm">
        Our diverse team delivers top-tier IT solutions tailored to your business needs.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "From Concept to Completion",
    description: (
      <span className="text-sm">
        Our collaborative approach ensures every project exceeds your expectations.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Leveraging the Latest Technologies",
    description: (
      <span className="text-sm">
        Leveraging the Latest Technologies for a sustainable system.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconTopologyFullHierarchy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Transforming Visions into Reality",
    description: (
      <span className="text-sm">
        We help businesses achieve success with innovative software and design solutions.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Excellence in Every Project",
    description: (
      <span className="text-sm">
        Partner with Oonkoo for world-class IT solutions that drive success.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

// Main ServiceBento component
export const ServiceBento = memo(() => {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={`bento-item-${i}`}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
});
ServiceBento.displayName = 'ServiceBento';