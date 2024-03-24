import {MessageCard} from "../components/MessageCard";
import {Typography} from "@mui/material";

const messages = [
    {
        id: 1,
        name: 'Alice',
        text: 'Hey, how are you?',
        image: 'https://example.com/path-to-image-of-alice.jpg'
    },
    {
        id: 2,
        name: 'Bob',
        text: 'I\'m good! How about you?',
        image: 'https://example.com/path-to-image-of-bob.jpg'
    }
];

export const MessagesPage = () => {
    return (
        <>
            <Typography variant="h3" color="text.primary" textAlign="center" sx={{my: 3}}>
                Messages
            </Typography>
            {messages.map((msg, index) => (
                <MessageCard key={index} name={msg.name} message={msg.text} avatarSrc={msg.avatarSrc}/>
            ))}
        </>
    );
}