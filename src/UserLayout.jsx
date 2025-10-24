import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Error from "./components/pages/error";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default UserLayout;
