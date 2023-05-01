import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
// import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";
import LoginLaoyut from "../layouts/LoginLaoyut";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import ProvideRoute from "./ProviderRoutes/ProvideRoute";
import Terms from "../Shared/Terms";

const router =createBrowserRouter([
    {
        path:'/',
        element:<LoginLaoyut></LoginLaoyut>,
        children:[
            {
                path:'/',
                element:<Navigate to='/category/0'></Navigate>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'register',
                element:<Register />
            },
            {
               path:'terms',
               element:<Terms/>
            }
        ]
    },
    {
        path:'/category',
        element:<Main/>,
        children:[           
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
        ]
    },
    {
        path:'news',  
        element:<NewsLayout />,
        children:[
            {
                path:':id',
                element:<ProvideRoute><News /></ProvideRoute>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
   
])
export default router