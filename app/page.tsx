import Photo from "@/components/custom/Photo";
import Social from "@/components/custom/Social";
import Stats from "@/components/custom/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
export default function Home() {
  return (
    <section className="h-full w-full xl:max-w-7xl">
      <div className="container xl:mx-10 h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I &apos;m <br />{" "}
              <span className="text-accent">Bereket Dinku</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              🌟 Creative Mobile App & Web Developer delivering top-tier
              applications with modern design and seamless functionality.
              Proficient in React,Nextjs, Node.js, and Flutter, I thrive in
              bringing ideas to life through clean code, intuitive interfaces,
              and robust performance.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                size={"lg"}
                className="uppercase flex items-center gap-2 rounded-full"
              >
                <Link
                  href="https://drive.google.com/file/d/1DIZg2ngIA2A_6QHtjurGo6C1vWwDUXH4/view?usp=drive_link" // Replace with the actual path to the CV file
                  download="YourName_CV.pdf"
                >
                  <span>Download CV</span>
                </Link>

                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover-transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
