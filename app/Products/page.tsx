"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import 'aos/dist/aos.css'; 
import AOS from 'aos';

function Products() {

  useEffect(() => {
    AOS.init({
      duration: 2000, 
      easing: 'ease-in-out', 
      once: true,     
    });
  }, []);




    return (
        <>
        

        <section className="text-gray-400 bg-gray-900 body-font">
          
  <div className="container px-5 py-24 mx-auto">
    {/* Centered Heading */}
    <h1 className="text-center text-4xl md:text-6xl font-bold font-sans italic text-white mb-12 hover:text-teal-400 transition duration-500 ease-600 animate-bounce">
      
    Our Products</h1>


   


     
    
    <div className="flex flex-wrap -m-4">
      {/* First Product */}
      <div className="p-4 md:w-1/3 sm:w-1/2 w-full" data-aos="flip-right">
  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
    <Image 
      src="/images/image1.jpg" 
      alt="Contemporary Media Lounge" 
      width={720} 
      height={400} 
      className="lg:h-48 md:h-36 w-full object-cover object-center"
    />
    <div className="p-6">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">MEDIA LOUNGE</h2>
      <h1 className="title-font text-lg font-medium text-white mb-3">Contemporary Media Lounge</h1>
      <p className="leading-relaxed mb-3">This sophisticated media lounge blends luxury with comfort, offering a sleek space perfect for relaxation and entertainment. With a spacious sofa, large TV setup, and stylish lighting, it's designed to be both functional and visually stunning.</p>
      <div className="flex items-center flex-wrap">
        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>3.2K
        </span>
      </div>
    </div>
  </div>
</div>



      {/* Second Product */}
      <div className="p-4 md:w-1/3 sm:w-1/2 w-full" data-aos="flip-right">
  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
    <Image 
      src="/images/image2.jpg" 
      alt="Modern Minimalist Living Room" 
      width={720} 
      height={400} 
      className="lg:h-48 md:h-36 w-full object-cover object-center"
    />
    <div className="p-6">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">LIVING ROOM</h2>
      <h1 className="title-font text-lg font-medium text-white mb-3">Modern Minimalist Living Room</h1>
      <p className="leading-relaxed mb-3">This modern living room features sleek, dark tones and minimalist design elements. The low-profile furniture and subtle geometric wall designs create an elegant, contemporary space perfect for relaxation and entertainment.</p>
      <div className="flex items-center flex-wrap">
        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>2.2K
        </span>
      </div>
    </div>
  </div>
</div>









      
   {/* Third Product */}
<div className="p-4 md:w-1/3 sm:w-1/2 w-full" data-aos="flip-right">
  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
    <Image 
      src="/images/image3.jpg" 
      alt="Modern Minimalist Bedroom" 
      width={720} 
      height={400} 
      className="lg:h-48 md:h-36 sm:h-48 w-full object-cover object-center" // Ensuring same height on small devices
    />
    <div className="p-6">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">BEDROOM</h2>
      <h1 className="title-font text-lg font-medium text-white mb-3">Modern Minimalist Bedroom</h1>
      <p className="leading-relaxed mb-3">This stylish bedroom combines minimalist design with a luxurious, dark palette. The platform bed, suspended lighting, and layered textures create a serene and elegant atmosphere, perfect for elegant restful sleep and relaxation entertainment.</p>
      <div className="flex items-center flex-wrap">
        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>4.5K
        </span>
      </div>
    </div>
  </div>
</div>

{/* Fourth Product */}
<div className="p-4 md:w-1/3 sm:w-1/2 w-full" data-aos="flip-right">
  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
    <Image 
      src="/images/image04.jpg" 
      alt="Luxury Home Office" 
      width={720} 
      height={400} 
      className="lg:h-48 md:h-36 sm:h-48 w-full object-cover object-center" // Ensuring same height on small devices
    />
    <div className="p-6">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">HOME OFFICE</h2>
      <h1 className="title-font text-lg font-medium text-white mb-3">Luxury Home Office</h1>
      <p className="leading-relaxed mb-3">This home office blends elegance and functionality, featuring sophisticated design elements, ambient lighting, and a serene color palette. Perfect for productivity and creativity, this space offers both comfort and modern style for remote work or study sessions.</p>
      <div className="flex items-center flex-wrap">
        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>2.8K
        </span>
      </div>
    </div>
  </div>
</div>


















      {/* Fifth Product */}
      <div className="p-4 md:w-1/3 sm:w-1/2 w-full" data-aos="flip-right">
  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
    <Image 
      src="/images/image5.jpg" 
      alt="Modern Gourmet Kitchen" 
      width={720} 
      height={400} 
      className="lg:h-48 md:h-36 w-full object-cover object-center"
    />
    <div className="p-6">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">KITCHEN</h2>
      <h1 className="title-font text-lg font-medium text-white mb-3">Modern Gourmet Kitchen</h1>
      <p className="leading-relaxed mb-3">This sleek and spacious kitchen is designed for culinary enthusiasts. Featuring state-of-the-art appliances, a minimalist layout, and ample counter space, it creates the perfect environment for cooking, entertaining, and enjoying gourmet meals.</p>
      <div className="flex items-center flex-wrap">
        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>1.6K
        </span>
      </div>
    </div>
  </div>
</div>


      {/* Sixth Product */}
      <div className="p-4 md:w-1/3 sm:w-1/2 w-full" data-aos="flip-right">
  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
    <Image 
      src="/images/image06.jpg" 
      alt="Luxurious Spa Bathroom" 
      width={720} 
      height={400} 
      className="lg:h-48 md:h-36 w-full object-cover object-center"
    />
    <div className="p-6">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">BATHROOM</h2>
      <h1 className="title-font text-lg font-medium text-white mb-3">Luxurious Spa Bathroom</h1>
      <p className="leading-relaxed mb-3">Indulge in this luxurious spa-inspired bathroom, designed with modern elegance and relaxation in mind. Featuring sleek fixtures, a rainfall shower, and ambient lighting, this space brings the essence of a high-end spa to the comfort of your home.</p>
      <div className="flex items-center flex-wrap">
        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>1.5K
        </span>
      </div>
    </div>
  </div>
</div>

    </div>
  </div>
</section>


       
        
        
        
        
        </>
    )

}


   export default Products;