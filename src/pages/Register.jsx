import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    studentID: "",
    fullName: "",
    faculty: "",

  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value.confirmPassword !== value.password) {
      alert("Passwords do not match!");
    } else {
      try {
        const register = await axios.post(
          import.meta.env.VITE_API_URI + "/register",
          value
        );
        Swal.fire({
                title: "Successfully!!!",
                text: "Add Product Successfully",
                icon: "success",
              });    
        navigate("/login");
      } catch (error) {
        console.log("register error: " + error);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen items-center pt-4">
      <div className="flex justify-center items-center gap-4">
        <img src="/lendlylogo.svg" alt="Lendly logo" />
        <h1 className="font-[Inter] font-semibold text-4xl sm:text-[38px]">
          Lendly
        </h1>
      </div>

      <div className="mt-6 mb-6 font-[Inter]">กรุณาลงทะเบียน</div>
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

      <div>
          <label
            htmlFor="studentID"
            className="block text-sm font-medium font-[Inter] text-gray-700 py-1"
          >
            Student ID
          </label>
          <input
            type="text"
            id="studentID"
            placeholder="Student ID"
            className="mt-2 block w-full px-4 py-2 border  rounded-md focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
            name="studentID"
          />
        </div>

        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter Full Name"
            className="mt-2 block w-full px-4 py-2 border  rounded-md focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
            name="fullName"
          />
        </div>

        <div>
          <label
            htmlFor="faculty"
            className="block text-sm font-medium text-gray-700"
          >
            Faculty
          </label>
          <select
            id="faculty"
            className="mt-2 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
            name="faculty"
          >
            {/* ใส่ให้แหน่คับ */}
            <option value="" disabled>
              Select your faculty
            </option>
            <option value="Architecture">Architecture, Art and Design</option>
            <option value="AgriTech">Agricultural and Technology</option>
            <option value="Business">Business</option>
            <option value="Dentistry">Dentistry</option>
            <option value="Engineering">Engineering</option>
            <option value="FoodIndus">Food Industry</option>
            <option value="InformTech">Information Technology</option>
            <option value="IndusEdu">
              Industrial Education and Technology
            </option>
            <option value="IntInnTech">Integrated Innovative Technology</option>
            <option value="LibArt">Liberal Arts</option>
            <option value="Medicine">Medicine</option>
            <option value="Nursing">Nursing</option>
            <option value="Science">Science</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium font-[Inter] text-gray-700 py-1"
          >
            Email
          </label>
          <div className="relative">
            <input
              className="mt-2 block w-full px-4 pl-10 py-2 border  rounded-md focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Input your e-mail"
              required
              name="email"
              onChange={handleChange}
            />
            <img
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
              src="public/mailicon.svg"
              alt=""
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium font-[Inter] text-gray-700 py-1"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="mt-2 block w-full px-4 pl-10 py-2 border  rounded-md focus:ring-2 focus:ring-blue-500"
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Input your password"
              required
              name="password"
              onChange={handleChange}
            />
            <img
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
              src="/lockicon.svg"
              alt="Lock Icon"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              {passwordVisible ? (
                <img src="/closeeye.svg" alt="Hide Password" />
              ) : (
                <img src="/eye.svg" alt="Show Password" />
              )}
            </button>
          </div>
        </div>

        <div>
          <label
            htmlFor="conPass"
            className="block text-sm font-medium font-[Inter] text-gray-700 py-1"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              className="mt-2 block w-full px-4 pl-10 py-2 border  rounded-md focus:ring-2 focus:ring-blue-500"
              type={passwordVisible ? "text" : "password"}
              id="conPass"
              placeholder="Confirm password"
              required
              name="confirmPassword"
              onChange={handleChange}
            />
            <img
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
              src="/lockicon.svg"
              alt="Lock Icon"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              {passwordVisible ? (
                <img src="/closeeye.svg" alt="Hide Password" />
              ) : (
                <img src="/eye.svg" alt="Show Password" />
              )}
            </button>
          </div>
        </div>      

        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
        >
          Submit
        </button>
      </form>

      <div className="mt-4 p-2 text-black text-sm items-center">
        Already have an account?
        <a href="/#/login" className="text-blue-500 cursor-pointer">
          Login here!
        </a>
      </div>
    </div>
  );
};

export default Register;
