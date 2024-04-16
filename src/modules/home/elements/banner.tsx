import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <h1 className="font-clashDisplay uppercase font-bold text-5xl md:text-7xl lg:text-9xl max-w-4xl mx-auto">
          Communicate with
          <span className="text-[#22d3ee]"> your customers</span>
        </h1>
        <h3 className="text-3xl lg:text-4xl mt-4">and staff like never before</h3>
        <Button className="mt-8">Get Started</Button>
      </div>
    </div>
  );
};

export default Banner;
