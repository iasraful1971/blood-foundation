import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../extra/Spinner";
import firebaseDB from "../firebase/firestore";
import useAuth from "../hooks/useAuth";
import logo from "../images/logo.png.png";
import Footer from "./Footer";
import Navbar from "./Navbar";


const BloodResiger = () => {
  const { user } = useAuth();
  const addingRefer = user?.email;

  
  const [loading , setLoading]=useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [village, setVillage] = useState("");
  const [upozela, setUpozela] = useState("");
  const [district, setDistict] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [blood, setBlood] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async () => {
    const registerData = {
      name,
      email,
      phone,
      village,
      upozela,
      district,
      age,
      date,
      blood,
      gender,
    };

    const registerDataInfo = {
      registerData,
      addingRefer,
    };
  if(name && email && phone && village && upozela && district && age && blood && gender){
    try {
      setLoading(true)
      const result = await addDoc(
        collection(firebaseDB, "registerCollection"),
        registerDataInfo
      )
      toast.success("Your data stored successfully"); 
      setLoading(false)
       
      setName("")
      setEmail("");
      setPhone("");
      setVillage("");
      setUpozela("");
      setDistict("");
      setAge("");
      setBlood("");
      setGender("")
      setDate("");
      toast.success("Your data stored successfully"); 
    } catch (error) {
      setLoading(false)
      
    }
  }
  else{
    toast.error("Register failed"); 
  }
  };
  
 
  
  return (
    <>
      <Navbar />

    {
      loading ? <Spinner/> :
      <div className="blood-donation-container">
      <div className="margin-container">
        <div className="donation-container-area">
          <h1>
            {" "}
            তরঙ্গ <span className="blood">রক্তসেবায়</span>  আপনাকে
            স্বাগতম। এখানে আপনি আপনার সঠিক ফোন, ব্লাড গ্রুপের নাম এবং
            অ্যাড্রেস ও তথ্য দিয়ে রেজিষ্ট্রেশন করবেন। আপনি চাইলে আপনার পরিচিত
            কারোর ইনফরমেশন দিয়ে রেজিষ্ট্রেশন করে দিতে পারবেন।
          </h1>
          <div className="blood-register-form-container">
            <div className="logo-area">
              <img src={logo} alt="" />
              <h6>The filled must be submitted in English</h6>
            </div>

            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your full name"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Your email "
            />
            <input
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Mobile Number"
            />

            <div className="blood-register-three-flex">
              <input
                id="village"
                name="village"
                value={village}
                onChange={(e) => setVillage(e.target.value)}
                type="text"
                placeholder="Village"
              />

              <input
                value={upozela}
                onChange={(e) => setUpozela(e.target.value)}
                type="text"
                id="upozela"
                name="upozela"
                placeholder="Upozela"
              />

              <input
                value={district}
                onChange={(e) => setDistict(e.target.value)}
                type="text"
                id="district"
                name="district"
                placeholder="District"
              />
            </div>

            <div className="blood-register-two-flex">
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                type="number"
                id="age"
                name="age"
                placeholder="your Age"
              />

              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                name="gender"
                id="gender"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>

              <select
                value={blood}
                onChange={(e) => setBlood(e.target.value)}
                name="blood-group"
                id="blood-group"
              >
                <option value="">Blood Group</option>
                <option value="a+">A RhD positive (A+)</option>
                <option value="a-">A RhD negative (A-)</option>
                <option value="b+">B RhD positive (B+)</option>
                <option value="b-">B RhD negative (B-)</option>
                <option value="o+">O RhD positive (O+)</option>
                <option value="o-">O RhD negative (O-)</option>
                <option value="ab+">AB RhD positive (AB+)</option>
                <option value="ab-">AB RhD negative (AB-)</option>
              </select>
            </div>
            <div className="date-picker">
              <label style={{ color: "#fff" }} htmlFor="date">
                Last blood donate time
              </label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="datetime-local"
                id="date"
                name="date"
              />
            </div>
            <div className="button-data-sub">
              <button onClick={handleSubmit}>Submit your Information</button>
            </div>
          </div>
        </div>
      </div>
    </div> 
    }
     
      <Footer />
    </>
  );
};

export default BloodResiger;
