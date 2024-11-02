import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Page/Home/Home";





export const route = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            },
          
        ]
    }
])