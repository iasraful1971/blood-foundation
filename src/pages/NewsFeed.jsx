import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import firebaseDb from "../firebase/firestore";
import useAuth from "../hooks/useAuth";
import logo from "../images/mainmanavatar.png";
const NewsFeed = () => {
  const { user } = useAuth();
  

  const [postData, setPostData] = useState("");
  const date = new Date().toDateString();
  const email  = user?.email;


  const handlePost = async () => {
    const post = {
      postData,
    };
    const postDataInfo = {
      post,
      date,
      email
    };
    
  if(!postData){
      toast.error("write something first")
  }else{
    try {
        const result = await addDoc(
          collection(firebaseDb, "postCollection"),
          postDataInfo
        );
        setPostData("")
        toast.success("Your post post successfully addedd");
      } catch (error) {
        toast.error("Something is wrong ");
      }
    }
  }

// get data 
const [posts, setPosts] = useState([]);
 

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
    setPosts(postArray);
   
  } catch (error) {}
}


useEffect(() => {
  getData();
}, [posts]);

  


  return (
    <>
      <div className="newsfeed-whole-container">
        <div className="menu-bar">
          <div className="menu-box">
            <Link to="/">
              {" "}
              <h1>
              তরঙ্গ
 <span className="blood">রক্তসেবা
 </span>
              </h1>
            </Link>
          </div>
          <div className="menu-box flex">
            <Link to="/">
              {" "}
              <ArrowBackIosNewIcon /> হোমে ফিরে যান
            </Link>
          </div>
          <div className="menu-box">
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="post-box">
          <div className="post-header">
            <h2>Create a post</h2>
          </div>
          <div className="border"></div>
          <div className="post-user">
            {user.email ? (
              <img className="rounded-image" src={user.photoURL} alt="" />
            ) : (
              <img className="rounded-image" src={logo} alt="" />
            )}
            {user.email && (
              <h3>
                {user.displayName}
                {!user?.displayName &&
                  user.email.substring(0, user.email.length - 10)}
              </h3>
            )}
          </div>
          <div className="post-input">
            <textarea
              value={postData}
              onChange={(e) => setPostData(e.target.value)}
              placeholder=" Whats on your Mind ?  "
            ></textarea>
          </div>
          <div className="post-button">
            <button onClick={handlePost}>Post </button>
          </div>
        </div>

                  {
                    posts.map((post) => {
                      return     <div className="public-post">
                      <div className="public-post-header">
                        <div className="img-area-of-header">
                          <img src={logo} alt="" />
                          <h4>{post?.email}</h4>
                        </div>
                        <div>
                          <p>{post?.date}</p>
                        </div>
                      </div>
                      
                      <div className="public-post-content">
                        <p>
                        {post?.post?.postData}
                        </p>
                      </div>
                    </div>
                    })
                  }


      </div>
    </>
  );
};

export default NewsFeed;
