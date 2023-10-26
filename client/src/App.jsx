import React from "react";
import { DigiVC, Form, PrintDigiVC } from "./components";
import "./App.css";
import { StateContextProvider } from "./context/StateContext";

const App = () => {
  return (
    <StateContextProvider>
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form />
        {/* <DigiVC /> */}
        <PrintDigiVC />
      </div>
    </StateContextProvider>
  );
};

export default App;
