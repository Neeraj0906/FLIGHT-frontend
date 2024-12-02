// src/components/Plan.jsx
import React from "react";
import plan1 from "../assets/plan-1.jpg";
import plan2 from "../assets/plan-2.jpg";
import plan3 from "../assets/plan-3.jpg";

function Plan() {
  return (
    <section
      style={{
        padding: "50px",
        backgroundColor: "#e0f7fa", // Light blue background for contrast
        display: "flex",
        alignItems: "flex-start",
        height: "600px",
        width: "100%",
        borderRadius: "15px",
        marginTop: "10px"
      }}
    >
      <div style={{ flex: 1, paddingRight: "20px", width: "70%" }}>
        <p style={{ fontSize: "18px", color: "#004d40", marginLeft: "35%", letterSpacing: "4px", marginBottom: "5px" }}>
          <b>TRAVEL SUPPORT</b>
        </p>
        <h2 style={{ marginBottom: "20px", marginLeft: "3%", color: "#004d40", fontSize: "34px" }}>
          <b>PLAN YOUR TRAVEL WITH CONFIDENCE</b>
        </h2>
        <p style={{ marginBottom: "20px", color: "#555", marginLeft: "20px" }}>
          FIND HELP WITH YOUR BOOKINGS AND TRAVEL PLANS, AND SEE WHAT TO EXPECT ALONG YOUR JOURNEY.
        </p>
        <div style={{ marginBottom: "20px", color:"black"}}>
          <div
            style={{
              backgroundColor: "#007bff",
              color: "black",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>01</span>{" "}
            <strong>Travel Requirements for Dubai</strong>
            <p>
              Stay informed and prepared for your trip to Dubai with essential
              travel requirements, ensuring a smooth and hassle-free experience
              in this vibrant and captivating city.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#ff7f50",
              color: "black",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>02</span>{" "}
            <strong>Multi-risk travel insurance</strong>
            <p>
              Comprehensive protection for your peace of mind, covering a range
              of potential travel risks and unexpected situations.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#ffcc99",
              color: "black",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <span style={{ fontWeight: "bold", }}>03</span>{" "}
            <strong>Travel Requirements by destinations</strong>
            <p>
              Stay informed and plan your trip with ease, as we provide
              up-to-date information on travel requirements specific to your
              desired destinations.
            </p>
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div style={{ position: "relative", width: "40%", height: "200px", marginTop:"50px" }}>
        {/* First Image */}
        <img
          src={plan1}
          alt="plan"
          style={{
            height: "300px",
            borderRadius: "45%",
            position: "absolute",
            top: "130%",
            left: "17%",
            transform: "translateY(-50%)",
            marginRight:"20px"
          }}
        />

        {/* Second Image */}
        <img
          src={plan2}
          alt="plan"
          style={{
            height: "300px",
            borderRadius: "45%",
            position:"relative",
            top: "50%",
            left: "60%",
            transform: "translate(-50%, -40%)",
             
          }}
        />

        {/* Third Image */}
        <img
          src={plan3}
          alt="plan"
          style={{
            height: "300px",
            borderRadius: "45%",
            position: "absolute",
            top: "130%",
            right: "0",
            transform: "translateY(-50%)",
            marginRight:"-30px"
          }}
        />
      </div>
    </section>
  );
}

export default Plan;