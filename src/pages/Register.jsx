import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";

const Register = () => {
  const { createUser, setUser, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log({ name, photo, email, password });

    if (name.length < 6) {
      setError({ ...error, name: "Must be more then 6 character long" });
      return;
    }

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        profileUpdate({ displayName: name, photoURL: photo })
          .then(() => {
            // console.log("Profile updated!");
            navigate("/");
          })
          .catch((error) => {
            // console.log(error);
          });
      })
      .catch((error) => {
        // console.log("Error", error);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="flex justify-center text-center items-center">
          <h2 className="text-2xl font-semibold mt-6">Register your account</h2>
        </div>
        <hr className="mt-[30px] w-[80%] mx-auto h-2 text-black" />
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Your Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          {error.name && (
            <label className="label text-red-500 text-xs">{error.name}</label>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-xl font-semibold">Password</span>
            </label>
            <input
              type={showPass ? "password" : "text"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <p
              onClick={() => setShowPass(!showPass)}
              className="btn btn-xs absolute top-14 right-4"
            >
              {showPass ? <FaEyeSlash /> : <IoIosEye />}
            </p>
          </div>

          <label className="flex items-center space-x-2 mt-3">
            <input
              type="checkbox"
              name="check"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span>Accept Term & Conditions</span>
          </label>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
