import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const MyLent = () => {
  const [haveToken, setHaveToken] = useState(true);
  const [data, setData] = useState([]);
  const authtoken = localStorage.getItem("token");
  const navigate = useNavigate();
  const fetchData = async () => {
    const email = localStorage.getItem("email");
    try {
      if (!authtoken) {
        setHaveToken(false);
        console.log("No token");
        return;
      }
      const res = await axios.get(import.meta.env.VITE_API_URI + "/product", {
        headers: { authtoken },
      });

      console.log(res.data);

      if (res.data) {
        const filterData = res.data.filter((item) => item.email === email);
        setData(filterData);
        console.log("filter data successfully", filterData);
      }
    } catch (error) {
      console.log("filter data error", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      const deleteItem = await axios.delete(
        import.meta.env.VITE_API_URI + `/product/${id}`,
        {
          headers: { authtoken },
        }
      );

      location.reload();
    } catch (error) {
      console.log("delete error", error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {haveToken ? (
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
                      />
                      {item.status === "borrowed" ? (
                        <div>
                          <button
                            className="border bg-blue-500 text-white w-full p-0.5 cursor-pointer hover:bg-blue-700"
                            onClick={() => navigate(`/scanner/${item._id}`,{state:{item}})}
                          >
                            Scanner
                          </button>
                          <button
                            className="border bg-red-500 text-white w-full p-0.5 rounded-b-md cursor-pointer hover:bg-red-700"
                            onClick={() => deleteItem(item._id)}
                          >
                            Delete
                          </button>
                        </div>
                      ) : (
                        <button
                          className="border bg-red-500 text-white w-full p-0.5 rounded-b-md cursor-pointer hover:bg-red-700"
                          onClick={() => deleteItem(item._id)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <p>No Products Found</p>
              )}
            </Swiper>
          </div>
        </div>
      ) : (
        <p>No Product Upload</p>
      )}
    </div>
  );
};

export default MyLent;
