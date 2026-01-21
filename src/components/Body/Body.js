import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Browser from "../Browse/Browse";
import Login from "../Login/Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import ProtectedRoute from "../../utils/protectedRoute";

const Body = () => {
   const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browser",
        element: (
          <ProtectedRoute>
            <Browser />
          </ProtectedRoute>
        ),
      },
    ]);
    
    useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, displayName, email, photoURL } = user;
          dispatch(
            addUser({
              displayName: displayName,
              email: email,
              photoURL: photoURL,
              uid: uid,
            })
          );
        } else {
          dispatch(removeUser());
        }
      });

      return () => unsubscribe
    }, [addUser,removeUser]);
    
  return ( 
  <div>
    <RouterProvider router={appRouter}/>
  </div>
)};

export default Body;
