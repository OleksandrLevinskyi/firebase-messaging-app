import {MessageCard} from "../components/MessageCard";
import {Box, IconButton, TextField, Typography} from "@mui/material";
import {Timestamp} from "firebase/firestore";
import {Send} from "@mui/icons-material";
import {useState} from "react";

const dbMessages = [
    {
        id: 1,
        name: 'Alice',
        text: 'Hey, how are you?',
        image: 'https://example.com/path-to-image-of-alice.jpg',
        isAuthor: false,
        timestamp: Timestamp.fromDate(new Date())
    },
    {
        id: 2,
        name: 'Bob',
        text: 'I\'m good! How about you?',
        image: 'https://example.com/path-to-image-of-bob.jpg',
        isAuthor: true,
        timestamp: Timestamp.fromDate(new Date())
    }
];

export const MessagesPage = () => {
    const [messages, setMessages] = useState(dbMessages);
    const [inputText, setInputText] = useState('');

    const handleSend = () => {
        const newMessage = {
            id: messages.length + 1,
            name: 'You',
            text: inputText,
            image: 'https://example.com/path-to-your-avatar.jpg',
            isAuthor: true,
            timestamp: Timestamp.fromDate(new Date())
        };
        setMessages([...messages, newMessage]);
        setInputText('');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: {sm: '90%', md: '50%'},
            margin: 'auto'
        }}>
            <Typography variant="h3" textAlign="center" sx={{backgroundColor: 'background.paper', p: 2}}>
                Messages
            </Typography>

            <Box sx={{
                flexGrow: 1,
                overflowY: 'auto',
                width: '100%'
            }}>
                {messages.map((message, index) => (
                    <MessageCard key={index} message={message}/>
                ))}
            </Box>

            <TextField
                variant="outlined"
                fullWidth
                placeholder="Send a message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                sx={{margin: 2}}
                InputProps={{
                    endAdornment: (
                        <IconButton onClick={handleSend}>
                            <Send/>
                        </IconButton>
                    ),
                    style: {borderRadius: '20px'},
                }}
            />
        </Box>
    );
};