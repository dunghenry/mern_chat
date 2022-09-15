import { createBrowserRouter } from 'react-router-dom';
import ChatPage from '~/pages/ChatPage';
import HomPage from '~/pages/HomPage';
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomPage />,
    },
    {
        path: '/chats',
        element: <ChatPage />,
    },
]);

export default router;
