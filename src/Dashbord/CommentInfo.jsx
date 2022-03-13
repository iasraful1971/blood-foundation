import DeleteIcon from '@mui/icons-material/Delete';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import firebaseDb from '../firebase/firestore';

const CommentInfo = () => {
            // get data 
const [postInfos, setPostInfos] = useState([]);
 

async function getData() {
  try {
    const postings = await getDocs(
      collection(firebaseDb, "postCollection")
    );
    const postArray = [];
    postings.forEach((doc) => {
      const obj = {
        id: doc.id,
        ...doc.data(),
      };
      postArray.push(obj);
    });
    setPostInfos(postArray);
   
  } catch (error) {}
}

useEffect(() => {
  getData();
}, [])


const deleteData =async (post) => {
  try {
    toast.success("deleted successfully");
    await deleteDoc(doc(firebaseDb, "postCollection", post?.id ))
    getData();
  } catch (error) {
    
  }
}

    return (
        <>
              <div className="contact-info-container">
            {
              postInfos.map((post) => {
                return  <>
                <div className='message-box-container my-6 p-4'>
                  <div className='message-box-container-text'>
                  <h2>Email : {post?.post?.email} </h2>
                  <p>Name: {post?.post?.date} </p>
                  
                  <p>Message : {post?.post?.postData}</p>
                </div>
                  <div className="border"></div>
                <div onClick={() => {
                  deleteData(post)
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

export default CommentInfo;