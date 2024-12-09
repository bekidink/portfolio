"use client"
import React from "react";
import { motion } from "framer-motion";
import { services } from "@/constants/navData";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
export default function page() {
  return (
    <section className="min-h-[80vh] w-full  flex flex-col items-center justify-center py-12 xl:py-0">
      <div className="container w-full max-w-7xl items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          // className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, i) => {
            return (
              <div
                className="flex-1 flex flex-col justify-center gap-6 group mx-4 xl:mx-0"
                key={i}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="xl:text-5xl text-3xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-primary group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-white xl:text-3xl text-xl " />
                  </Link>
                </div>
                <h2 className="xl:text-[42px] text-[24px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
