import { Link } from "react-router-dom";
import about from "../images/abouticon.png";
import account from "../images/account.png";
import donar from "../images/donar.png";
import faq from "../images/faq.png";
import info from "../images/info.png";
import aim from "../images/nibondan.png";
const HomeNibandan = () => {
    return (
        <div className='home-nibandan'>
           <div className="margin-container">
           <div className="home__nibandan-container">
                <div className="left">
                   <Link to="/blood-register">
                   <div className="left-header">
                        <img src={account} alt="" />
                        <h1> <span className="blood">ব্লাড </span> ডোনেশনের জন্য রেজিষ্ট্রেশন  করুন</h1>
                     </div>
                     <h4>
                     রেজিষ্ট্রেশনের সময় প্রয়োজন  হবে
                     </h4>
                     <img src={info} alt="" /></Link>
                 </div>
                <div className="right">
               
                <Link to="/blood-donner">
                    <img src={donar} alt="" />
                    <p> <span className="blood">ব্লাড</span> ডোনার</p>
                </Link>
                <Link to="/about">
                    <img src={about} alt="" />
                    <p>আমাদের সম্পর্কে</p>
                </Link>
                <a href="#">
                    <img src={aim} alt="" />
                    <p>আমাদের লক্ষ্য</p>
                </a>
                <Link to ="/faq">
                    <img src={faq} alt="" />
                    <p>সচারাচর  জিজ্ঞাসা</p>
                </Link>
              
                </div>
            </div></div>
        </div>
    );
};

export default HomeNibandan;