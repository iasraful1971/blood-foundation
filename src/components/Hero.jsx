import React from "react";
import { Link } from "react-router-dom";
import hero from "../images/hero.jpg.jpg";
const Hero = () => {
  return (
    <div className="margin-container">
      <div className="hero">
        <div className="hero-text">
          <h1>
         <span className="blood"> রক্তদান</span> মানে আপনার কাছে কয়েক মিনিট, কিন্তু অন্য কারো জন্য সারাজীবন।
          </h1>
          <p>
            
রক্তদানের স্লোগান কি? <span className="blood">রক্ত</span> দিন এবং বিশ্বকে সুস্থ রাখুন এই বছরের প্রচারাভিযানের ফোকাস 2022-এর জন্য, বিশ্ব রক্তদাতা দিবসের স্লোগান হবে " <span className="blood">রক্ত</span> দিন এবং বিশ্বকে বীট রাখুন"। বার্তাটি রক্তদাতাদের জীবন বাঁচাতে এবং অন্যদের স্বাস্থ্যের উন্নতির মাধ্যমে বিশ্বকে স্পন্দিত রাখার জন্য প্রয়োজনীয় অবদান তুলে ধরে!
          </p>
          <Link to="/blood-register">
          <button>শুরু করুন
</button>
          </Link>
        </div>
        <div className="hero-lottie">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
