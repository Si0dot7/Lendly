import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from 'react-router-dom';

const Favorite = () => {
    const email = localStorage.getItem('email')
    const [data,setData] = useState([])
    const authtoken = localStorage.getItem('token')
    const navigate = useNavigate()

    const fetchData=async()=>{
        const getData = await axios.get(import.meta.env.VITE_API_URI + "/product", {
            headers: { authtoken },
          });
          
          if(getData.data.length > 0){
            const filter = getData.data.filter(item=>item.favoriteEmail == email)
            setData(filter) 
            console.log(filter);
                   
          }
    }

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
                    <div key={index} loading="lazy" >
                      <Card
                        key={index}
                        id={item._id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        mainLocation={item.mainLocation}
                        subLocation={item.subLocation}
                        email={item.email}
                        price={item.price}
                        status={item.status}
                        favorite={item.favorite}
                        favoriteEmail={item.favoriteEmail}
                        clickable={true}
                      />
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <p>No Favorites Found</p>
              )}
            </Swiper>
          </div>
        </div>
  )
  
}

export default Favorite