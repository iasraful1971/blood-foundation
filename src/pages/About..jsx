import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import firebaseDb from '../firebase/firestore';
import manavatar from "../images/mainmanavatar.png";
import womenavatar from "../images/womenavatar.png";

const About = () => {

      // get data 
const [teams, setTeams] = useState([]);
 

async function getData() {
  try {
    const teamTemp = await getDocs(
      collection(firebaseDb, "teamCollection")
    );
    const postArray = [];
    teamTemp.forEach((doc) => {
      const obj = {
        id: doc.id,
        ...doc.data(),
      };
      postArray.push(obj);
    });
    setTeams(postArray);
    console.log(postArray)
  } catch (error) {}
}


useEffect(() => {
  getData();
}, []);



    return (
        <>
         <Navbar/>
         <div className="blood-donner">
        <div className="margin-container">
          <div className="blood-donner-header-area">
            <div className="header-text">
              <h1>
             <span className="blood"> রক্তদান</span> করলে শুধু অন্যজনের উপকার হয় না, আপনি নিজেও উপকার পাবেন। প্রথম হলো মানসিক শান্তি। আপনার রক্তে জীবন ফিরে পেয়েছেন কেউ- ভাবুন এটা কতোটা পরোপকারী কাজ।
              </h1>
              <h2>
              তরঙ্গ রক্তসেবা সংগঠের পরিচালনা  কমিটির সদস্যদের তালিকা নিচে দেওয়া হয়েছে। আপনি চাইলে আমাদেফ টিমে জয়েন করে মানবতার রক্ত খোঁজায় সহযোগী  হতে পারেন
              </h2>
              <h4>
              আমাদের সংগঠনে জয়েন করতে চাইলে নিচের বাটকে ক্লিক করেন।

              </h4>
           <Link to= "/contact">
           <button>শুরু করুন</button>
           </Link>

            </div>
          </div>
        </div>
         </div>


     <div className="margin-container">
     <div className="donner-list">
          {teams.map((donner) => {
              return (
                <div className="donner-box">
                   {donner.teamData?.gender === "male" ? (
                    <img src={manavatar} alt="" />
                  ) : (
                    <img src={womenavatar} alt="" />
                  )}
                  <div className="text-content">
                    <h5>
                      <span>Name : </span> {donner?.teamData?.name}
                    </h5>
                    <p>
                      <span>
                        <span className="blood">Role </span> :
                      </span>
                      {donner?.teamData?.role}
                    </p>
                    <p>
                      <span>Mobile Number : </span>{" "}
                      {donner?.teamData?.phone}
                    </p>
                    <h6>
                  
                      <span>Gmail : </span> {donner?.teamData?.email}
                    </h6>

                    <h6>
                  
                      <span>Location</span> {donner?.teamData?.address}
                    </h6>
                   
                  </div>
                </div>
              
              );
            })}
        </div> 
     </div>




         <Footer/>   
        </>
    );
};

export default About;