// Hero component
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button"; // assuming you're using named export

const Hero = () => {
  return (
    <div className="px-4 md:px-12 flex flex-col justify-center items-center h-[85vh] relative mx-auto text-center">
      <h1 className="text-3xl md:text-[70px] lg:text-[78px] font-bold max-w-4xl">
        Firebase AI Starter Template ⚡
      </h1>
      <p className="text-sm mt-2 md:text-base text-center text-slate-800 mb-8 max-w-4xl">
        Follow the getting started instructions in the docs to setup authentication and chat with AI.
      </p>
      <Link href="/docs">
        <Button>Get Started</Button>
      </Link>
      <div className="absolute bottom-0 left-5 text-sm md:text-base">
        <p>
            By{" "}
            <Link href="https://github.com/rmasonh25" target="_blank" className="!text-blue-500 hover:underline">
            Robert M Hendricks
            </Link>
        </p>
      </div>
    </div>
  );
};

export default Hero;
