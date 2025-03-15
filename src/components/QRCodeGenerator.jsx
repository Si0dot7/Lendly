import React from "react";
import QRCode from "react-qr-code";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const QRCodeGenerator = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  const location = useLocation()
  const { id, title, image, price, email, borrowEmail } = location.state || {}; 

  const handleClick = () => {
    setShowQRCode(!showQRCode);
  };

  const qrData = JSON.stringify({ id ,title, image, price, email, borrowEmail });

  return (
    <main className="flex">
      {/* <div className="flex justify-center w-full h-full">             */}
          <div className="w-full bg-white">
            <QRCode size={300} value={qrData} />
          </div>
    {/* </div> */}
    </main>
  );
};

export default QRCodeGenerator;
