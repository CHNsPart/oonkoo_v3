"use client";
import { cn } from "@/lib/utils";
import React, { useState } from 'react';

interface GifCardProps {
  title: string;
  description: React.ReactNode;
  badge?: string;
  imageUrl: string;
  gifUrl: string;
  className?: string;
}

export function GifCard({
    title,
    description,
    badge,
    imageUrl,
    gifUrl,
    className,
  }: GifCardProps) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div className={cn("max-w-xs w-full", className)}>
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            "transition-all duration-500"
          )}
          style={{
            backgroundImage: `url('${isHovered ? gifUrl : imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="text relative z-50">
            <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
              {title}
            </h1>
            <div className="font-normal text-base text-gray-50 relative my-4">
              {description}
            </div>
          </div>
        </div>
      </div>
    );
  }

const servicesRoot: GifCardProps[] = [
    {
      title: "Leveraging the Latest Technologies",
      description: (
        <>
          <div className="mt-2">
            <span className="text-white font-bold">
              Key Features:
            </span>
            <ul className="list-disc pl-4 mt-2">
              <li>Advanced technology adoption</li>
              <li>Focus on sustainability</li>
              <li>Future-proof solutions</li>
            </ul>
          </div>
        </>
      ),
      imageUrl: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWhvc2Z0aW43em91bjhkYmxvb3pmNTYyYjlvdXgycnh4Zjh3MjFxeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/0saxF4eNE7x2fEqrN6/giphy.gif",
    },
    {
      title: "From Concept to Completion",
      description: (
        <>
          <div className="mt-2">
            <span className="text-white font-bold">
              Our Promise:
            </span>
            <ul className="list-disc pl-4 mt-2">
              <li>Transparent communication</li>
              <li>Collaborative process</li>
              <li>Excellence in execution</li>
            </ul>
          </div>
        </>
      ),
      imageUrl: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gifUrl: "https://media.giphy.com/media/RT2iwbhZpR9BWzWTsX/giphy.gif?cid=790b761108kbvl8wa2m9ahd8irc46refbsiem1l36e4z4ri4&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    },
    {
      title: "Transforming Visions into Reality",
      description: (
        <>
          <div className="mt-2">
            <span className="text-white font-bold">
              What We Offer:
            </span>
            <ul className="list-disc pl-4 mt-2">
              <li>Custom software development</li>
              <li>User-centered design</li>
              <li>Comprehensive project management</li>
            </ul>
          </div>
        </>
      ),
      imageUrl: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWVxeWc2bDdhN2hsb3JnY2pwd2h1c2tidTZoNzltNDd3ZW5zNGw3eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1Jj0YpfqvJ3qX36CVq/giphy.gif",
    },
    {
      title: "Excellence in Every Project",
      description: (
        <>
          <div className="mt-2">
            <span className="text-white font-bold">
              Our Excellence Includes:
            </span>
            <ul className="list-disc pl-4 mt-2">
              <li>High-quality standards</li>
              <li>Continuous improvement</li>
              <li>Client satisfaction guaranteed</li>
            </ul>
          </div>
        </>
      ),
      imageUrl: "https://images.unsplash.com/photo-1508858648555-ba5da0be9511?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzd0a2U4MHB4YWZvZmh2eXRxa291ZnoyNWZubXoyc2hzeWdjNzl0ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vgGTiKVDMYMw0/giphy.gif",
    },
  ];

// Example usage
export default function ServicesSection() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {servicesRoot.map((service, index) => (
        <GifCard key={index} {...service} />
      ))}
    </div>
  );
}