"use client";
import React from "react";
import About from "./About/page";
import Contact from "./Contact/page";
import Products from "./Products/page";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <section className="relative h-screen bg-cover bg-center">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-teal-300">
            <Typewriter
              options={{
                strings: [" Welcome to Our Interior World"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-lg md:text-2xl mb-8 font-bold text-sky-300">
            Crafting Spaces That Inspire World
          </p>
        </div>
      </section>

      <About />

      <Products />

      <Contact />
    </>
  );
}
