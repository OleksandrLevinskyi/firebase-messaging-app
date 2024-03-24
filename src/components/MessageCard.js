import {Avatar, Box, Typography} from "@mui/material";
import {blue, purple} from "@mui/material/colors";

export const MessageCard = ({message}) => {
    const formatDate = (timestamp) => {
        if (!timestamp) {
            return '';
        }

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
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            width: 'fit-content',
            background: 'transparent',
            boxShadow: 'none',
            flexDirection: message.isAuthor ? 'row-reverse' : 'row',
            marginLeft: message.isAuthor ? 'auto' : 0
        }}>
            <Avatar sx={{mx: 2}} src={message.authorImage} alt={message.name}/>
            <Box sx={{
                flex: '1 1 auto',
                backgroundColor: message.isAuthor ? purple[100] : blue[100],
                borderRadius: '20px',
                py: 1,
                px: 2,
                textAlign: message.isAuthor ? 'right' : 'left'
            }}>
                <Typography variant="subtitle1" color="text.secondary">
                    {message.isAuthor ? 'Me' : message.authorDisplayName}
                </Typography>
                <Typography variant="body1" color="text.primary">
                    {message.text}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{mt: 1}}>
                    {formatDate(message.timestamp)}
                </Typography>
            </Box>
        </Box>
    );
};