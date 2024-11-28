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
    <section style={{ padding: '20px', backgroundColor: '#f0f0f0', width: '82%', marginLeft: 'auto', marginRight: 'auto' ,marginTop:"10px",borderRadius:"10PX"}}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px',fontSize:"45px" ,color:"black" }}><b>FEATURED TOURS</b></h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {tours.map((tour, index) => (
          <div key={index} style={{ backgroundColor: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'center' }}>
            <img style={{ height: "115px", width: "115px", borderRadius: "5px", marginRight: "10px" }} src={tour.imageUrl} alt={tour.name} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: "10px", marginLeft: "20px",fontSize:"20px" }}>
              <h4 style={{fontWeight:"bold",fontSize:"25px"}}>{tour.name}</h4>
              <p>{tour.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedTours;