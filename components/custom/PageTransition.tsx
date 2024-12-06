"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        {/* Fullscreen animation */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="fixed top-0 left-0 w-full h-full bg-primary pointer-events-none z-10"
        />
        {/* Page Content */}
        <div className="relative z-20">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
