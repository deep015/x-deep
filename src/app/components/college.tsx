"use client";
import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Image from "next/image";

export function College() {
  const items = [
    {
      title: "Kahi-Vishwanath Temple",
      image:
        "/banaras.jpeg",
      className: "absolute top-25 right-[38%] rotate-[-8deg] md:top-10 md:left-[40%] md:rotate-[-5deg]",
    },
    {
      title: " Vindhyachal Temple ",
      image:
        "/vindhyaChal.jpeg ",
      className: "absolute top-8 left-[41%] rotate-[-7deg]",
    },
    {
      title: "Goraknath Temple",
      image:
        "/Gorkahnath.jpeg",
      className: "absolute top-10 left-[40%] rotate-[8deg]",
    },
    {
      title: "Sangam",
      image:
        "/pryag.jpeg",
      className: "absolute top-25 left-[41%] rotate-[10deg]",
    },
    {
      title: "Vaishno Dev Temple",
      image:
        "./Katra.jpeg",
      className: "absolute top-18 right-[39%] rotate-[-9deg]",
    },
    {
      title: "Ram Mandir",
      image:
        "/Rammandir.jpeg",
      className: "absolute top-24 right-[40%] rotate-[7deg]",
    },
    {
      title: "Hanumanth Dham",
      image:
        "/lucknow.jpeg",
      className: "absolute top-18 right-[39%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
          <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
It’s all part of my way of staying curious, staying creative, and staying in motion. 
   </p>

     {items.map((item) => (
  <DraggableCardBody key={item.title} className={item.className}>
    <Image
      src={item.image}
      alt={item.title}
      className="pointer-events-none relative z-10 h-30 md:h-45 w-full object-cover"
    />
    <h3 className="mt-4 text-center text-base font-bold text-neutral-700 dark:text-neutral-300">
      {item.title}
    </h3>
  </DraggableCardBody>
))}

    </DraggableCardContainer>
  );
}
