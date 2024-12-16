import { useState } from "react";


export default function Contact() {
  const [counter, setCounter] = useState(0);
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  function handleCounter(e) {
    const newValue = e.target.value;

    if (textarea.length <= 500 || newValue.length < textarea.length) {
      setTextarea(newValue);
      setCounter(newValue.length);
    }
  }
  
  const validateEmail = () => {
    const regex = "/^[^s@]+@[^s@]+.[^s@]+$/";
    if (!email.trim()) {
      setEmailError("Email is required");
    } else if (!regex) {
      setEmailError("Please enter a valid Email");
    }
     else {
      setEmailError(false);
    }
  };
  function submitmessage(e) {
    validateEmail();
    e.preventDefault();
    if (textarea.length > 500) {
      setError("cant be more than 500 character");
    } else if (textarea.length < 10) {
      setError("please give a more details explanation");
    }else if(email === ""){
      setEmailError("Email cannot be empty")
    }
     else if(emailError){
      return
    }else {
      alert("Success");
      setCounter(0);
      setEmail("");
      setTextarea("");
      setError(false);
      setEmailError(false);
    }
  }
  return (
    <div className="bg-black/90 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-black text-orange-700 ">Contact Us</h1>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto border border-orange-900 p-7 rounded-2xl">
      <form onSubmit={submitmessage} action="" className="space-y-5  text-orange-700">
          <div className="flex  text-lg flex-col space-y-2 w-full sm:w-4/5 md:w-1/2">
            <label className="" htmlFor="email">
              {" "}
              Email Address:
            </label>
            <input
              className="outline-none  bg-white/80 px-5 rounded-md hover:border-2  py-1 hover:border-orange-700"
              type="email"
              id="email"
              name=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex justify-start text-sm italic w-full">
              <span className="text-red-700">{emailError}</span>
            </div>
          </div>
          <div className="flex  text-lg flex-col space-y-2 w-full sm:w-4/5 md:w-1/2">
            <label className="" htmlFor="message">
              {" "}
              Message/ complaint
            </label>
            <textarea
              className="outline-none max-h-[200px] py-3 text-[16px] min-h-[100px]   bg-white/80 px-5 rounded-md hover:border-2 hover:border-primary"
              type="text"
              id="message"
              name="message"
              value={textarea}
              onChange={handleCounter}></textarea>
            <div className="flex justify-between text-sm italic w-full">
              <span className="text-red-700">{error}</span>{" "}
              <span>{counter}/500</span>
            </div>
          </div>
          <div>
            <button
              onSubmit={submitmessage}
              className="bg-orange-700 text-white/80 py-1 px-5 rounded-md font-black border hover:bg-transparent"
              type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
