import {MessageCard} from "../components/MessageCard";
import {Box, Typography} from "@mui/material";
import { Timestamp } from "firebase/firestore";

const messages = [
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
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <Typography variant="h3" color="text.primary" textAlign="center" sx={{my: 3}}>
                Messages
            </Typography>
            {
                messages.map((message, index) => (
                    <MessageCard key={index} message={message}/>
                ))
            }
        </Box>
    );
}