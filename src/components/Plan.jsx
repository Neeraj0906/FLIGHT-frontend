// src/components/Plan.jsx
import React from "react";
import plan1 from "../assets/plan-1.jpg";
import plan2 from "../assets/plan-2.jpg";
import plan3 from "../assets/plan-3.jpg";

function Plan() {
  return (
    <section className="flex flex-col md:flex-row items-start bg-blue-100 p-6 rounded-lg shadow-lg mt-2 h-auto">
      <div className="flex-1 pr-5">
        <p className="text-lg text-[#004d40] mb-1 tracking-widest font-bold text-center">
          TRAVEL SUPPORT
        </p>
        <h2 className="text-[#004d40] text-3xl mb-5 font-bold text-center">
          PLAN YOUR TRAVEL WITH CONFIDENCE
        </h2>
        <p className="text-gray-700 mb-5 text-center">
          FIND HELP WITH YOUR BOOKINGS AND TRAVEL PLANS, AND SEE WHAT TO EXPECT ALONG YOUR JOURNEY.
        </p>
        <div className="text-black">
          {[
            {
              title: "Travel Requirements for Dubai",
              description:
                "Stay informed and prepared for your trip to Dubai with essential travel requirements, ensuring a smooth and hassle-free experience in this vibrant and captivating city.",
              bgColor: "bg-blue-600",
            },
            {
              title: "Multi-risk travel insurance",
              description:
                "Comprehensive protection for your peace of mind, covering a range of potential travel risks and unexpected situations.",
              bgColor: "bg-orange-400",
            },
            {
              title: "Travel Requirements by destinations",
              description:
                "Stay informed and plan your trip with ease, as we provide up-to-date information on travel requirements specific to your desired destinations.",
              bgColor: "bg-yellow-300",
            },
          ].map((item, index) => (
            <div key={index} className={`p-4 rounded-md mb-4 shadow-md ${item.bgColor} text-white`}>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Images Section */}
      <div className="relative w-full md:w-[40%] mt-[20px] md:mt-0 flex justify-center">
        {/* First Image */}
        <img
          src={plan1}
          alt="plan"
          className="h-[300px] rounded-full absolute top-[100%] left-[10%] transform -translate-y-[50%] z-20"
        />

        {/* Second Image */}
        <img
          src={plan2}
          alt="plan"
          className="h-[300px] rounded-full relative top-[50%] left-[20%] transform -translate-x-[50%] z-10"
        />

        {/* Third Image */}
        <img
          src={plan3}
          alt="plan"
          className="h-[300px] rounded-full absolute top-[100%] right-[5%] transform -translate-y-[50%] z-10"
        />
      </div>
    </section>
  );
}

export default Plan;