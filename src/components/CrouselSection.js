import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { shortBlogData } from "../static/ShortBlogData";
import "@splidejs/react-splide/css";
import "../pages/HomePage.css";

const CrouselSection = () => {
  return (
    <div className="crousel">
      <Splide
        options={{
          perPage: 1,
          breakpoints: {
            640: {
              perPage: 1,
              gap: "0rem",
              width:'80%'
            },
          },
          gap: "5rem",
          width: "50%",
          rewind: true,
          arrows: false,
          autoplay: true,
          interval: 2300,
          padding: 0,
          mediaQuery: "max",
        }}
      >
        {shortBlogData.map((item, index) => (
          <SplideSlide key={index}>
            <div style={{ marginBottom: "80px" }}>
              <h2 style={{textAlign:'center'}}>{item}</h2>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CrouselSection;
