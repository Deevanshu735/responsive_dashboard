import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Components/Pages/Sidebar";
import { Routes, Route } from "react-router-dom";
import EditForm from "./Components/Pages/EditFrom";
import Position from "./Components/Pages/Position";

// import OurBlogs from "./Components/Pages/OurBlogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Sidebar />} />
          <Route exact path="/e" element={<EditForm />} />
          <Route exact path="/p" element={<Position />} />

          {/* <Route exact path="/" element={<OurBlogs />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
