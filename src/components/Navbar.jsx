import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Navbar() {
  const location = useLocation();
  const [activePage, setActivePage] = useState("");
  const [statusBorrow, setStatusBorrow] = useState(false);
  const authtoken = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const fetchData = async () => {
    const getData = await axios.get(import.meta.env.VITE_API_URI + "/product", {
      headers: { authtoken },
    });
    const filter = getData.data.filter((item) => item.email === email);
    const filterBorrow = filter.filter((item) => item.status === "borrowed");

    if (filterBorrow.length > 0) {
      setStatusBorrow(true);
      return;
    } else {
      setStatusBorrow(false);
      return;
    }
  };

  // Update the active page when the location changes
  useEffect(() => {
    fetchData();
    setActivePage(location.pathname);
    
  }, [location]);

  return (
    <nav className="navbar sticky bottom-0 w-full bg-white py-4 z-50">
      <div className="navbar-container flex items-center mx-auto justify-center gap-4">
        <Link
          to="/home"
          className={`navbar-logo ${
            activePage === "/home" ? "bg-blue-500" : ""
          }`}
        >
          <span className="flex flex-col items-center justify-center space-y-2 w-20 h-24">
            <img src="/homesicon.svg" alt="" className="w-8 h-8" />
            <h1 className="text-sm">Home</h1>
          </span>
        </Link>
        <Link
          to="/library"
          className={`navbar-logo ${
            activePage === "/feed" ? "bg-blue-500" : ""
          }`}
        >
          <span className="flex flex-col items-center justify-center space-y-2 w-20 h-24">
            <img src="/feedicon.svg" alt="" className="w-8 h-8" />
            <h1 className="text-sm">Chat</h1>
          </span>
        </Link>
        <Link
          to="/library"
          className={`navbar-logo ${
            activePage === "/library" ? "bg-blue-500" : ""
          }`}
        >
          {statusBorrow ? (
            <span className="flex flex-col items-center justify-center space-y-2 w-20 h-24 bg-red-500 ">
              <img src="/libraryicon.svg" alt="" className="w-8 h-8 " />
              <h1 className="text-sm text-white ">Library</h1>
            </span>
          ) : (
            <span className="flex flex-col items-center justify-center space-y-2 w-20 h-24">
              <img src="/libraryicon.svg" alt="" className="w-8 h-8 " />
              <h1 className="text-sm ">Library</h1>
            </span>
          )}
        </Link>
        <Link
          to="/profile"
          className={`navbar-logo ${
            activePage === "/profile" ? "bg-blue-500" : ""
          }`}
        >
          <span className="flex flex-col items-center justify-center space-y-2 w-20 h-24">
            <img src="/profileicon.svg" alt="" className="w-8 h-8" />
            <h1 className="text-sm">Profile</h1>
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
