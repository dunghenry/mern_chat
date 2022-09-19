import { createBrowserRouter } from 'react-router-dom';
import ChatPage from '~/pages/ChatPage';
import LoginPage from '~/pages/LoginPage';
import RegisterPage from '~/pages/RegisterPage';
const router = createBrowserRouter([
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: <ChatPage />,
    },
]);

export default router;
