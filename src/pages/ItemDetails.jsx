import { useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function ItemDetails() {
  const location = useLocation();
  const { _id } = useParams();
  const [haveBorrow, setHaveBorrow] = useState([]);
  const authtoken = localStorage.getItem("token");
  const currentEmail = localStorage.getItem('email')
  const [buttonState, setButtonState] = useState("");
  const navigate = useNavigate();

  const {
    title,
    description,
    image,
    mainLocation,
    subLocation,
    price,
    email,
    borrowEmail,
    status,
    favorite,
    favoriteEmail,
  } = location.state || {};

  const [buttonFav, setButtonFav] = useState(favorite);

  const [favEmail,setFavEmail] = useState(favoriteEmail)

  const handleFavorite = () => {
    setButtonFav((prev) =>{
      const newFav = !prev
      const newFavEmail = newFav ? currentEmail : null
      setFavEmail(newFavEmail)
      saveFavorite(newFav,newFavEmail)
      return newFav
    })
    
  };
  const saveFavorite=async(newFav,newFavEmail)=>{
    try {
      const favState = {
        ...location.state,
        favorite:newFav,
        favoriteEmail:newFavEmail,
      };

      const saveFav = await axios.put(
        import.meta.env.VITE_API_URI + "/product/updateborrow",
        favState,
        {
          headers: { authtoken },
        }
      );
      window.history.back()
      
    } catch (error) {
      console.log(error);
      
    }

  }

  const fetchData = async () => {
    try {
      const borrowData = await axios.get(
        import.meta.env.VITE_API_URI + `/product/borrow`,
        {
          params: { email, price, image, title },
          headers: { authtoken },
        }
      );
      setHaveBorrow(borrowData.data);
      setButtonState(status);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const saveBorrow = async () => {
    try {
      const borrowEmail = localStorage.getItem("email");
      const newData = {
        ...location.state,
        borrowEmail: borrowEmail,
        status: "borrowed",
      };

      Swal.fire({
        title: "Once borrowed, it cannot be canceled.",
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Borrow",
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire("Borrow!", "", "success");
          const saveData = await axios.put(
            import.meta.env.VITE_API_URI + "/product/updateborrow",
            newData,
            {
              headers: { authtoken },
            }
          );
          console.log("saveData", saveData);
        }
        navigate("/home");
      });
    } catch (error) {
      console.log(error);
    }
  };

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
            src={image || "/defaultimage.png"}
            alt="Item Image"
          />
          <div className="flex flex-col gap-6 mb-4 justify-center items-center">
            <div>
              <div className="flex justify-between">
                <h1 className="text-xl font-bold mb-4 items-center">{title}</h1>
                <div className="flex mx-4">
                  <h1
                    className="text-green-700 text-xl font-bold mb-4 items-center"
                    id="price"
                  >
                    {price} <span className="text-gray-700">Baht per day</span>
                  </h1>
                  {/* <h1 className="text-xl font-bold mb-4 items-center">
                    
                  </h1> */}
                </div>
              </div>

              {/* Status Indicator */}
              {/* <p className="text-sm text-gray-500">{statusIndicator}</p> */}

              <p className="text-gray-700 mb-4">{description}</p>
              <p className="text-gray-700 mb-4">Location: {mainLocation}</p>
            </div>
          </div>

          {/* Borrow Item Button */}
          <div className="flex gap-4">
            <button onClick={handleFavorite}>
              {buttonFav ? (
                <img
                  src="/bookmark.svg"
                  alt=""
                  className="p-4 bg-yellow-500 border rounded-lg cursor-pointer"
                />
              ) : (
                <img
                  src="/bookmark.svg"
                  alt=""
                  className="p-4 border rounded-lg cursor-pointer"
                />
              )}
            </button>
            {buttonState === "borrowed" ? (
              <button className="bg-gray-500 text-white py-2 px-4 rounded-lg cursor-pointer">
                On Borrow
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer"
                onClick={saveBorrow}
              >
                Borrow Item
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ItemDetails;
