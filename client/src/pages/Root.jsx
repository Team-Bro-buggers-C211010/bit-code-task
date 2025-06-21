import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar.jsx"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "../features/Auth/authThunk.js";

const Root = () => {
  const {isCheckingAuth, user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isCheckingAuth && !user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto pb-10">
        <Outlet />
      </div>
    </div>
  )
}

export default Root