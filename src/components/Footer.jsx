import React from "react";
import { CgMail } from "react-icons/cg";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/logo.png.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="margin-container footer-container">
        <div className="footer-box">
          <div className="logo-flex">
            <img src={logo} alt="" />
            <h2>
            তরঙ্গ

             <span className="blood">রক্তসেবা</span> ফাউন্ডেশন
            </h2>
          </div>
          <p>
          তরঙ্গ <span className="blood">রক্তসেবা</span> ফাউন্ডেশন একধরনের নন
            প্রফিট অর্গানাইজেশন। এটি মুলত মানুষের সেবার লক্ষ্যে তরুন সমাজের
            দ্বারা স্থাপিত ও পরিচালিত হয়।  তরঙ্গ
            <span className="blood">রক্তসেবা</span> জরুরি
            <span className="blood">রক্তের</span> প্রয়োজনে কাজ করে থাকে।
          </p>
          <div className="socials">
            <div className="social-div">
              <Link to="/">
                <FaFacebook /> <span>/taranggaraktaseba</span>
              </Link>
            </div>
            <div className="social-div">
              <Link to="/">
                <FaTwitter /> <span>/taranggaraktaseba</span>
              </Link>
            </div>
            <div className="social-div">
              <Link to="/">
                <CgMail /> <span>/taranggaraktaseba@info</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-box">
          <h4>মেনুবার</h4>
          <ui style={{ listStyleType: "none" }}>
            <li>
              <Link to="/">হোম</Link>
            </li>
            <li>
              <Link to="/">ব্লাড ডোনার</Link>
            </li>
            <li>
              <Link to="/">আমাদের সম্পর্কে</Link>
            </li>
            <li>
              <Link to="/">জরুরি প্রশ্ন</Link>
            </li>
            <li>
              <Link to="/">যোগাযোগ</Link>
            </li>
            <li>
              <Link to="/">রেজিষ্ট্রেশন</Link>
            </li>
          </ui>
        </div>

        <div className="footer-box">
          <h4>গুরুত্বপূর্ণ লিংক</h4>
          <ui style={{ listStyleType: "none" }}>
            <li>
              <Link to="/">প্রাইভেসি & পলিসি</Link>
            </li>
            <li>
              <Link to="/">আপনার একাউন্ট</Link>
            </li>
            <li>
              <Link to="/">ডোনেট</Link>
            </li>
            <li>
              <Link to="/">সোস্যাল লিংক</Link>
            </li>
            <li>
              <Link to="/">মিট আপ</Link>
            </li>
            <li>
              <Link to="/">নিউজফিড</Link>
            </li>
          </ui>
        </div>
     
       
      </div>
      <hr />
      <div className="copyright flex justify-between items-center">
         <p>Copyright Tarangga <span className="blood">RaktaSeba</span> foundation © All rights reserved. 2022</p>
         <p>Designed and developed by <Link to="/">Md Asraful</Link> </p>
         </div>
    </div>
  );
};

export default Footer;
