import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import firebaseDb from "../firebase/firestore";
import useAuth from "../hooks/useAuth";
import logo from "../images/logo.png.png";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [mopen, setOpen] = useState(false);
  let Links = [
    { name: "হোম", path: "/" },
    { name: "ব্লাড ডোনার", path: "/blood-donner" },
    { name: "আমাদের সম্পর্কে", path: "/about" },
    { name: "জরুরি  প্রশ্ন", path: "/faq" },
    { name: "যোগাযোগ", path: "/contact" },
  ];

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
}, []);

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 nav-area ">
        <div className="md:flex items-center justify-between main-nav py-1 md:px-10 px-7 ">
          <div className="font-bold text-2xl cursor-pointer flex items-center     text-grey-800">
            <span className="text-3xl mr-2">
              <img
                src={logo}
                className="logo-img"
                style={{ width: "96px", height: "96px", borderRadius: "10px" }}
                alt=""
              />
            </span>

            <p className="logo-text">
            তরঙ্গ
              
    <span className="blood">রক্তসেবা</span>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Link to="/newsfeed" className="absolute right-16 top-4 cursor-pointer md:hidden">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={posts.length} color="secondary">
                  <CircleNotificationsIcon />
                </StyledBadge>
              </IconButton>
            </Link>
            <div
              onClick={() => setOpen(!mopen)}
              className="text-3xl absolute right-6 top-5 cursor-pointer md:hidden"
            >
              {mopen ? <AiOutlineClose /> : <FiMenu />}
            </div>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  left-0 w-full md:w-auto md:pl-0 pl-9 h-screen	md:h-0 transition-all duration-500 ease-in bg-gray-50 md:bg-transparent ${
              mopen ? "right-50 pt-5" : "left-[-800px] "
            }  `}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-4 text-[14px] md:my-0 my-4">
                <Link
                  style={{ color: "#111 !important" }}
                  className="text-grey-800 hover:text-red-400 duration-500"
                  to={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}



          
              {
                !user.email ? <li className="md:ml-4 text-[14px] md:my-0 my-2 ">
                <Link
                  to="/login"
                  style={{ color: "#111 !important" }}
                  className="text-grey-800 hover:text-red-400 duration-500"
                >
                  রেজিষ্ট্রেশন
                </Link>
              </li> : <li className="md:ml-4 text-[14px] md:my-0 my-4 ">
                <Link
                  to="/blood-register"
                  style={{ color: "#111 !important" }}
                  className="text-grey-800 hover:text-red-400 duration-500"
                >
                  রেজিষ্ট্রেশন
                </Link>
              </li>
              }

            {user?.email && (
              <li className="md:ml-4 text-[14px] md:my-0 my-2 hidden-for-mobile">
                <Link
                  to="/newsfeed"
                  style={{ color: "#111 !important" }}
                  className="text-grey-800 hover:text-red-400 duration-500"
                >
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={posts.length} color="secondary">
                      <CircleNotificationsIcon />
                    </StyledBadge>
                  </IconButton>
                </Link>
              </li>
            )}
            {user?.email === "adminkbf@gmail.com" && (
              <li className="md:ml-4 text-[14px] md:my-0 my-2 ">
                <Link
                  to="/admin"
                  style={{ color: "#111 !important" }}
                  className="text-grey-800 hover:text-red-400 duration-500"
                >
                  এডমিন
                </Link>
              </li>
            )}
            <li style={{ color: "#000" }} className="login-button">
              {user?.email ? (
                <Button
                  style={{ color: "#000", fontWeight: "600", fontSize: "14px" }}
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  স্বাগতম {user.displayName}
                  {!user?.displayName &&
                    user.email.substring(0, user.email.length - 10)}
                      <ArrowDropDownIcon/>
                </Button>
               
              ) : (
                <Link to="/login" className="flex items-center text-gray-900">
                  <RiAccountCircleFill className="mr-1" />
                  অ্যাকাউন্ট
                </Link>
              )}

              <Menu
                className="dasboard-menu"
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
               
              <Link to="/man">
              <MenuItem onClick={handleClose}>My account</MenuItem>
              </Link>
                <MenuItem onClick={logOut}>Logout</MenuItem>
              </Menu>
            </li>

            {user.email && (
              <li className="md:ml-4 text-[14px] md:my-0 my-4 md:hidden ">
                <Link
                  to="/man"
                  style={{ color: "#111 !important" }}
                  className="text-grey-800 hover:text-red-400 duration-500"
                >
                  ড্যাশবোর্ড
                </Link>
              </li>
            )}

            {user.email && (
              <li className="md:ml-4 text-[14px] md:my-0 my-4 md:hidden ">
                <Link
                  to="/"
                  style={{ color: "#111 !important" }}
                  className="text-grey-800 hover:text-red-400 duration-500"
                >
                  <button onClick={logOut} className="logout-btn">
                    লগ আউট
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
