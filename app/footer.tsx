import Link from "next/link";
import Image from "next/image";

 
 function Footer() { 
    return (

<footer className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 body-font">
  <div className="container px-6 py-3 mx-auto flex flex-col sm:flex-row items-center justify-between">

 

     {/* Social Icons */}
     <div className="flex justify-center items-center space-x-5 mt-4 sm:mt-0">

      {/* Facebook */}
         <Link href={"https://www.facebook.com/"} target="_blank" className="text-gray-200 hover:text-[#1877F2] transition-colors duration-300 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
     
      </Link>



      {/* Github */}
     <Link href={"https://github.com/github-login"} target="_blank" className="text-gray-200 hover:text-[#333] transition-colors duration-300 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.1.68-.22.68-.48v-1.72c-2.78.6-3.37-1.35-3.37-1.35-.45-1.12-1.1-1.42-1.1-1.42-.9-.6.07-.59.07-.59 1 .07 1.53 1.04 1.53 1.04.88 1.52 2.31 1.08 2.88.83.09-.64.34-1.08.62-1.33-2.22-.25-4.56-1.12-4.56-5a3.9 3.9 0 011.04-2.72c-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.04a9.48 9.48 0 015 0c1.9-1.31 2.75-1.04 2.75-1.04.56 1.41.21 2.45.1 2.71.64.7 1.03 1.68 1.03 2.72 0 3.88-2.35 4.74-4.6 5 .35.31.67.93.67 1.87v2.79c0 .26.18.59.68.49A10 10 0 0022 12c0-5.52-4.48-10-10-10z"></path>
        </svg>
      </Link>

      {/* Instagram */}
      <Link href={"https://www.instagram.com/accounts/login/"} target="_blank" className="text-gray-200 hover:text-[#E1306C] transition-colors duration-300 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
        </Link>

      {/* LinkedIn */}
      <Link href={"https://www.linkedin.com/login"} target="_blank" className="text-gray-200 hover:text-[#0A66C2] transition-colors duration-300 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
        </Link>

      </div>








    {/* Text Section */}
    <div className="flex items-center justify-center border-l-2 border-white border-r-2 px-4">
      <p className="text-sm text-gray-300 sm:text-base md:text-lg lg:text-xl italic">
        © 2024 Modern Interior. All rights reserved.
      </p>
    </div>

   
  



      {/* Logo Section */}
      <div className="flex title-font font-medium items-center text-white mb-4 sm:mb-0">
      <Image src="/images/logo.jpg" alt="LOGO" width={70} height={25} className="border-none rounded-lg" />
    </div>
  </div>
</footer>



) }

export default Footer;