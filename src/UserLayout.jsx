import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));

const Home = lazy(() => import("./components/pages/Home"));
const Error = lazy(() => import("./components/pages/error"));

const UserLayout = () => {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="w-20 h-20 border-4 border-gray-200 rounded-full border-t-blue-500 animate-spin"></div>
        </div>
      }
    >
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
