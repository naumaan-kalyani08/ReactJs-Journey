// QRCodeGenerator.jsx
import React, { useState } from "react";
import { QRCode } from "react-qrcode-logo";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1> */}
      {/* <img src="" alt="qr" /> */}
      {/* D:\projects\react-journey\frontend\src\components\ */}
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-full max-w-md rounded"
      />
      <div className="flex">
        {text && (
          <QRCode
            value={"https://happy-birthday-afifa.netlify.app/"}
            size={300}
            //   logoImage="./images/afifa-qr.png  " // optional logo
            logoImage="./images/1.jpg  " // optional logo
            logoOpacity={0.4}
            logoWidth={100}
            logoHeight={100}
            qrStyle="dots"
            eyeRadius={10}
          />
        )}
        {text && (
          <QRCode
            value={"https://happy-birthday-afifa.netlify.app/"}
            size={250}
            //   logoImage="./images/afifa-qr.png  " // optional logo
            logoImage="./images/1.jpg  " // optional logo
            logoOpacity={0.4}
            logoWidth={100}
            logoHeight={100}
            qrStyle="dots"
            eyeRadius={10}
          />
        )}
        {text && (
          <QRCode
            value={"https://happy-birthday-afifa.netlify.app/"}
            size={200}
            //   logoImage="./images/afifa-qr.png  " // optional logo
            logoImage="./images/1.jpg  " // optional logo
            logoOpacity={0.4}
            logoWidth={100}
            logoHeight={100}
            qrStyle="dots"
            eyeRadius={10}
          />
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
