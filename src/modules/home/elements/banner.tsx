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
            "url('https://media.istockphoto.com/id/1419530650/photo/leadership-management-and-teamwork-between-ceo-and-senior-manager-in-a-business-meeting-in.jpg?s=1024x1024&w=is&k=20&c=TzG4izpLNxkpptzi4v8AatExF_4SQvOMBwaqIURh6-M=')",
                    filter: "blur(5px)", // Add blur effect here

        }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <h1 className="font-clashDisplay uppercase font-bold text-5xl md:text-7xl lg:text-9xl max-w-4xl mx-auto">
          Communicate with
          <span className="text-[#22d3ee]"> your customers</span>
        </h1>
        <h3 className="text-[#22d3ee] text-3xl lg:text-4xl mt-4">and staff like never before</h3>
        <Button className="mt-8">Get Started</Button>
      </div>
    </div>
  );
};

export default Banner;
