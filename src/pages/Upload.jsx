import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Upload() {
  const authtoken = localStorage.getItem("token");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      title: "",
      description: "",
      price: "",
      image: "",
      mainLocation: "",
      subLocation: "",
      email: "",
    },
  ]);


  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);

      const pushImage = await axios.post(
        import.meta.env.VITE_API_URI + "/upload",
        formData,
        { headers: { authtoken } }
      );

      setData((prevData) => {
        const newData = { ...prevData,
           image: pushImage.data.imageUrl,
           email:localStorage.getItem('email') 
          };

        axios
          .post(import.meta.env.VITE_API_URI + "/product", newData, {
            headers: { authtoken },
          })
          .then((res) => console.log("product data", res.data))
          .catch((err) => console.log("product error", err));
      });
      Swal.fire({
        title: "Successfully!!!",
        text: "Add Product Successfully",
        icon: "success",
      });
      console.log(data);
      
      // await new Promise(resolve => setTimeout(resolve, 1000));
      navigate("/home");
    } catch (error) {
      console.log("submit error", error);
    }
  };

  return (
    <div className="flex flex-col items-center h-screen p-4">
      <div className="flex justify-center items-center gap-4">
        <img src="/lendlylogo.svg" alt="Lendly logo" />
        <h1 className="font-[Inter] font-semibold text-4xl sm:text-[38px]">
          Lendly
        </h1>
      </div>
      <div className="w-full max-w-md p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Upload Your Product
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              title
            </label>
            <input
              type="text"
              className="mt-2 block w-full px-4 py-2 border  rounded-md  focus:border-2 focus:border-blue-500"
              name="title"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              description
            </label>
            <input
              type="text"
              className="mt-2 block w-full px-4 py-2 border  rounded-md  focus:border-2 focus:border-blue-500"
              name="description"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              picture
            </label>
            <input
              type="file"
              className="mt-2 block w-full px-4 py-2 border  rounded-md  focus:border-2 focus:border-blue-500"
              name="image"
              onChange={handleChangeImage}
              required
              accept="image/*"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              price
            </label>
            <input
              type="text"
              className="mt-2 block w-full px-4 py-2 border  rounded-md  focus:border-2 focus:border-blue-500"
              name="price"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              mainLocation
            </label>
            <select
              className="mt-2 block w-full px-4 py-2 border  rounded-md  focus:border-2 focus:border-blue-500"
              name="mainLocation"
              onChange={handleChange}
              required
            >
              {/* ใส่ให้แหน่คับ */}
              <option value="" disabled>
                Select your mainLocation
              </option>
              <option value="โรงอาหาร A">โรงอาหาร A</option>
              <option value="โรงอาหาร C">โรงอาหาร C</option>
              <option value="โรงอาหาร J">โรงอาหาร J</option>
              <option value="โรงอาหารพระเทพ">โรงอาหารพระเทพ</option>
              <option value="ตึก 12 ชั้น">ตึก 12 ชั้น</option>
              <option value="ห้องสมุด">ห้องสมุด</option>
              <option value="ตึกคณะบริหาร">ตึกคณะบริหาร</option>
              <option value="ตึกภาคอุตสาหการ">ตึกภาคอุตสาหการ</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              subLocation
            </label>
            <select
              className="mt-2 block w-full px-4 py-2 border  rounded-md  focus:border-2 focus:border-blue-500"
              name="subLocation"
              onChange={handleChange}
              required
            >
              {/* ใส่ให้แหน่คับ */}
              <option value="" disabled>
                Select your subLocation
              </option>
              <option value="โรงอาหาร A">โรงอาหาร A</option>
              <option value="โรงอาหาร C">โรงอาหาร C</option>
              <option value="โรงอาหาร J">โรงอาหาร J</option>
              <option value="โรงอาหารพระเทพ">โรงอาหารพระเทพ</option>
              <option value="ตึก 12 ชั้น">ตึก 12 ชั้น</option>
              <option value="ห้องสมุด">ห้องสมุด</option>
              <option value="ตึกคณะบริหาร">ตึกคณะบริหาร</option>
              <option value="ตึกภาคอุตสาหการ">ตึกภาคอุตสาหการ</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Upload;
