"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import { IconRosetteDiscountCheckFilled, IconCircleCheckFilled } from "@tabler/icons-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Gym App Project",
    description: "OonkoO",
    time: "Completed",
    icon: "🥊",
    color: "#00C9A7",
  },
  {
    name: "Multi Tenant Platform",
    description: "OonkoO",
    time: "Completed",
    icon: "🗳",
    color: "#FFB800",
  },
  {
    name: "Ads Streaming Server",
    description: "OonkoO",
    time: "Completed",
    icon: "🚀",
    color: "#FF3D71",
  },
  {
    name: "Web3 E-Commerce",
    description: "OonkoO",
    time: "Completed",
    icon: "🛍",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-green-100/20 text-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1 hidden sm:block">·</span>
            <span className="text-xs text-white bg-green-700 px-3 py-2 rounded-full sm:flex items-center gap-1 hidden"><IconCircleCheckFilled className="h-4 w-4 text-white" />{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-white flex items-center gap-1">
            <IconRosetteDiscountCheckFilled className="h-4 w-4 text-primary" /> {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function ProjectCTA() {
  return (
    <section className="w-full bg-[#1F1C1C] relative flex flex-col lg:flex-row items-center justify-center gap-10">
            <Accordion type="single" collapsible className="w-full md:w-fit xl:min-w-[42rem] xl:max-w-[42rem] text-white/50 p-6">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">What services does OonkoO provide?</AccordionTrigger>
                    <AccordionContent className="text-white">
                        OonkoO offers a comprehensive range of IT services including software development, web and mobile app development, brand Development, UI/UX R&D, IT solutions, and IT consulting. We specialize in creating custom solutions tailored to your business needs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">How does OonkoO ensure the quality of its projects?</AccordionTrigger>
                    <AccordionContent className="text-white">
                        We follow a rigorous quality assurance process that includes thorough testing, regular code reviews, and adherence to industry best practices. Our team is committed to delivering high-quality solutions that meet and exceed client expectations.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">Can OonkoO handle large-scale projects?</AccordionTrigger>
                    <AccordionContent className="text-white">
                        Absolutely. OonkoO has extensive experience in managing and delivering large-scale, complex projects across various industries. Our project management methodologies and skilled team ensure timely and successful project completion.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">What is the typical project timeline?</AccordionTrigger>
                    <AccordionContent className="text-white">
                        Project timelines vary depending on the scope and complexity of the project. After an initial consultation and assessment, we provide a detailed project plan with estimated timelines. We strive to deliver projects on time without compromising on quality.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left">How can I get started with OonkoO?</AccordionTrigger>
                    <AccordionContent className="text-white">
                        Getting started with OonkoO is simple. Contact us through our website or give us a call to schedule a consultation. We’ll discuss your project requirements, provide an initial assessment, and outline the next steps to bring your vision to life.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left">How does OonkoO ensure data security?</AccordionTrigger>
                    <AccordionContent className="text-white">
                        Data security is a top priority at OonkoO. We implement robust security measures including encryption, secure coding practices, and regular security audits to protect your data. Our team stays updated on the latest security trends and best practices to ensure your solution is secure.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        <div className="relative flex max-h-[400px] min-h-[400px] w-fit flex-col overflow-hidden rounded-lg bg-[#1F1C1C] p-2 md:p-6">
            <AnimatedList>
                {notifications.map((item, idx) => (
                <Notification {...item} key={idx} />
                ))}
            </AnimatedList>
        </div>
    </section>
  );
}
