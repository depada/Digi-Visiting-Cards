// import React from "react";
// import { DigiVC, Form, PrintDigiVC } from "./components";
// import "./App.css";
// import { StateContextProvider } from "./context/StateContext";

// const App = () => {
//   return (
//     <StateContextProvider>
//       {" "}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <input
//           type="color"
//           name="color-picker"
//           id="color-picker"
//           onChange={(e) => console.log(e.target.value)}
//         />
//         <Form />
//         {/* <DigiVC /> */}
//         <PrintDigiVC />
//       </div>
//     </StateContextProvider>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import { DigiVC, Form, PrintDigiVC } from "./components";
import "./App.css";
import { StateContextProvider } from "./context/StateContext";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#f0f0f0"); // Initial background color

  const handleColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  // Use useEffect to update the body background color when the state changes
  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <StateContextProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "100vh", // Ensure the background covers the entire viewport
        }}
      >
        <input
          type="color"
          name="color-picker"
          id="color-picker"
          value={backgroundColor}
          onChange={handleColorChange}
        />
        <Form />
        {/* <DigiVC /> */}
        <PrintDigiVC />
      </div>
    </StateContextProvider>
  );
};

export default App;
