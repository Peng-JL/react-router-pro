import Login from "../page/Login";
import Article from "../page/Article";
import { createBrowserRouter } from "react-router-dom";
// import { createHashRouter } from "react-router-dom";

import Layout from "../page/Layout";
import About from "../page/About";
import Board from "../page/Board";
import NotFound from "../page/NotFound";

const router = createBrowserRouter([
    // const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                // path: "board",
                // 设置为默认二级路由，一级路由访问的时候它也会被渲染
                index: true,
                element: <Board />,
            },
            {
                path: "about",
                element: <About />,
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        // path: "/article",
        path: "/article/:id/:name",
        element: <Article />,
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default router;