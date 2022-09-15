import React from 'react';
import { io } from 'socket.io-client';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
const App = () => {
    // const socket = io("http://localhost:4000");
    // React.useEffect(() => {
    //   console.log(socket);
    // }, []);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
