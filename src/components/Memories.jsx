// src/components/Memories.jsx
import React from 'react';
import bookRelaxImg from '../assets/Book & relax.png'; // Ensure the path is correct
import smartChecklistImg from '../assets/Smart Checklist.jpg'; // Ensure the path is correct
import saveMoreImg from '../assets/Save More.png'; // Ensure the path is correct

function Memories() {
  return ( 
    <section className="p-5 bg-blue-100 rounded-lg mt-2 h-auto">
      <div className="w-11/12 mx-auto"> {/* Wrapper with responsive width */}
        <div className="text-center mb-5">
          <h2 className="text-[#00796b] text-5xl font-bold mt-5">
            TRAVEL TO MAKE MEMORIES ALL AROUND THE WORLD
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-around gap-5">
          {[
            { imageSrc: bookRelaxImg, title: "BOOK & RELAX", description:
              "With \"Book and Relax,\" you can unwind and enjoy your journey while we handle all the details." },
            { imageSrc: smartChecklistImg, title: "SMART CHECKLIST", description:
              "Introducing Smart Checklist, an innovative solution that transforms how you travel with our airline." },
            { imageSrc: saveMoreImg, title: "SAVE MORE", description:
              "We prioritize affordability through discounted ticket prices and exclusive promotions without compromising quality." }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md flex flex-col items-center w-full md:w-[30%] h-[380px] mt-5"> {/* Card background color adjusted */}
              <img 
                src={item.imageSrc} 
                alt={item.title} 
                className="h-[160px] w-[160px] rounded-full mb-3" 
              />
              <h4 className="text-[#00796b] text-xl font-bold">{item.title}</h4>
              <p className="text-gray-700 text-center text-lg mt-2">{item.description}</p> {/* Increased text size */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Memories;