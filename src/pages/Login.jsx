import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null)
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();


  const fetchUser = async (e) => {
    e.preventDefault();


    if(!email || !password){
      setEmailError("email cannot be empty")
      setPasswordError("enter your password")
    }else{
      
      try {
        const res = await fetch(
          "https://6763337017ec5852cae863a0.mockapi.io/movies/api/users"
        );
        if (!res.ok) {
          throw Error("Faild To Fetch Data");
        }
        const data = await res.json();
  
        const user = data.find((user) => user.email === email);
  
        if (user) {
          
          if (user.password === password) {
            console.log(user);
           login(user)
            navigate("/")
            return user;
          } else {
            setPasswordError("wrong Password");
            setTimeout(() => {
              setPasswordError(false)
            }, 7000)
          }

        } else {
          setEmailError(`${email} is not a registared email on T-Series`);
          setTimeout(() => {
            setEmailError(false)
          }, 5000)
        }
      } catch (error) {
        console.log(error);
      }

    }
  };
  return (
    <div className=" flex w-full flex-col justify-center items-center py-10">
      <h1 className="text-2xl font-black text-orange-700">Login</h1>
      <form
        className="space-y-3 gap-10 flex flex-col px-7 justify-around w-full shadow-md shadow-black/60 py-5 rounded-2xl max-w-[400px]"
        action="">
        <div className="w-full space-y-3">
          <div className="flex flex-col">
            <label className="text-white/70 font-black" htmlFor="email">
              Email Adderess :
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              value={email}
              type="text"
              className="border-x-2 border-b-2 border-black/70 bg-black/20 rounded-md max-w-[270px] text-orange-700 blg-transparent hover:border-orange-700 outline-none px-3 py-1"
            />
            <p className="text-sm text-red-700 italic">{emailError}</p>

          </div>
          <div className="flex flex-col">
            <label className="text-white/70 font-black" htmlFor="password">
              Password :
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              value={password}
              type="password"
              className="border-x-2 border-b-2 border-black/70 bg-black/20 rounded-md max-w-[270px] text-orange-700 blg-transparent hover:border-orange-700 outline-none px-3 py-1"
            />
            <p className="text-sm text-red-700 italic">{passwordError}</p>
          </div>
          <p>
            <Link
              to={"/forgotPassword"}
              className="text-blue-700 text-sm italic hover:underline">
              Forgot password
            </Link>
          </p>
        </div>
        <div className="flex justify-center flex-col items-center">
          <button
            onClick={fetchUser}
            className="border py-1 px-5 font-black text-black/80 bg-orange-700 rounded-md hover:bg-transparent hover:text-orange-700 hover:border transition-colors duration-200">
            Login
          </button>
          <p className="text-orange-700">
            Don&#39;t have an account ?{" "}
            <Link to={"/signup"} className="text-blue-700 text-sm italic hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
