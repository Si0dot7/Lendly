import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";
import React from "react";


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginserver = await axios.post(
        import.meta.env.VITE_API_URI + "/login",
        value
      );
      dispatch(
        login({
          email: loginserver.data.payload.user.email,
          token: loginserver.data.token,
        })
      );
      localStorage.setItem("token", loginserver.data.token);
      localStorage.setItem("email", loginserver.data.payload.user.email);
      navigate('/Home')
      
    } catch (error) {
      console.log("login error: " + error);
      alert('Email or Password Invalid')
    }
  };

  return (
    <div className="flex flex-col items-center h-dvh pt-4">
      <div className="flex items-center justify-center gap-4 ">
        <img src="/lendlylogo.svg" alt="Lendly Logo" />
        <h1 className="font-[Inter] font-semibold text-4xl sm:text-[38px]">
          Lendly
        </h1>
      </div>
      <div className="">
        <h1 className="mt-6 mb-6 font-[Inter]">กรุณาเข้าสู่ระบบ</h1>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      </div>
      
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 font-[Inter] py-1"
          >
            Email
          </label>
          <div className="relative">
            <input
              className="border p-2 w-full pl-10 rounded-lg"
              type="email"
              id="email"
              placeholder="email"
              required
              name="email"
              onChange={handleChange}
            />
            <img
              src="/mailicon.svg"
              alt="emailicon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 font-[Inter] py-1"
          >
            Password
          </label>
          <div className="relative">
            <input
              className="border mt-1 p-2 w-full pl-10 rounded-lg"
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Password"
              required
              name="password"
              onChange={handleChange}
            />
            <img
              src="/lockicon.svg"
              alt="Lock Icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
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

        <div className="flex py-4 text-sm items-center justify-center">
          <h1>Forgot your password? </h1>
          <a href="" className="text-blue-300">
            &nbsp;Reset here
          </a>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
          disabled={value.password.length == ""}
        >
          Login
        </button>
      </form>
      {/* This part will be pushed to the bottom */}
      <div className="flex mt-auto py-4 text-sm">
        <h1>Don’t have an account? </h1>
        <a href="/#/register" className="text-blue-500">
          &nbsp;Register here
        </a>
      </div>
    </div>
  );
}
export default Login;
