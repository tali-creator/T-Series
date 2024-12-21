import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CPassword, setCPassword] = useState("");
  const [FNError, setFNError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [CPasswordError, setCPasswordError] = useState("");
   const { login } = useContext(AuthContext);

  //  full name validation
  const validateFullName = () => {
    if (!fullName) {
      setFNError("Please enter a valid full name");
      return false;
    } else if (fullName.length < 5) {
      setFNError("Full name must be at least 5 characters long");
      return false;
    } else {
      setFNError("");
      return true;
    }
  };

  // email validation

  const validateEmail = () => {
    if (!email) {
      setEmailError("Please enter a valid email address");
      return false;
    } else if (email.includes(" ")) {
      setEmailError("Email must not contain spaces");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  // password validation
  const validatePassword = () => {
    let isValid = true;

    if (!Password) {
      setPasswordError("Please enter a password");
      isValid = false;
    } else if (Password.length < 5) {
      setPasswordError("Password is too short");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (Password !== CPassword) {
      setCPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setCPasswordError("");
    }

    return isValid;
  };

  const signUp = async (e) => {
    e.preventDefault();
  
    const isFullNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
  
    if (isFullNameValid && isEmailValid && isPasswordValid) {
 // Check if the email already exists
      try {
        const res = await fetch(
          "https://6763337017ec5852cae863a0.mockapi.io/movies/api/users"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const users = await res.json();
  
        const existingUser = users.find((user) => user.email === email);
        
        if (existingUser) {
          setEmailError("Email is already taken");
          return;
        }
  
  // signup if email is not taknen
        const user = {
          fullName,
          email,
          password: Password,
        };
  
        const signUpRes = await fetch(
          "https://6763337017ec5852cae863a0.mockapi.io/movies/api/users",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );
  
        if (!signUpRes.ok) {
          throw new Error("Failed to sign up");
        }
  
        const data = await signUpRes.json();
        console.log(data);
        login(data)
        alert("Sign Up Successful");


  // Clear form
        setFullName("");
        setEmail("");
        setPassword("");
        setCPassword("");
        setFNError("");
        setEmailError("");
        setPasswordError("");
        setCPasswordError("");
      } catch (error) {
        console.log(error);
        alert("Error: " + error.message);
      }
    } else {
      alert("Failed");
    }
  };
  

  return (
    <div className=" flex w-full flex-col justify-center items-center py-10">
      <h1 className="text-2xl font-black text-orange-700">Sign Up</h1>
      <form
        className="space-y-3 gap-10 flex flex-col items-center px-7 justify-around w-full shadow-md shadow-black/60 py-5 rounded-2xl max-w-[440px]"
        action="">
        <div className="w-full space-y-3">
          <div className="flex flex-col">
            <label className="text-white/70 font-black" htmlFor="fullname">
              Full Name:
            </label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              id="fullname"
              type="text"
              className="border-x-2 border-b-2 border-black/70 bg-black/20 rounded-md max-w-[270px] text-orange-700 blg-transparent hover:border-orange-700 outline-none px-3 py-1"
            />
            <p className="text-sm text-red-700 italic">{FNError}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-white/70 font-black" htmlFor="email">
              Email Address:
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              className="border-x-2 border-b-2 border-black/70 bg-black/20 rounded-md max-w-[270px] text-orange-700 blg-transparent hover:border-orange-700 outline-none px-3 py-1"
            />
            <p className="text-sm text-red-700 italic">{EmailError}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-white/70 font-black" htmlFor="password">
              Password:
            </label>
            <input
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              className="border-x-2 border-b-2 border-black/70 bg-black/20 rounded-md max-w-[270px] text-orange-700 blg-transparent hover:border-orange-700 outline-none px-3 py-1"
            />
            <p className="text-sm text-red-700 italic">{PasswordError}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-white/70 font-black" htmlFor="cpassword">
              Confirm Password:
            </label>
            <input
              value={CPassword}
              onChange={(e) => setCPassword(e.target.value)}
              id="cpassword"
              type="password"
              className="border-x-2 border-b-2 border-black/70 bg-black/20 rounded-md max-w-[270px] text-orange-700 blg-transparent hover:border-orange-700 outline-none px-3 py-1"
            />
            <p className="text-sm text-red-700 italic">{CPasswordError}</p>
          </div>
          <div className="flex items-center space-x-3 justify-center">
            <input type="checkbox" name="" id="" />
            <label className="text-white/70 text-sm" htmlFor="title">
              By checking the box you agree to our{" "}
              <Link className="text-blue-700 hover:underline">
                Terms & Conditions
              </Link>
            </label>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <button
            onClick={signUp}
            className="border py-1 px-5 font-black text-black/80 bg-orange-700 rounded-md hover:bg-transparent hover:text-orange-700 hover:border transition-colors duration-200">
            Sign Up
          </button>
          <p className="text-orange-700">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-blue-700 text-sm italic hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
