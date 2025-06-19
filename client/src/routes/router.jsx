import { createBrowserRouter } from "react-router-dom";
import Register from './../pages/Register.jsx';
import Login from './../pages/Login.jsx';
import RoadmapDetail from './../pages/RoadmapDetail.jsx';
import CreateRoadmap from './../pages/CreateRoadmap.jsx';
import Root from './../pages/Root';
import Roadmap from "../pages/Roadmap.jsx";
import RedirectAuth from "./redirectAuth.jsx";
import PrivateRoute from "./PrivateRoutes.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <PrivateRoute><Roadmap /></PrivateRoute>
            },
            {
                path: "/register",
                element: <RedirectAuth><Register /></RedirectAuth>
            },
            {
                path: "/login",
                element: <RedirectAuth><Login /></RedirectAuth>
            },
            {
                path: "/:roadmapId/detail",
                element: <PrivateRoute><RoadmapDetail /></PrivateRoute>
            },
            {
                path: "/create-roadmap",
                element: <PrivateRoute><CreateRoadmap /></PrivateRoute>
            }
        ]
    }
]
);

export default router;