"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: string[];
}

const AvatarCircles = ({ numPeople, className, avatarUrls }: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <Image
          key={index}
          className="h-10 w-10 object-cover rounded-full border-2 border-[#1F1C1C] dark:border-gray-800"
          src={url}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      <a
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1F1C1C] bg-white text-center text-xs font-medium text-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:bg-primary dark:border-primary dark:bg-white dark:text-black"
        href=""
      >
        +{numPeople}
      </a>
    </div>
  );
};

export default AvatarCircles;
