import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BloodResiger from "./components/Blood-Resiger";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./context/AuthProvider";
import Back from "./extra/BacktoTop";
import ScrollToTop from "./extra/ScrollToTop";
import About from "./pages/About.";
import Admin from "./pages/Admin";
import BloodDonner from "./pages/BloodDoner";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import NewsFeed from "./pages/NewsFeed";
import Man from "./pages/Persional";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          
          <ScrollToTop/>
          <ToastContainer />
          <Back/>
          <Routes>
            <Route path="/" element={<Home />}>
              {" "}
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blood-register" element={<BloodResiger/>} />
            <Route path="/blood-donner" element={<BloodDonner/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/newsfeed" element={<NewsFeed/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/man" element={<Man/>} />
            
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
