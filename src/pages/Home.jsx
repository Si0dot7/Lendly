import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../components/Card";
import Navbar from '../components/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {Autoplay} from 'swiper/modules'


function Home() {
  const [data, setData] = useState([]);
  const authtoken = localStorage.getItem("token");

  const loadData = async () => {
    try {
      const getData = await axios.get(import.meta.env.VITE_API_URI + "/product", {
        headers: { authtoken },
      });
      setData(getData.data);
      console.log('data',getData.data);
      
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
    
  }, []);

 
  
  

  return (
    <div className="flex flex-col min-h-screen p-4 max-h-screen">
      <div className="flex-grow flex flex-col items-center">
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
        <div className="lg:w-1/4 w-full sm:w-1/2">
          <div className="flex mx-auto justify-between">
            <h1 className="text-xl font-semibold mb-4">Recommended for You</h1>
            <button className="bg-blue-500 text-white w-12 h-9 rounded-lg cursor-pointer" >
              <Link to='/upload'>
              Add
              </Link>
            </button>
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            loop={data.length>=2}
            autoplay={{ delay: 2000 }}
            modules={[Autoplay]}
            className="w-full h-1/2"
          >
            {data.length > 0 ? (
              data.map((card) => (
                <SwiperSlide key={card._id}>
                  <div className="relative w-full aspect-w-1 aspect-h-1">
                    <Card
                      id={card._id}
                      title={card.title}
                      description={card.description}
                      image={card.image} 
                      mainLocation={card.mainLocation}
                      subLocation={card.subLocation}
                      price={card.price}
                      email={card.email}
                      borrowEmail={card.borrowEmail}
                      status={card.status}
                      favorite={card.favorite}
                      favoriteEmail={card.favoriteEmail}
                      clickable={true}
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
