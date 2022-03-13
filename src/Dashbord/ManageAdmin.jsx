import DeleteIcon from '@mui/icons-material/Delete';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import firebaseDb from '../firebase/firestore';

const ManageTeam = () => {
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



const deleteData =async (message) => {
  try {
    toast.success("deleted successfully");
    await deleteDoc(doc(firebaseDb, "teamCollection", message?.id ))
    getData();
  } catch (error) {
    
  }
}



    return (
        <>
          <div className="contact-info-container">
            {
              teams.map((message) => {
                return  <>
                <div className='message-box-container my-6 p-4'>
                  <div className='message-box-container-text'>
                  <h2>Name : {message?.teamData?.name} </h2>
                  <h2>Email : {message?.teamData?.email} </h2>
                  <h2>Role: {message?.teamData?.role} </h2>
                  <h5>Address: {message?.teamData?.address}</h5>
                  <p>Gender : {message?.teamData?.gender}</p>
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

export default ManageTeam;