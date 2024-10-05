import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <section className="relative bg-gray-900 text-white py-24 md:py-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Image */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0 relative">
          <Image 
            src="/images/background.jpg" 
            alt="About Us" 
            layout="responsive" 
            width={600} 
            height={400}
            className="rounded-lg object-cover max-w-full h-[350px] md:h-[500px]" 
          />
        </div>
        
        {/* Right Side: Text */}
        <div className="md:w-1/2 w-full md:pl-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 italic animate-pulse text-center md:text-left">
            About Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 text-gray-200 text-center md:text-left">
            We are a passionate team of interior designers dedicated to bringing your visions to life. Whether creating elegant homes or modern workspaces, we deliver unique designs tailored to your style.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 text-gray-200 text-center md:text-left">
            Our philosophy combines creativity, functionality, and innovation to design spaces that inspire. Let's work together to build the perfect environment for your needs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
