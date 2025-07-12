import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));

const Home = lazy(() => import("./components/pages/Home"));
const Error = lazy(() => import("./components/pages/error"));

const UserLayout = () => {
  return (
    <Suspense fallback={<div className="text-center p-6">Loading...</div>}>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default UserLayout;
