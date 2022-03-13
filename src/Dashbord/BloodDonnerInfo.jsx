import DeleteIcon from "@mui/icons-material/Delete";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import firebaseDb from "../firebase/firestore";

const BloodDonnerInfo = () => {
  // get data
  const [bloodDonnerInfo, setBloodDonnerInfo] = useState([]);

  async function getData() {
    try {
      const postings = await getDocs(
        collection(firebaseDb, "registerCollection")
      );
      const postArray = [];
      postings.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        postArray.push(obj);
      });
      setBloodDonnerInfo(postArray);
    
    } catch (error) {}
  }

  useEffect(() => {
    getData();
  }, []);


  const deleteData = async (donner) => {
    try {
      toast.success("deleted successfully");
      await deleteDoc(doc(firebaseDb, "registerCollection", donner?.id));
      getData();
    } catch (error) {}
  };





  return (
    <>
      <div className="contact-info-container">
        {bloodDonnerInfo.map((donner) => {
          return (
            <>
              <div className="message-box-container my-6 p-4">
                <div className="message-box-container-text">
                  <h2>Email : {donner?.registerData?.name} </h2>
                  <h2>Name: {donner?.registerData?.email} </h2>
                  <h2>Blood: {donner?.registerData?.blood} </h2>
                  <h2>Village : {donner?.registerData?.village} </h2>
                  <h2>Upozela: {donner?.registerData?.upozela} </h2>
                  <h2>District: {donner?.registerData?.district} </h2>
                  <h2>Age: {donner?.registerData?.age} </h2>
                  <h2>Gender: {donner?.registerData?.gender} </h2>
                  <h2>Last Blood Donate: {donner?.registerData?.date} </h2>
                </div>

                <div
                  className="message-box-container-icon"
                  onClick={() => {
                    deleteData(donner)
                  }}
                >
                  <DeleteIcon />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default BloodDonnerInfo;
