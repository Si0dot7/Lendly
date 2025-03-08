
import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "./store/UserSlice";


import Home from "./pages/Home";
import Profile from "./pages/ProfileFolder/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Loading from "./pages/Loading";
import Feed from "./pages/Feed";
import Library from "./pages/Library";
import ItemDetails from "./pages/ItemDetails";
import Help from "./pages/helpFolder/Help";
import HelpPage1 from "./pages/helpFolder/HelpPage1";
import Contact from "./pages/helpFolder/Contact";
import Report from "./pages/helpFolder/Report";
import Default from "./pages/Default";
import ProfileReport from "./pages/ProfileFolder/ProfileReport";
import Navbar from "./components/Navbar";
import User from "./pages/user/User";

function App() {
  const dispatch = useDispatch();
  const idToken = localStorage.getItem("token");

  // Fetch current user from API
  const currentUser = async (authtoken) => {
    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URI+'/currentUser',
        {},
        { headers: { authtoken } }
      );

      console.log("currentUser response:", res.data); 

      return res?.data || null; 
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  };

  
  useEffect(() => {
    const fetchAndDispatchUser = async () => {
      if (!idToken) {
        console.log("No token in localStorage");
        return;
      }
      const userData = await currentUser(idToken);
      if (userData) {
        dispatch(
          login({
            email: userData.email,
            studentID: userData.studentID,
            fullName: userData.fullName,
            faculty: userData.faculty,
            token: idToken,
          })
        );
      }
    };

    fetchAndDispatchUser();
  }, [dispatch, idToken]);

  return (
    <div className="min-h-screen">
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Default />} />
        <Route path="/help" element={<Help />} />
        <Route path="/help-page-1" element={<HelpPage1 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/navbar" element={<Navbar />} />

        
        {/* Private Routes (Require Authentication) */}
        <Route path="/home" element={
          <User>
            <Home />
          </User>
        } />
        <Route path="/report" element={
          <User>
            <Report />
          </User>
        } />
        <Route path="/profile" element={
          <User>
            <Profile />
          </User>
        } />
        <Route path="/profile-report" element={
          <User>
            <ProfileReport />
          </User>
        } />
        
        <Route path="/feed" element={
          <User>
            <Feed />
          </User>
        } />
        <Route path="/library" element={
          <User>
            <Library />
          </User>
        } />
        <Route path="/item/:id" element={
          <User>
            <ItemDetails />
          </User>
        } />
      </Routes>
    </div>
  );
}

export default App;