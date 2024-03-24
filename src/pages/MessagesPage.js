import {MessageCard} from "../components/MessageCard";
import {Box, IconButton, TextField, Typography} from "@mui/material";
import {Timestamp} from "firebase/firestore";
import {Logout, Send} from "@mui/icons-material";
import {useEffect, useRef, useState} from "react";
import ForumIcon from "@mui/icons-material/Forum";
import {blue} from "@mui/material/colors";
import {AuthManager} from "../managers/AuthManager";
import {MessageManager} from "../managers/MessageManager";

export const MessagesPage = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const messagesEndRef = useRef(null);

    const handleSend = async () => {
        await MessageManager.create(inputText);
        setInputText('');
    };

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            await handleSend();
        }
    };

    const handleLogout = async () => {
        await AuthManager.logOut();
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
    };

    const setUp = async () => {
        const messages = await MessageManager.getAll();
        setMessages(messages);

        scrollToBottom();
    }

    // useEffect cannot handle async operations; implementing setUp function is one of the common walk-arounds
    useEffect(() => {
        setUp()
            .then(() => console.log('Set up was successful'))
            .catch((e) => console.log(`Set up failed: ${e}`));
    }, []);

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
                <div ref={messagesEndRef}/>
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