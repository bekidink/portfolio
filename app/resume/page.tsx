"use client";
import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { FaFlutter, FaAws, FaGitlab } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandSocketIo } from "react-icons/tb";
import {
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiReduxsaga,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiDocker,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { aboutData, education, experience } from "@/constants/navData";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";
const skills = {
  title: "My skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <RiNextjsFill />,
      name: "next.js",
    },
    {
      icon: <FaReact />,
      name: "react native",
    },
    {
      icon: <FaFlutter />,
      name: "flutter",
    },
    {
      icon: <FaNodeJs />,
      name: "nodejs",
    },
    {
      icon: <SiExpress />,
      name: "express",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaAws />,
      name: "aws services",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <SiFirebase />,
      name: "firebase",
    },
    {
      icon: <SiSupabase />,
      name: "supabase",
    },
    {
      icon: <SiPrisma />,
      name: "prisma",
    },
    {
      icon: <SiRedux />,
      name: "redux",
    },
    {
      icon: <SiReduxsaga />,
      name: "redux saga",
    },
    {
      icon: <FaGitlab />,
      name: "gitlab",
    },
    {
      icon: <FaGithub />,
      name: "github",
    },
    {
      icon: <SiDocker />,
      name: "docker",
    },
    {
      icon: <TbBrandSocketIo />,
      name: "socket.io",
    },
  ],
};
export default function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      // className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto max-w-7xl items-center">
        <Tabs
          className="flex flex-col xl:flex-row gap-[60px]"
          defaultValue={"experience"}
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[400px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, i) => {
                      return (
                        <li
                          key={i}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.position}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.duration}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[400px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, i) => {
                      return (
                        <li
                          key={i}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.degree}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.duration}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 xl:gap-[30px]">
                  {skills.skillList.map((item, i) => {
                    return (
                      <li key={i}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[50px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{aboutData.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {aboutData.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-6 max-w-[820px] mx-auto xl:mx-0">
                  {aboutData.info.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
