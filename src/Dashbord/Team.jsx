import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { toast } from "react-toastify";
import firebaseDb from "../firebase/firestore";

const Team = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] =useState("")
  const handleSubmit = async() => {
      const teamData = {
          name , email ,role, phone , address, gender
      }
      const teamInfo = {
          teamData
      }


      if(name && email && phone && role && address && gender){
        try {
         
          const result = await addDoc(
            collection(firebaseDb, "teamCollection"),
            teamInfo
          )
          toast.success("Added a team member"); 
        
           
          setName("")
          setEmail("");
          setPhone("");
          setAddress("");
          setRole("");
          setGender("")
          
          toast.success("Your data stored successfully"); 
        } catch (error) {
       
            toast.error("add  failed"); 
        }
      }
      else{
        toast.error("add failed"); 
      }
  };




  return (
    <div className="team-add">
   

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="team-input"
        placeholder="Name"
        type="text"
      />
         <input   value={email}
        onChange={(e) => setEmail(e.target.value)}  className="team-input" placeholder="Email" type="email" />
      <input
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="team-input"
        placeholder="Add role"
        type="text"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="team-input"
        placeholder="Mobile no"
        type="text"
      />
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="team-input"
        placeholder="Address"
        type="text"
      />
      <select   value={gender}
                onChange={(e) => setGender(e.target.value)}
      name="Gender" id="gender">
        <option value="gender">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button
        
        onClick={handleSubmit}
      >
        Add Team member
      </button>
    </div>
  );
};

export default Team;
