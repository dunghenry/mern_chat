import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
const ChatPage = () => {
    const { currentUser } = useSelector((state) => state.authReducer);
    // const [chats, setChats] = React.useState([]);
    // const handleFetchChats = async () => {
    //     try {
    //         const response = await axios.get('/api/chat');
    //         setChats(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // React.useEffect(() => {
    //     handleFetchChats();
    // }, []);
    return (
        <div>
            <h1>ChatPage</h1>
            <h2>{currentUser?.name}</h2>
            {/* {chats.map((chat) => {
                return <div key={chat._id}>{chat.chatName}</div>;
            })} */}
        </div>
    );
};

export default ChatPage;
