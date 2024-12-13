"use client";

import { memo, useMemo } from 'react';
import { cn } from "@/lib/utils";
import { IconRosetteDiscountCheckFilled, IconCircleCheckFilled } from "@tabler/icons-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedList } from "@/components/magicui/animated-list";

// Define interfaces for type safety
interface NotificationProps {
  name: string;
  description: string;
  time: string;
  icon: string;
  color: string;
}

// Base notifications moved outside component
const BASE_NOTIFICATIONS: NotificationProps[] = [
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

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What services does OonkoO provide?",
    answer: "OonkoO offers a comprehensive range of IT services including software development, web and mobile app development, brand Development, UI/UX R&D, IT solutions, and IT consulting. We specialize in creating custom solutions tailored to your business needs."
  },
  {
    question: "How does OonkoO ensure the quality of its projects?",
    answer: "We follow a rigorous quality assurance process that includes thorough testing, regular code reviews, and adherence to industry best practices. Our team is committed to delivering high-quality solutions that meet and exceed client expectations."
  },
  {
    question: "Can OonkoO handle large-scale projects?",
    answer: "Absolutely. OonkoO has extensive experience in managing and delivering large-scale, complex projects across various industries. Our project management methodologies and skilled team ensure timely and successful project completion."
  },
  {
    question: "What is the typical project timeline?",
    answer: "Project timelines vary depending on the scope and complexity of the project. After an initial consultation and assessment, we provide a detailed project plan with estimated timelines. We strive to deliver projects on time without compromising on quality."
  },
  {
    question: "How can I get started with OonkoO?",
    answer: "Getting started with OonkoO is simple. Contact us through our website or give us a call to schedule a consultation. We'll discuss your project requirements, provide an initial assessment, and outline the next steps to bring your vision to life."
  },
  {
    question: "How does OonkoO ensure data security?",
    answer: "Data security is a top priority at OonkoO. We implement robust security measures including encryption, secure coding practices, and regular security audits to protect your data. Our team stays updated on the latest security trends and best practices to ensure your solution is secure."
  }
];

// Memoized Notification component with proper typing
const Notification = memo<NotificationProps>(({ name, description, icon, color, time }) => (
  <figure
    className={cn(
      "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
      "transition-all duration-200 ease-in-out hover:scale-[103%]",
      "bg-green-100/20 text-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu"
    )}
  >
    <div className="flex flex-row items-center gap-3">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-2xl"
        style={{ backgroundColor: color }}
      >
        <span className="text-lg">{icon}</span>
      </div>
      <div className="flex flex-col overflow-hidden">
        <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium">
          <span className="text-sm sm:text-lg">{name}</span>
          <span className="mx-1 hidden sm:block">·</span>
          <span className="text-xs text-white bg-green-700 px-3 py-2 rounded-full sm:flex items-center gap-1 hidden">
            <IconCircleCheckFilled className="h-4 w-4 text-white" />
            {time}
          </span>
        </figcaption>
        <p className="text-sm font-normal text-white flex items-center gap-1">
          <IconRosetteDiscountCheckFilled className="h-4 w-4 text-primary" /> {description}
        </p>
      </div>
    </div>
  </figure>
));

Notification.displayName = 'Notification';

// Memoized FAQ Section
const FAQSection = memo(() => (
  <Accordion type="single" collapsible className="w-full md:w-fit xl:min-w-[42rem] xl:max-w-[42rem] text-white/50 p-6">
    {FAQ_ITEMS.map((item, index) => (
      <AccordionItem key={index} value={`item-${index + 1}`}>
        <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
        <AccordionContent className="text-white">{item.answer}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
));

FAQSection.displayName = 'FAQSection';

export function ProjectCTA() {
  // Generate notifications only once using useMemo with proper typing
  const notifications = useMemo(() => {
    return Array.from({ length: 10 }, (_, index) => ({
      ...BASE_NOTIFICATIONS[index % BASE_NOTIFICATIONS.length],
      id: `notification-${index}` // Using id instead of key to avoid conflicts
    }));
  }, []);

  return (
    <section className="w-full bg-[#1F1C1C] relative flex flex-col lg:flex-row items-center justify-center gap-10">
      <FAQSection />
      <div className="relative flex max-h-[400px] min-h-[400px] w-fit flex-col overflow-hidden rounded-lg bg-[#1F1C1C] p-2 md:p-6">
        <AnimatedList delay={2000}>
          {notifications.map((item) => (
            <Notification 
              key={item.id}
              name={item.name}
              description={item.description}
              time={item.time}
              icon={item.icon}
              color={item.color}
            />
          ))}
        </AnimatedList>
      </div>
    </section>
  );
}