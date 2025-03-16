import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const QRScanner = ({ email, title, image, price, borrowEmail }) => {
  const scannerRef = useRef(null);
  const authtoken = localStorage.getItem('token')
  const navigate = useNavigate()

    const deleteItem=async(id)=>{
       const res = await axios.delete(
            import.meta.env.VITE_API_URI + `/product/${id}`,
            {
              headers: { authtoken },
            }
          );
          console.log(res);
          
    }

  useEffect(() => {
    if (scannerRef.current) {
      const html5QrCode = new Html5Qrcode("reader");

      const startScanner = async () => {
        try {
          await html5QrCode.start(
            { facingMode: "environment" },
            {
              fps: 10,
              qrbox: { width: "100px", height: "100px" },
            },
            (decodedText, decodedResult) => {
              try {
                const getdata = JSON.parse(decodedText);
                // console.log("สแกนสำเร็จ: ", JSON.stringify(getdata));
                // html5QrCode.stop();
                if (
                  getdata.email === email &&
                  getdata.image === image &&
                  getdata.title === title &&
                  getdata.borrowEmail === borrowEmail &&
                  getdata.price === price
                ) {
                    console.log(getdata);
                    
                    deleteItem(getdata.id)
                  Swal.fire({
                          title: "Return Success!!",
                          text: "Return Product Successfully",
                          icon: "success",
                        });
                    navigate('/home')
                        
                } else {
                    Swal.fire({
                        title: "QR Code Not Match!!",
                        text: "Please Check Your QR Code",
                        icon: "error",
                      });
                      navigate('/home')
                }
              } catch (error) {
                console.error("QR Code ไม่ถูกต้อง:", error);
                alert("QR Code ไม่สามารถอ่านได้ โปรดลองใหม่");
              }
            },
            (errorMessage) => {
              console.log(errorMessage);
            }
          );
        } catch (err) {
          console.error("ไม่สามารถสแกนได้:", err);
        }
      };

      startScanner();

      return () => {
        html5QrCode
          .stop()
          .catch((err) => console.error("Error stopping scanner:", err));
      };
    }
  }, []);

  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bold mb-4">สแกน QR Code เพื่อคืนสินค้า</h2>
      <div id="reader" ref={scannerRef} className="w-full h-64"></div>
    </div>
  );
};

export default QRScanner;
