import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, isCheckingAuth } = useSelector((state) => state.auth);
    const location = useLocation();

    if (isCheckingAuth) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500"></div>
            </div>
        )
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login" />
}

export default PrivateRoute