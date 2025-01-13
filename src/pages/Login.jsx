import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { setUser, userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, serError] = useState({});
  const location = useLocation();
  console.log(location);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log({ email, password });

    userLogin(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => {
        serError({ ...error, login: err.code });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="flex justify-center text-center items-center">
          <h2 className="text-2xl font-semibold mt-6">Login your account</h2>
        </div>
        <hr className="mt-[30px] w-[80%] mx-auto h-2 text-black" />
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Email address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>
          {error.login && (
            <label className="flex items-center space-x-2 mt-3 text-red-500 font-medium">
              {error.login}
            </label>
          )}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mb-6">
          Don,t Have An Account ?
          <Link to={"/auth/register"} className="text-red-500 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
