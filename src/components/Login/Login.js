import { useState } from "react";
import Header from "../Header/Header";
import devflixbg from "url:../../../public/img/devflix-bg.png";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <div
        className="fixed inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${devflixbg})` }}
      ></div>

      <div className="relative z-20">
        <Header />
      </div>

      <div className="flex-grow flex items-center justify-center relative z-10 px-4">
        <form
          className="w-full max-w-md p-5 bg-black/80 text-white rounded-lg shadow-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 w-full rounded bg-[#333] focus:bg-[#444] outline-none"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="p-2 my-4 w-full rounded bg-[#333] focus:bg-[#444] outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 my-4 w-full rounded bg-[#333] focus:bg-[#444] outline-none"
          />

          <button className="p-2 my-6 w-full bg-red-700 rounded-lg font-bold hover:bg-red-800 transition-colors">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="py-4 cursor-pointer hover:underline text-gray-400"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to DevFlix? Sign Up Now"
              : "Already a user? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
