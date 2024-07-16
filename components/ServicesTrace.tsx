"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";
import { IconBrandTabler, IconGeometry, IconAppWindow, IconCodeCircle2, IconShoppingBag, IconBoxMargin, IconSeo, IconBrandNextjs } from "@tabler/icons-react";

export function ServicesTrace() {
  return (
    <TracingBeam className="px-10 md:px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {servicesContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-white/10 text-white rounded-full text-2xl w-fit px-2 py-2 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4 text-primary font-bold")}>
              {item.title}
            </p>

            <div className="text-sm text-white/50 prose prose-sm">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const servicesContent = [
    {
      title: "Software Development",
      description: (
        <>
          <p className="text-lg text-white">
            Building robust and scalable software solutions.
          </p>
          <p className="text-base my-2">
            Our software development team creates custom solutions tailored to your business requirements, ensuring functionality and scalability.
          </p>
          <span className="mt-2">
            <span className="text-primary font-bold">
              What We Offer:
            </span>
            <ul className="list-disc pl-4 mt-2">
              <li>Custom software solutions</li>
              <li>Scalable architecture</li>
              <li>Ongoing support and maintenance</li>
            </ul>
          </span>
        </>
      ),
      badge: <IconBrandTabler/>,
      image: "",
    },
    {
      title: "App Development",
      description: (
        <>
          <p className="text-lg text-white">
            Innovative and user-friendly mobile applications.
          </p>
          <p className="text-base my-2">
            We specialize in developing mobile applications that are both intuitive and powerful, providing a seamless user experience.
          </p>
          <span className="mt-2">
            <span className="text-primary font-bold">
              Key Features:
            </span>
            <ul className="list-disc pl-4 mt-2">
              <li>Native and cross-platform apps</li>
              <li>User-centric design</li>
              <li>Performance optimization</li>
            </ul>
          </span>
        </>
      ),
      badge: <IconCodeCircle2/>,
      image: "",
    },
    {
      title: "UI/UX Design",
      description: (
        <>
          <p className="text-lg text-white">
            Crafting engaging and intuitive designs.
          </p>
          <p className="text-base my-2">
            Our UI/UX design team focuses on creating interfaces that are not only beautiful but also highly functional and user-friendly.
          </p>
          <span className="mt-2">
            <span className="text-primary font-bold">
              Our Approach:
            </span>
            <ul className="list-disc pl-4 mt-2">
              <li>User research and testing</li>
              <li>Wireframing and prototyping</li>
              <li>Interactive design</li>
            </ul>
          </span>
        </>
      ),
      badge: <IconGeometry/>,
      image: "",
    },
    {
      title: "Web Development",
      description: (
        <>
          <p className="text-lg text-white">
            Developing dynamic and responsive websites.
          </p>
          <p className="text-base my-2">
            We create websites that are visually appealing and functionally robust, ensuring a strong online presence for your business.
          </p>
          <span className="mt-2">
            <span className="text-primary font-bold">
              Services Include:
            </span>
            <ul className="list-disc pl-4 mt-2">
              <li>Responsive web design</li>
              <li>E-commerce solutions</li>
              <li>Content management systems</li>
            </ul>
          </span>
        </>
      ),
      badge: <IconBrandNextjs/>,
      image: "",
    },
    {
      title: "E-commerce Solutions",
      description: (
        <>
          <p className="text-lg text-white">
            Boost your sales with seamless online platforms.
          </p>
          <p className="text-base my-2">
            Our e-commerce solutions are designed to provide a secure and efficient shopping experience for your customers.
          </p>
          <span className="mt-2">
            <span className="text-primary font-bold">
              Our Offerings:
            </span>
            <ul className="list-disc pl-4 mt-2">
              <li>Custom e-commerce platforms</li>
              <li>Payment gateway integration</li>
              <li>Inventory management</li>
            </ul>
          </span>
        </>
      ),
      badge: <IconShoppingBag/>,
      image: "",
    },
    {
      title: "Brand & Content Creation",
      description: (
        <>
          <p className="text-lg text-white">
            Developing compelling brand stories and content.
          </p>
          <p className="text-base my-2">
            We help you create a strong brand identity and engaging content that resonates with your audience.
          </p>
          <span className="mt-2">
            <span className="text-primary font-bold">
              Services Provided:
            </span>
            <ul className="list-disc pl-4 mt-2">
              <li>Brand strategy and identity</li>
              <li>Content creation and management</li>
              <li>Social media marketing</li>
            </ul>
          </span>
        </>
      ),
      badge: <IconBoxMargin/>,
      image: "",
    },
    {
      title: "SEO Optimization",
      description: (
        <>
          <p className="text-lg text-white">
            Enhancing your online visibility and search rankings.
          </p>
          <p className="text-base my-2">
            Our SEO experts ensure that your website ranks high in search results, driving more traffic to your site.
          </p>
          <span className="mt-2">
            <span className="text-primary font-bold">
              Our SEO Services:
            </span>
            <ul className="list-disc pl-4 mt-2">
              <li>Keyword research and strategy</li>
              <li>On-page and off-page optimization</li>
              <li>Analytics and reporting</li>
            </ul>
          </span>
        </>
      ),
      badge: <IconSeo/>,
      image: "",
    },
  ];
  


