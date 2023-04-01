import React from "react";
import CrouselSection from "../components/CrouselSection";
import { BlogData } from "../static/BlogData";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="">
      <div className="containers">
        <CrouselSection />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px 0px",
          }}
        >
          <Link to={"./create-blog"}>
            <button className="btn">Create A New Blog</button>
          </Link>
        </div>
      </div>
      <div className="blogContainer">
        <p className="insight">
          Latest Insights
        </p>
        <div className="space-y-10 pb-10 ">
          {BlogData.map((item, index) => (
            <BlogCard
              key={index}
              heading={item.heading}
              description={item.description}
              uploadTime={item.uploadTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
