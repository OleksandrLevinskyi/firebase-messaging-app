import './App.css';
import {MainPage} from "./MainPage";
import {Avatar, Card, CardContent, createTheme, CssBaseline, ThemeProvider, Typography} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    },
});

export function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <MainPage/>
            <MessageList messages={messages} />
        </ThemeProvider>
    );
}

const MessageCard = ({ name, message, avatarSrc }) => {
    return (
        <Card sx={{ display: 'flex', alignItems: 'center', mb: 2}}>
            <Avatar sx={{ ml: 2 }} src={avatarSrc} alt={name} />
            <CardContent sx={{ flex: '1 1 auto' }}>
                <Typography variant="subtitle1" color="text.primary">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {message}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default function MessageList({ messages }) {
    return (
        <div>
            {messages.map((msg, index) => (
                <MessageCard key={index} name={msg.name} message={msg.text} avatarSrc={msg.avatarSrc} />
            ))}
        </div>
    );
}

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
    },
    {
        id: 3,
        name: 'Charlie',
        text: 'Don\'t forget the meeting at 10am.',
        image: 'https://example.com/path-to-image-of-charlie.jpg'
    }
];