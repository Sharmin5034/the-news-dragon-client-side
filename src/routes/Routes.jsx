import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/category/:id',
                element:<Category />
            },
            {
                path:'news/:id',  
            }
        ]
    },
   
])
export default router