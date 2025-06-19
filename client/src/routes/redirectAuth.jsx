import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RedirectAuth = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    return isAuthenticated ? <Navigate to="/" replace /> : children;
};

export default RedirectAuth;