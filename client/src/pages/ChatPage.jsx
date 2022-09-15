import React from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
const ChatPage = () => {
    const [chats, setChats] = React.useState([]);
    const handleFetchChats = async () => {
        try {
            const response = await axios.get('/api/chat');
            setChats(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    React.useEffect(() => {
        handleFetchChats();
    }, []);
    return (
        <div>
            <h1>ChatPage</h1>
            {chats.map((chat) => {
                return <div key={chat._id}>{chat.chatName}</div>;
            })}
            {/* <Button colorScheme="purple" onClick={handleFetchChats}>
        Fetch Chats
      </Button> */}
        </div>
    );
};

export default ChatPage;
