import { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import devflixbg from "url:../../../public/img/devflix-bg.png";
import { validate } from "../../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router";
import { addUser } from "../../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const  name = useRef();
  const email = useRef();
  const password  = useRef();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  useEffect(() => {
    if (user) navigate("/browser");
  }, [user]);

  const handleClick = () => {
    let message;

    if (isSignInForm) {
      message = validate(email.current.value, password.current.value);
    } else {
      message = validate(
        email.current.value,
        password.current.value,
        name.current.value
      );
    }

    setErrorMsg(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          return updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png",
          });
        })
        .then(() => {
          const { uid, displayName, email, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              displayName: displayName,
              email: email,
              photoURL: photoURL,
              uid: uid,
            })
          );
        })
        .catch((error) => {
          setErrorMsg(error.code + " " + error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
        })
        .catch((error) => {
          setErrorMsg(error.code + " " + error.message);
        });
    }
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
            ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 w-full rounded bg-[#333] focus:bg-[#444] outline-none"
            />
          )}

          <input
          ref={email}
            type="email"
            placeholder="Email Address"
            className="p-2 my-4 w-full rounded bg-[#333] focus:bg-[#444] outline-none"
          />
          <input
          ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-4 w-full rounded bg-[#333] focus:bg-[#444] outline-none"
          />
          <p className=" text-red-600 font-bold ">{errorMsg}</p>
          <button onClick={handleClick} className="p-2 my-6 w-full bg-red-700 rounded-lg font-bold hover:bg-red-800 transition-colors">
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
