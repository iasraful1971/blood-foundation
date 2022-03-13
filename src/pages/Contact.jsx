import { TextField } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import firebaseDb from '../firebase/firestore';
const Contact = () => {

    const [name , setName] = useState("");
    const [email , setEmail] =useState("");
    const [subject,setSubject ]=useState("");
    const [text, setText] =useState("");

    const handleSend = async () => {
        const message = {
            name , email , subject, text
        }
       const messageData ={
           message
       }
        
  if(!name || !email || !subject || !text){
    toast.error("write something first")
}else{
  try {
      const result = await addDoc(
        collection(firebaseDb, "messageCollection"),
        messageData
      );
      setName("")
      setEmail("")
      setSubject("")
      setText("")
      toast.success("Message successfully sent");
    } catch (error) {
      toast.error("Something is wrong ");
    }
  }
}


    




    return (

        
        <>
         <Navbar/>
         <div className="contact-container">
             <div className="margin-container">
                 <div className="contact-box">
                    <h2 className="my 2">Get in Touch with Tarangga <span className="blood">Raktoseba</span></h2>
                 <TextField value={name} onChange={(e) => setName(e.target.value)} className='contact-input' fullWidth label="Full Name" id="fullWidth" />

                 
                 <TextField value={email} onChange={(e) => setEmail(e.target.value)}  className='contact-input' fullWidth label="Email" id="fullWidth" />
                 <TextField value={subject} onChange={(e) => setSubject(e.target.value)}  className='contact-input' fullWidth label="Subject " id="fullWidth" />
                 <textarea value={text} onChange={(e) => setText(e.target.value)}  placeholder='Write something...' ></textarea>
                   <div className="contact-button">
                       <button onClick={handleSend} >Send to Tarangga Raktaseba team</button>
                   </div>
                 </div>
             </div>
         </div>
         <Footer/>   
        </>
    );
};

export default Contact;