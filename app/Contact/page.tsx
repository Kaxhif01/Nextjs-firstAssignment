import React from'react';
import { BiMessageDetail } from "react-icons/bi";

function Contact() {
    return (
       <div className="min-h-screen flex items-center justify-center bg-gray-900">

      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-center text-2xl font-semibold mb-4"> Get in touch </h2>
        
        
        <form >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              <span className="inline-block mr-2">&#128100;</span> Full Name
            </label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              placeholder="Full Name" 
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              <span className="inline-block mr-2">&#128231;</span> Email
            </label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              placeholder="Email" 
            />
          </div>

          

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="message">
            <span ><BiMessageDetail className="inline-block mr-2" /> </span>
             Message
            </label>
            <textarea 
              id="message" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
              rows={4}
              placeholder="Your message here..."
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
            Submit

          </button>
        </form>

      
      </div>
    </div>
  );
}
    


 export default Contact;