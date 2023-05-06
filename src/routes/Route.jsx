import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Blog from "../components/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: 'home',
                element: <Home></Home>,
            },
            {
                path: 'about_us',
                element: <About></About>
            },
            {
                path: 'contact_us',
                element: <Contact></Contact>,
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]

    },
    
]);

export default router;