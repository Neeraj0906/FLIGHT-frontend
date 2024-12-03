// src/components/FeaturedTours.jsx
import React from 'react';

function FeaturedTours() {
  const tours = [
    {
      name: "Dubai",
      description: "Explore the vibrant city of Dubai with our exclusive tour packages.",
      imageUrl: "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/shutterstock_2414539851_ss_non-editorial_dcx0bm?_a=BAVARSDW0"
    },
    {
      name: "Paris",
      description: "Discover the romantic charm of Paris with our guided tours.",
      imageUrl: "https://149990825.v2.pressablecdn.com/wp-content/uploads/2023/09/Paris1.jpg"
    },
    {
      name: "Singapore",
      description: "Experience the beauty and culture of Singapore through our tours.",
      imageUrl: "https://lapwingvacations.in/wp-content/uploads/2023/08/singapore-1-960x600-1.jpg"
    },
    {
      name: "Malaysia",
      description: "Explore the diverse landscapes of Malaysia with our guided tours.",
      imageUrl: "https://static2.tripoto.com/media/filter/tst/img/210609/TripDocument/1474116741_destination_for_malaysian_24343.jpg"
    }
  ];

  return (
    <section className="p-5 bg-blue-100 rounded-lg mt-2">
      <h2 className="text-center text-4xl font-bold text-[#00796b] mb-5">
        FEATURED TOURS
      </h2>
      <div className="flex flex-col gap-5">
        {tours.map((tour, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-lg p-4 flex items-center shadow-md">
            <img 
              src={tour.imageUrl} 
              alt={tour.name} 
              className="h-[115px] w-[115px] rounded-md mr-4" 
            />
            <div className="flex flex-col gap-2 ml-4">
              <h4 className="text-[#00796b] text-xl font-bold">{tour.name}</h4>
              <p className="text-gray-600">{tour.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedTours;