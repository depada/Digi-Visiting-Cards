import { createContext, useState, useContext } from "react";

const StateContext = createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

export const StateContextProvider = ({ children }) => {
  const [form, setForm] = useState({
    headerImg: null,
    logoImg: null,
    companyName: "",
    designation: "",
    clientName: "",
    description: "",
    phoneNum: "",
    email: "",
    instagramId: "",
    whatsappNum: "",
    youtubeChannel: "",
    location: "",
    website: "",
    qrImage: "",
    midImg: null,
    footerImg: null,
  });

  const updateForm = (fieldName, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: value,
    }));
  };

  return (
    <StateContext.Provider value={{ form, updateForm }}>
      {children}
    </StateContext.Provider>
  );
};
