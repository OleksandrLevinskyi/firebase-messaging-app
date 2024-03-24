import {MessageCard} from "../components/MessageCard";
import {AppBar, Box, IconButton, TextField, Toolbar, Typography} from "@mui/material";
import {Timestamp} from "firebase/firestore";
import {Logout, Send} from "@mui/icons-material";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import ForumIcon from "@mui/icons-material/Forum";
import {blue, purple} from "@mui/material/colors";

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
    let navigate = useNavigate();
    const messagesEndRef = useRef(null);

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

    const handleLogout = () => {
        navigate('/');
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: {sm: '90%', md: '50%'},
            margin: 'auto'
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 2,
                backgroundColor: 'background.paper'
            }}>
                <ForumIcon sx={{fontSize: "50px", mr: 2, color: blue[700]}}/>
                <Typography variant="h5" sx={{textAlign: 'left', flexGrow: 1}}>
                    MESSAGING APP
                </Typography>
                <IconButton onClick={handleLogout} sx={{marginLeft: 'auto'}}>
                    <Logout sx={{fontSize: '2rem', color: blue[700]}}/>
                </IconButton>
            </Box>

            <Box sx={{
                flexGrow: 1,
                ml: 2,
                mr: 3,
                overflowY: 'auto',
                width: '100%'
            }}>
                {messages.map((message, index) => (
                    <MessageCard key={index} message={message}/>
                ))}
                <div ref={messagesEndRef} />
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
                            <Send sx={{color: blue[700]}}/>
                        </IconButton>
                    ),
                    style: {borderRadius: '20px'},
                }}
            />
        </Box>
    );
};