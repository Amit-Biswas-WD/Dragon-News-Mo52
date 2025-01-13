import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-[#F3F3F3] font-poppins">
      <header className="container mx-auto my-6">
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
