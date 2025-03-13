import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Card from "./Card";

const MyLent = () => {
  const [haveToken, setHaveToken] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const authtoken = localStorage.getItem("token");
    try {
      if (!authtoken) {
        setHaveToken(false);
        console.log("No token");
        return;
      }
      const res = await axios.get(import.meta.env.VITE_API_URI + "/product", {
        headers: { authtoken },
      });
      console.log('res.data.token',String(res.data.token).trim());
      console.log('authtoken',String(authtoken).trim());
      console.log(res.data);
      
      
      if (res.data) {
        const filterData = res.data.filter((item)=>item.token === authtoken)
        setData(filterData);
        console.log("filter data successfully");
      }
    } catch (error) {
      console.log("filter data error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {haveToken ? (
        <div className="lg:w-1/5 w-full sm:w-1/2">
        <div className="relative w-1/2 lg:w-full aspect-w-1 aspect-h-1">
          {data.length > 0 ? (
            data.map((item) => (
              <Card
                key={item._id}
                id={item._id}
                title={item.title}
                description={item.description}
                file={item.image}
                lenderName={item.mainLocation}
                status={item.subLocation}
                price={item.price}
              />
            ))
          ) : (
            <p>No Products Found</p>
          )}
          </div>
        </div>
      ) : (
        <p>No Product Upload</p>
      )}
    </div>
  );
};

export default MyLent;
