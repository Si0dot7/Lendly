import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import React from "react";
import MyLent from "../components/MyLent";
import OnBorrow from "../components/OnBorrow";
import Swal from "sweetalert2";
import Favorite from "../components/Favorite";


function Library() {
  const [currentPage, setCurrentPage] = useState("fav"); // default to "saved"
  const authtoken = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const fetchData = async () => {
    const getData = await axios.get(import.meta.env.VITE_API_URI + "/product", {
      headers: { authtoken },
    });
    const filter = getData.data.filter((item) => item.email === email);
    const filterBorrow = filter.filter((item) => item.status === "borrowed");

    if (filterBorrow.length > 0) {
      Swal.fire("Your item has been borrowed.");
      return;
    } else {
      return;
    }

  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-4 max-h-screen">
      <div className="flex-grow flex flex-col items-center">
        <div className="p-4">
          <h1 className="text-2xl font-[Inter] font-bold">Library</h1>
        </div>
        {/* Navigation Buttons */}
        <div className="flex flex-col items-center p-4">
          <div className="flex justify-between w-full max-w-md bg-gray-100 p-2 rounded-xl shadow-md">
            <button
              onClick={() => handlePageChange("saved")}
              className={`px-4 py-2 rounded-lg ${
                currentPage === "fav" ? "bg-blue-500 text-white" : "bg-white"
              } hover:bg-blue-200`}
            >
              Favorite List
            </button>
            <button
              onClick={() => handlePageChange("borrow")}
              className={`px-4 py-2 rounded-lg ${
                currentPage === "borrow" ? "bg-blue-500 text-white" : "bg-white"
              } hover:bg-blue-200`}
            >
              On Borrow
            </button>
            <button
              onClick={() => handlePageChange("returned")}
              className={`px-4 py-2 rounded-lg ${
                currentPage === "returned"
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              } hover:bg-blue-200`}
            >
              Returned
            </button>
            <button
              onClick={() => handlePageChange("lent")}
              className={`px-4 py-2 rounded-lg ${
                currentPage === "lent" ? "bg-blue-500 text-white" : "bg-white"
              } hover:bg-blue-200`}
            >
              My Lent
            </button>
          </div>

          {/* Content Area */}
          <div className="mt-4 w-full max-w-md">
            {currentPage === "fav" && <Favorite/>}
            {currentPage === "borrow" && <OnBorrow/> }
            {currentPage === "returned" && <Returned />}
            {currentPage === "lent" && <MyLent />}
          </div>
        </div>
      </div>
      <Navbar/>
    </div>
  );
}

/* Individual Components */
// function Favorite() {
//   return (
//     <div className="flex flex-col items-center">
//       <h1>Favorite List</h1>
//       <p>Here are the items you've Favorite for later.</p>
//       <img src="/Nologo.svg" alt="" />
//     </div>
//   );
// }

// function OnBorrow() {
//   return (
//     <div>
//       <h1>On Borrow</h1>
//       <p>📖 These are the items you borrowed.</p>
//     </div>
//   );
// }

function Returned() {
  return (
    <div>
      <h1>Returned</h1>
      <p>✅ These are the items you returned.</p>
    </div>
  );
}

// async function MyLent() {
//   const [haveToken, setHaveToken] = useState(true);
//   const [data, setData] = useState([]);
//   try {
//     const getData = await axios.get(import.meta.env.VITE_API_URI + "/product", {
//       headers: { authtoken },
//     });
//     if (getData.data.token == localStorage.getItem("token")) {
//       setData(getData.data);
//       console.log("success filter data", getData.data);
//     }
//     setHaveToken(true)
//   } catch (error) {
//     console.log('error from filter data',error);
    
//   }
//   return (
//     <div>
//       {haveToken ? (
//         <div className="relative w-full aspect-w-1 aspect-h-1">
//           <Card
//             id={data._id}
//             title={data.title}
//             description={data.description}
//             file={data.image}
//             lenderName={data.mainLocation}
//             status={data.subLocation}
//             price={data.price}
//           />
//         </div>
//       ) : (
//         <p>No Product Upload</p>
//       )}
//     </div>
//   );
// }

export default Library;
