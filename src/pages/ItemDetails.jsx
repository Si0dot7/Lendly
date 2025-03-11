import { useLocation, useParams } from "react-router-dom";
import React from "react";

function ItemDetails() {
  const location = useLocation();
  const { id } = useParams();

  const { title, description, file, lenderName, status, price } =
    location.state || {};

  const statusIndicator =
    status === "Available" ? (
      <span className="text-green-500">● Available</span>
    ) : (
      <span className="text-red-500">● On Borrow</span>
    );

  return (
    <main className="flex justify-center">
      <div className="p-4 lg:w-2/5">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="bg-gray-300 text-white py-2 px-4 rounded-lg mb-4 hover:bg-gray-500 cursor-pointer"
        >
          <img src="/leftarrow.svg" alt="backarrow" />
        </button>

        {/* Item Details */}
        <div className="flex flex-col gap-4 items-center">
          <img
            className="w-48 h-48 object-cover rounded-lg p-4"
            src={file || "/defaultimage.png"} // Fallback image if no imageSrc
            alt="Item Image"
          />
          <div className="flex flex-col gap-6 mb-4 justify-center items-center">
            <div>
              <div className="flex justify-between">
                <h1 className="text-xl font-bold mb-4 items-center">{title}</h1>
                <div className="flex mx-4">
                  <h1
                    className="text-xl font-bold mb-4 items-center"
                    id="price"
                  >
                    {price}
                  </h1>
                  <h1 className="text-xl font-bold mb-4 items-center">
                    &nbsp;Baht <span className="text-gray-500">per day</span>
                  </h1>
                </div>
              </div>

              {/* Status Indicator */}
              <p className="text-sm text-gray-500">{statusIndicator}</p>

              <p className="text-gray-700 mb-4">{description}</p>
              <p className="text-gray-700 mb-4">Location: {lenderName}</p>
            </div>
          </div>

          {/* Borrow Item Button */}
          <div className="flex gap-4">
            <button>
              <img
                src="/bookmark.svg"
                alt=""
                className="p-4 border rounded-lg cursor-pointer"
              />
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer">
              Borrow Item
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ItemDetails;
