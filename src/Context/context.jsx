import React, { useState } from "react";
import { createContext } from "react";

const initialState = {
  name: "Hamza Ahmed",
  email: "muhammadhamza122@gmail.com",
  country: "Nepal",
  phoneNo: "9841237890",
};

export const Context = createContext();
const Store = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};
export default Store;
