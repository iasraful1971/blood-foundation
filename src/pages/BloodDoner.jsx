import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import firebaseDb from "../firebase/firestore";
import manAvatar from "../images/mainmanavatar.png";
import WomenAvatar from "../images/mainwomenavatar.png";


const BloodDonner = () => {
  // mui
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  
  const handleClose = () => {
    setOpen(false);
    
  };




 

  const [donners, setDonners] = useState([]);
  const [search, setSearch] = useState("");
  const [bloodFilter, setBloodFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");


  //show single
  const [singleDonner, setSingleDonner] =useState({
    name:"" , email:"" , phone:"" , village:"", district:"", upozela:"", age:"", date:"", blood:"" , gender:""
  });

  const singleData = async () => {
    try {
       const result = await setDoc(doc(firebaseDb, "registerCollection", singleDonner?.id),  singleDonner)
      toast.success("Successfully order updated");
      
      getData();
    } catch (error) {
      toast.error("something was wrong")
    }
  }


  const handleEdit =(donner) => {
    setSingleDonner(donner)
    setOpen(true)
  }
 

  
  async function getData() {
    try {
      const donners = await getDocs(
        collection(firebaseDb, "registerCollection")
      );
      const donnerArray = [];
      donners.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        donnerArray.push(obj);
      });
      setDonners(donnerArray);
  
    } catch (error) {}
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="blood-donner">
        <div className="margin-container">
          <div className="blood-donner-header-area">
            <div className="header-text">
              <h1>
                “কারুর জীবন রক্ষা করতে আপনাকে ডাক্তার হতে হবে না: কেবল{" "}
                <span className="blood">রক্তদান</span> করলেও হবে!”
              </h1>
              <h2>
              তরঙ্গ <span className="blood">রক্তসেবা</span> ফাউন্ডেশনে যারা
                রেজিষ্ট্রেশন করেছে তাদের ইনফরমেশন নিচে দেওয়া হয়েছে। এখানে
                ফিল্টারিং অপশন গুলোতে ক্লিক করে আপনার প্রয়োজনীয় ডোনারের ইনফরমেশন
                দেখতে পারবেন। চাইলে আপনি ও আমাদের ব্লাড ফাউন্ডেশন রেজিষ্ট্রেশন
                করতে পারেন ।{" "}
              </h2>
              <h4>
                আপনি যদি <span className="blood">রক্তদান</span> কর্মসূচিতে
                অংশগ্রহণ করতে চান তাহলে নিচের বাটনে ক্লিক করে রেজিষ্ট্রেশন করে
                ফেলুন এখনই।
              </h4>
              <button>শুরু করুন</button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="filter-area">
        <div className="margin-container">
          <h2>ফিল্টারিং করে প্রয়োজনীয় ব্লাড ডোনার খুজুন</h2>
          <div className="filter-container">
            <div className="filter-box">
              <h4 className="py-3" style={{color: 'black' , fontWeight:'600'}} >Find with typing Name</h4>
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name=""
                placeholder="Search by Name"
                id=""
              />
            </div>
            <div className="filter-box">
            <h4 className="py-3" style={{color: 'black' , fontWeight:'600'}} >Filter by Blood group</h4>
              <button onClick={() => setBloodFilter("")}>All</button>
              <button id="a+" value="a+" onClick={() => setBloodFilter("a+")}>
                A +
              </button>
              <button id="a-" value="a-" onClick={() => setBloodFilter("a-")}>
                A -
              </button>
              <button id="b+" value="b+" onClick={() => setBloodFilter("b+")}>
                B +
              </button>
              <button id="b-" value="b-" onClick={() => setBloodFilter("b-")}>
                B -
              </button>
              <button id="o+" value="o+" onClick={() => setBloodFilter("o+")}>
                O +
              </button>
              <button id="o-" value="o-" onClick={() => setBloodFilter("o-")}>
                O -
              </button>
              <button
                id="ab+"
                value="ab+"
                onClick={() => setBloodFilter("ab+")}
              >
                AB +
              </button>
              <button
                id="ab-"
                value="ab-"
                onClick={() => setBloodFilter("ab-")}
              >
                AB -
              </button>
            </div>

            <div className="filter-box">
            <h4 className="py-3" style={{color: 'black' , fontWeight:'600'}} >Filter by Gender</h4>
              <button
                id="male"
                value="male"
                onClick={() => setGenderFilter("")}
              >
                All
              </button>
              <button
                id="male"
                value="male"
                onClick={() => setGenderFilter("male")}
              >
                Male
              </button>
              <button
                id="female"
                value="female"
                onClick={() => setGenderFilter("female")}
              >
                Female
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="margin-container">

        
        <div className="donner-list">
          {donners
            .filter((obj) =>
              obj.registerData?.name.toLowerCase().includes(search)
            )
            .filter((obj) =>
              obj.registerData?.blood.toLowerCase().includes(bloodFilter)
            )
            .filter((obj) =>
              obj.registerData?.gender.toLowerCase().includes(genderFilter)
            )
            .map((donner) => {
              return (
                <div className="donner-box">
                  {donner.registerData.gender === "male" ? (
                    <img src={manAvatar} alt="" />
                  ) : (
                    <img src={WomenAvatar} alt="" />
                  )}
                  <div className="text-content">
                    <h5>
                      <span>Name : </span> {donner?.registerData?.name}
                    </h5>
                    <p>
                      <span>
                        <span className="blood">Blood</span> Group :
                      </span>
                      {donner?.registerData?.blood}
                    </p>
                    <p>
                      <span>Mobile Number : </span>{" "}
                      {donner?.registerData?.phone}
                    </p>
                    <h6>
                  
                      <span>Gmail : </span> {donner?.registerData?.email}
                    </h6>
                    <button onClick={() => handleEdit(donner?.registerData)}>view details</button>
                  </div>
                </div>
              
              );
            })}
        </div>
      </div>
            
      {/* mui */}

      <div>
        <Dialog
        className="modal-pop-up"
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <h1>
              The full details of the <span className="blood">blood </span> donner.
            </h1>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <div className="flex-items-input"><p  className="mr-2">Name </p>
            <input
              value={singleDonner.name}
               onChange={(e) => setSingleDonner({...singleDonner , name : e.target.value})}
                id="name"
                readOnly
                name="name"
                type="text"
                placeholder="First name"
                className="form-control"
              />
            </div>
            <div className="flex-items-input"><p className="mr-2">Email</p>
            <input
              value={singleDonner.email}
               onChange={(e) => setSingleDonner({...singleDonner , email : e.target.value})}
                id="name"
                readOnly
                name="email"
                type="text"
                placeholder="First name"
                className="form-control"
              />
            </div>
            <div className="flex-items-input"><p className="mr-2">Phone </p>
            <input
              value={singleDonner.phone}
               onChange={(e) => setSingleDonner({...singleDonner , phone : e.target.value})}
                id="name"
                readOnly
               
                placeholder="First name"
                className="form-control"
              />
            </div>
            <div className="flex-items-input"><p className="mr-2">Age </p>
            <input
              value={singleDonner.age}
               onChange={(e) => setSingleDonner({...singleDonner , age : e.target.value})}
                id="name"
                readOnly
               
                placeholder="First name"
                className="form-control"
              />
            </div>
            <div className="flex-items-input"><p className="mr-2">Gender </p>
            <input
              value={singleDonner.gender}
               onChange={(e) => setSingleDonner({...singleDonner , gender : e.target.value})}
                id="name"
                readOnly
               
                placeholder="First name"
                className="form-control"
              />
            </div>
            <div className="flex-items-input"><p className="mr-2">Blood </p>
            <input
              value={singleDonner.blood}
               onChange={(e) => setSingleDonner({...singleDonner , blood : e.target.value})}
                id="name"
                readOnly
               
                placeholder="First name"
                className="form-control"
              />
            </div>
            <div className="flex-items-input"><p className="mr-2">Village </p>
            <input
              value={singleDonner.village}
               onChange={(e) => setSingleDonner({...singleDonner , village : e.target.value})}
                id="name"
                readOnly
               
                placeholder="First name"
                className="form-control"
              />
            </div>
            <div className="flex-items-input"><p className="mr-2">Upozela </p>
            <input
              value={singleDonner.upozela}
               onChange={(e) => setSingleDonner({...singleDonner , upozela : e.target.value})}
                id="name"
                readOnly
               
                placeholder="First name"
                className="form-control"
              />
            </div>
            <div className="flex-items-input"><p className="mr-2">District </p>
            <input
              value={singleDonner.district}
               onChange={(e) => setSingleDonner({...singleDonner , district : e.target.value})}
                id="name"
                readOnly
               
                placeholder="First name"
                className="form-control"
              />
            </div>
            <div className="flex-items-input"><p className="mr-2">lastdonate </p>
            <input
              value={singleDonner.date}
               onChange={(e) => setSingleDonner({...singleDonner , date : e.target.value})}
                id="name"
                readOnly
               
                placeholder="First name"
                className="form-control"
              />
            </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>

      <Footer />
    </>
  );
};

export default BloodDonner;
