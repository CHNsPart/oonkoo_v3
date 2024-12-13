"use client";

import { memo } from 'react';
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import SparklesText from "./magicui/sparkles-text";

// Move reviews outside component and add more relevant content
const reviews = [
  {
    name: "Sarah Chen",
    date: "March 2024",
    body: "OonkoO transformed our SaaS platform with their exceptional UI/UX expertise. The new design increased user engagement by 40% within two months.",
  },
  {
    name: "Michael Rodriguez",
    date: "January 2024",
    body: "Their web development team built our e-commerce platform from scratch. The attention to detail and performance optimization exceeded our expectations.",
  },
  {
    name: "David Park",
    date: "November 2023",
    body: "Working with OonkoO on our fintech app was a game-changer. They delivered a complex project with innovative solutions ahead of schedule.",
  },
  {
    name: "Emma Thompson",
    date: "September 2023",
    body: "The custom CMS they developed streamlined our content management process. Their technical expertise and project management were outstanding.",
  },
  {
    name: "Alex Patel",
    date: "July 2023",
    body: "OonkoO's UI design for our healthcare platform perfectly balanced aesthetics with functionality. They truly understand enterprise-scale requirements.",
  },
  {
    name: "Maria Garcia",
    date: "May 2023",
    body: "Their team developed our real estate platform with cutting-edge features. The robust architecture they implemented handles thousands of daily users effortlessly.",
  },
  {
    name: "James Wilson",
    date: "March 2023",
    body: "The AI-powered dashboard they created revolutionized our data analytics. Their innovative approach to complex problems is remarkable.",
  },
  {
    name: "Lisa Zhang",
    date: "December 2022",
    body: "OonkoO's redesign of our B2B platform resulted in a 60% increase in user satisfaction. Their attention to UX details is exceptional.",
  },
  {
    name: "Robert Anderson",
    date: "October 2022",
    body: "The mobile app they developed for our startup gained 100K users in the first month. Their technical execution is world-class.",
  },
  {
    name: "Sophie Laurent",
    date: "August 2022",
    body: "Their team's expertise in React and Next.js delivered a blazing-fast web application. The performance improvements were immediately noticeable.",
  }
];

// Memoized ReviewCard component
const ReviewCard = memo(({
  name,
  date,
  body,
}: {
  name: string;
  date: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer rounded-xl overflow-hidden border border-primary p-4 bg-[#1F1C1C]",
      )}
    >
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-primary">{date}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/80">{body}</blockquote>
    </figure>
  );
});

ReviewCard.displayName = 'ReviewCard';

// Calculate rows once
const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

// Memoized main component
const ReviewSection = memo(() => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#1F1C1C] pt-20 md:pt-40 pb-20">
      <div className="w-full flex justify-center items-center py-5">
        <SparklesText text="Our Clients" /> 
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={`${review.name}-${review.date}`} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={`${review.name}-${review.date}`} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#1F1C1C] to-transparent dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#1F1C1C] to-transparent dark:from-background"></div>
    </div>
  );
});

ReviewSection.displayName = 'ReviewSection';

export default ReviewSection;