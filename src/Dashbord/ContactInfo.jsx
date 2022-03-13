import DeleteIcon from '@mui/icons-material/Delete';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import firebaseDb from '../firebase/firestore';
const ContactInfo = () => {
    // get data 
const [messages, setMessages] = useState([]);
 

async function getData() {
  try {
    const postings = await getDocs(
      collection(firebaseDb, "messageCollection")
    );
    const postArray = [];
    postings.forEach((doc) => {
      const obj = {
        id: doc.id,
        ...doc.data(),
      };
      postArray.push(obj);
    });
    setMessages(postArray);
    
  } catch (error) {}
}


useEffect(() => {
  getData();
}, []);


const deleteData =async (message) => {
  try {
    toast.success("deleted successfully");
    await deleteDoc(doc(firebaseDb, "messageCollection", message?.id ))
    getData();
  } catch (error) {
    
  }
}

    return (
        <>
          <div className="contact-info-container">
            {
              messages.map((message) => {
                return  <>
                <div className='message-box-container my-6 p-4'>
                  <div className='message-box-container-text'>
                  <h2>Email : {message?.message?.email} </h2>
                  <h2>Name: {message?.message?.name} </h2>
                  <h5>Subject: {message?.message?.subject}</h5>
                  <p>Message : {message?.message?.text}</p>
                </div>
                
                <div onClick={() => {
                  deleteData(message)
                }} className='message-box-container-icon'><DeleteIcon/>
                </div>
                </div>
               </>
              })
            }
       
          </div>
        </>
    );
};

export default ContactInfo;