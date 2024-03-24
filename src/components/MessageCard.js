import {Avatar, Card, CardContent, Typography} from "@mui/material";
import {blue, green} from "@mui/material/colors";

export const MessageCard = ({message}) => {
    const formatDate = (timestamp) => {
        const date = timestamp.toDate();

        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }).format(date);
    };

    return (
        <Card sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            width: 'fit-content',
            background: 'transparent',
            boxShadow: 'none',
            flexDirection: message.isAuthor ? 'row-reverse' : 'row',
            alignSelf: message.isAuthor ? 'flex-end' : 'flex-start'
        }}>
            <Avatar sx={{mx: 2}} src={message.avatarSrc} alt={message.name}/>
            <CardContent sx={{
                flex: '1 1 auto',
                backgroundColor: message.isAuthor ? green[100] : blue[100],
                borderRadius: '20px',
                textAlign: message.isAuthor ? 'right' : 'left'
            }}>
                <Typography variant="subtitle1" color="text.secondary">
                    {message.isAuthor ? 'Me' : message.name}
                </Typography>
                <Typography variant="body1" color="text.primary">
                    {message.text}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{mt: 1}}>
                    {formatDate(message.timestamp)}
                </Typography>
            </CardContent>
        </Card>
    );
};