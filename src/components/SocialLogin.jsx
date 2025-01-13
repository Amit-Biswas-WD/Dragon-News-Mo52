import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";
const SocialLogin = () => {
  const { googleLogin, setUser, createGithubProvider } =
    useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const handleGithubLogin = () => {
    createGithubProvider()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="*:w-full space-y-2">
        <button onClick={handleGoogleLogin} className="btn ">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button onClick={handleGithubLogin} className="btn">
          <FaGithub /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
