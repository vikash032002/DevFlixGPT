import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../utils/userSlice";
import { useNavigate } from "react-router";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutM = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
      });
    
    navigate("/");
  }
return (
  <div className="flex w-screen">
    <div className="text-4xl text-red-600 font-bold bg-gradient-to-b from-black p-2.5 w-full">
      DevFLix
    </div>
    {user && (
      <div className="w-50 px-3 justify-center align-middle items-center bg-gradient-to-b from-black flex">
        <img src={user.photoURL} className="w-10 h-10 rounded-full m-2" />
        <button
          onClick={signOutM}
          className="bg-red-600 text-white rounded-xl p-1 text-sm mr-3"
        >
          Sign Out
        </button>
      </div>
    )}
  </div>
);
}

export default Header