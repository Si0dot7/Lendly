import { useState } from "react";
import Navbar from "../components/Navbar";
import React from "react";

function Library() {
  const [currentPage, setCurrentPage] = useState("saved"); // default to "saved"

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
              className={`px-4 py-2 rounded-lg ${currentPage === "saved" ? "bg-blue-500 text-white" : "bg-white"
                } hover:bg-blue-200`}
            >
              Saved List
            </button>
            <button
              onClick={() => handlePageChange("borrow")}
              className={`px-4 py-2 rounded-lg ${currentPage === "borrow" ? "bg-blue-500 text-white" : "bg-white"
                } hover:bg-blue-200`}
            >
              On Borrow
            </button>
            <button
              onClick={() => handlePageChange("returned")}
              className={`px-4 py-2 rounded-lg ${currentPage === "returned" ? "bg-blue-500 text-white" : "bg-white"
                } hover:bg-blue-200`}
            >
              Returned
            </button>
            <button
              onClick={() => handlePageChange("lent")}
              className={`px-4 py-2 rounded-lg ${currentPage === "lent" ? "bg-blue-500 text-white" : "bg-white"
                } hover:bg-blue-200`}
            >
              My Lent
            </button>
          </div>

          {/* Content Area */}
          <div className="mt-4 w-full max-w-md">
            {currentPage === "saved" && <Saved />}
            {currentPage === "borrow" && <OnBorrow />}
            {currentPage === "returned" && <Returned />}
            {currentPage === "lent" && <MyLent />}
          </div>
          
        </div>
      </div>
      <Navbar />
    </div>
  );
}

/* Individual Components */
function Saved() {
  return (
    <div className="flex flex-col items-center">
      <h1>Saved List</h1>
      <p>Here are the items you've saved for later.</p>
      <img src="/Nologo.svg" alt="" />
    </div>
  );
}

function OnBorrow() {
  return (
    <div>
      <h1>On Borrow</h1>
      <p>📖 These are the items you borrowed.</p>
    </div>
  );
}

function Returned() {
  return (
    <div>
      <h1>Returned</h1>
      <p>✅ These are the items you returned.</p>
    </div>
  );
}

function MyLent() {
  return (
    <div>
      <h1>My Lent</h1>
      <p>📤 These are the items you lent out.</p>
    </div>
  );
}

export default Library;
