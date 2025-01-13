import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          {user && user?.email ? (
            <div className="relative group">
              <img
                className="w-16 h-16 rounded-full"
                src={user.photoURL}
                alt={user?.displayName || "User"}
              />
              <p className="absolute left-0 right-0 bottom-[-40px] text-center text-sm bg-gray-800 text-white py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {user?.displayName}
              </p>
            </div>
          ) : (
            <img src={userIcon} alt="" />
          )}
        </div>
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-neutral rounded-none">
            LogOut
          </button>
        ) : (
          <Link to={`/auth/login`} className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
