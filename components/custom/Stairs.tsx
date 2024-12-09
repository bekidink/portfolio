import { stairAnimation } from "@/constants/navData";
import { motion } from "framer-motion";
import React from "react";
const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};
export default function Stairs() {
  return (
    <>
      {[...Array(6)].map((_, i) => {
        return (
          <motion.div
            key={i}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(i) * 0.1,
            }}
            // className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
}
