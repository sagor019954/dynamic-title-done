import { createBrowserRouter } from "react-router-dom";
import Form from "../Form/Form";
import Home from '../Home/Home'
import Main from "../Layout/Main";

const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/form',
            element: <Form></Form>
        }
    ]
}])

export default router;