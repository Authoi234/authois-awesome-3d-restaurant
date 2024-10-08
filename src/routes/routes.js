import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Homepage from "../Pages/Home/Homepage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>
            }
        ]
    }
])