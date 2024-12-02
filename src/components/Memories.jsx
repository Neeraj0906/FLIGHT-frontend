// src/components/Memories.jsx
import React from 'react';
import bookRelaxImg from '../assets/Book & relax.png'; // Ensure the path is correct
import smartChecklistImg from '../assets/Smart Checklist.jpg'; // Ensure the path is correct
import saveMoreImg from '../assets/Save More.png'; // Ensure the path is correct

function Memories() {
  return (
    <section style={{ padding: '20px', backgroundColor: '#e0f7fa', height: "630px", width: "100%", borderRadius: "10px", marginTop: "10px" }}>
      <div style={{ width: '82%', margin: '0 auto' }}> {/* Wrapper with 82% width */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ marginRight: "50%", fontSize: "45px", color: "#00796b", justifyContent: "left", width: "100%" }}>
            <b>TRAVEL TO MAKE MEMORIES ALL AROUND THE WORLD</b>
          </h2>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '20px',
          height: "420px",
          fontSize: "23px",
          color: "grey",
          width: "100%"
        }}>
          {[
            { imageSrc: bookRelaxImg, title: "BOOK & RELAX", description:
              "With \"Book and Relax,\" you can unwind and enjoy your journey while we handle all the details.", imageStyle:{width:"140px",height:"140px",borderRadius:"50%",marginTop:"0px"}  },
            { imageSrc: smartChecklistImg, title: "SMART CHECKLIST", description:
              "Introducing Smart Checklist, an innovative solution that transforms how you travel with our airline.", imageStyle:{width:"150px",height:"150px",borderRadius:"50%",marginTop:"0px"} },
            { imageSrc: saveMoreImg, title: "SAVE MORE", description:
              "We prioritize affordability through discounted ticket prices and exclusive promotions without compromising quality.", imageStyle:{width:"150px",height:"150px",marginTop:"0px"} }
          ].map((item, index) => (
            <div key={index} style={{
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              padding: '15px',
              textAlign: 'left',
              width: '30%',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <img src={item.imageSrc} alt={item.title} 
                style={item.imageStyle} />
              <h4 style={{ color: '#00796b', marginTop:"5px" }}><b>{item.title}</b></h4>
              <p style={{ width: '100%', textAlign: 'center', marginTop: '10px', color:"#555" }}>{item.description}</p> {/* Adjusted description styling */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Memories;