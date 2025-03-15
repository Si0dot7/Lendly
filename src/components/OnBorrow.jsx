import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from 'react-router-dom';
import QRCodeGenerator from './QRCodeGenerator';

const OnBorrow = () => {
    const borrowEmail = localStorage.getItem('email')
    const [data,setData] = useState([])
    const authtoken = localStorage.getItem('token')
    const navigate = useNavigate()
    const [onClick,setOnClick] = useState(null)

    const fetchData=async()=>{
        const getData = await axios.get(import.meta.env.VITE_API_URI + "/product", {
            headers: { authtoken },
          });
          
          if(getData.data){
            const filter = getData.data.filter(item=>item.borrowEmail == borrowEmail)
            setData(filter)        
          }
    }

    const handleClick = (item) => {
        navigate(`/qrcode/${item._id}`, {
          state: {
            id: item._id,
            title: item.title,
            description: item.description,
            image: item.image,
            price: item.price,
            borrowEmail: item.borrowEmail,
            email: item.email,
          },
        });
      };

    useEffect(()=>{
    fetchData()
    },[])
   
  return (
    <div className="lg:w-full w-full sm:w-1/2 h-[10%] lg:h-[30%] ">
          <div className="relative w-full lg:w-full h-[10%] lg:h-[30%] aspect-w-1 aspect-h-1">
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
              }}
              loop={data.length >= 2}
              autoplay={{ delay: 2000 }}
              modules={[Autoplay]}
              // className="w-full h-1/2"
            >
              {data.length > 0 ? (
                data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div key={index} loading="lazy">
                      <Card
                        key={index}
                        id={item._id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        mainLocation={item.mainLocation}
                        subLocation={item.subLocation}
                        price={item.price}
                        status={item.status}
                        clickable={true}
                      />
                      <button
                        className="border bg-green-700 text-white w-full p-0.5 rounded-b-md cursor-pointer hover:bg-red-700"
                        onClick={()=>handleClick(item)}
                      >
                       Return
                      </button>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <p>No Products Found</p>
              )}
            </Swiper>
          </div>
        </div>
  )
}

export default OnBorrow