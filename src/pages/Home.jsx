import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../components/Card";
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';


function Home() {
  const [data, setData] = useState([]);
  const authtoken = localStorage.getItem("token");

  const loadData = async () => {
    try {
      const getData = await axios.get(import.meta.env.VITE_API_URI + "/product", {
        headers: { authtoken },
      });
      setData(getData.data);
      console.log(getData.data);
      
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

 
  
  

  return (
    <div className="flex flex-col min-h-screen p-4">
      {/* Content Container */}
      <div className="flex-grow flex flex-col items-center">
        {/* Header Section */}
        <div className="flex items-center justify-center gap-4 mb-6 sticky">
          <img src="/lendlylogo.svg" alt="Lendly Logo" className="w-12" />
          <form>
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
          <button className="p-2">
            <img src="/bellicon.svg" alt="Notification" />
          </button>
        </div>

        {/* Hero Section */}
        <div className="flex">
          <div className="flex flex-col text-center mb-8">
            <div className="flex items-center gap-4 mb-4">
              <img src="/lendlylogo.svg" alt="Lendly Logo" className="w-6" />
              <h1 className="text-2xl font-bold">lendly</h1>
            </div>
            <p className="text-lg text-gray-600">Lend it. Borrow it. <br /> Love it.</p>
          </div>
          <div className="flex items-center justify-center mb-8">
            <img src="/lendborrowlogo.svg" alt="Lend and Borrow" className="w-30" />
          </div>
        </div>

        {/* Recommended Section */}
        <div className="w-full">
          <div className="flex mx-auto justify-between">
            <h1 className="text-xl font-semibold mb-4">Recommended for You</h1>
            <p>see all</p>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="w-full"
          >
            {data.length > 0 ? (
              data.map((card) => (
                <SwiperSlide key={card._id}>
                  <div className="relative w-full aspect-w-1 aspect-h-1">
                    <Card
                      id={card._id}
                      title={card.title}
                      description={card.description}
                      file={import.meta.env.VITE_API_URI + "/uploads/" + card.file} // Ensure correct file path
                      genre={card.genre}
                      lenderName={card.lenderName}
                      status={card.status}
                      price={card.price}
                    />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p className="text-center w-full text-gray-500">Loading items...</p>
            )}
          </Swiper>
        </div>

       
      </div>

      {/* Navbar stays at the bottom */}
       <Navbar /> 
    </div>
  );
}

export default Home;
