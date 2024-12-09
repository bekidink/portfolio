"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import "swiper/css";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import WorkSliderBtn from "@/components/custom/WorkSliderBtn";
const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Doctor Appointment",
    description: "",
    stack: [
      { name: "Nextjs" },
      { name: "Next-Auth" },
      { name: "Prisma" },
      { name: "Mongodb" },
      { name: "tailwindcss" },
    ],
    image: "/drapp/dr-home.PNG",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "Doctor Appointment",
    description: "",
    stack: [
      { name: "Nextjs" },
      { name: "Next-Auth" },
      { name: "Prisma" },
      { name: "Mongodb" },
      { name: "tailwindcss" },
    ],
    image: "/drapp/dr-home.PNG",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "Doctor Appointment",
    description: "",
    stack: [
      { name: "Nextjs" },
      { name: "Next-Auth" },
      { name: "Prisma" },
      { name: "Mongodb" },
      { name: "tailwindcss" },
    ],
    image: "/drapp/dr-home.PNG",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "Doctor Appointment",
    description: "",
    stack: [
      { name: "Nextjs" },
      { name: "Next-Auth" },
      { name: "Prisma" },
      { name: "Mongodb" },
      { name: "tailwindcss" },
    ],
    image: "/drapp/dr-home.PNG",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "frontend",
    title: "Doctor Appointment",
    description: "",
    stack: [
      { name: "Nextjs" },
      { name: "Next-Auth" },
      { name: "Prisma" },
      { name: "Mongodb" },
      { name: "tailwindcss" },
    ],
    image: "/drapp/dr-home.PNG",
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "frontend",
    title: "Doctor Appointment",
    description: "",
    stack: [
      { name: "Nextjs" },
      { name: "Next-Auth" },
      { name: "Prisma" },
      { name: "Mongodb" },
      { name: "tailwindcss" },
    ],
    image: "/drapp/dr-home.PNG",
    live: "",
    github: "",
  },
];
export default function Page() {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: { activeIndex: any }) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto xl:max-w-7xl items-center">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, i) => {
                  return (
                    <li key={i} className="text-xl text-accent">
                      {item.name}
                      {i !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[510px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, i) => {
                return (
                  <SwiperSlide key={i} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-0 xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
