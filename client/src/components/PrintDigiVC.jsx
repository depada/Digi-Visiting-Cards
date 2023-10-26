import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import DigiVC from "./DigiVC"; // Import your DigiVC component

const PrintDigiVC = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      // Set the zoom level to 65%
      document.documentElement.style.zoom = "65%";
    },
    onAfterPrint: () => {
      // Reset the zoom level to 100% after printing
      document.documentElement.style.zoom = "100%";
    },
  });

  return (
    <div>
      <DigiVC ref={componentRef} />
      <button onClick={handlePrint}>Print DigiVC</button>
    </div>
  );
};

export default PrintDigiVC;
