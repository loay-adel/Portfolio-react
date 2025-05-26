import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Error from "./components/pages/error";


import Home from "./components/pages/Home";


const UserLayout = () => {
  return (
    <>
      <Header />
      <Routes>

        <Route path="" element={<Home />} />


        <Route path="*" element={<Error />} />

      </Routes>
      <Footer />
    </>
  );
};

export default UserLayout;
