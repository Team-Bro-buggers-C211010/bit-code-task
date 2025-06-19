import { createBrowserRouter } from "react-router-dom";
import Register from './../pages/Register.jsx';
import Login from './../pages/Login.jsx';
import RoadmapDetail from './../pages/RoadmapDetail.jsx';
import CreateRoadmap from './../pages/CreateRoadmap.jsx';
import Root from './../pages/Root';
import Roadmap from "../pages/Roadmap.jsx";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Roadmap />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/:roadmapId/detail",
                element: <RoadmapDetail />
            },
            {
                path: "/create-roadmap",
                element: <CreateRoadmap />
            }
        ]
    }
]
);

export default router;