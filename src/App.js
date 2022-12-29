import "./App.css";

import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Store from "./Context/context";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
function App() {
  return (
    <>
      <Store>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Info />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </Store>
    </>
  );
}

export default App;
