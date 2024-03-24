import {Avatar, Card, CardContent, Typography} from "@mui/material";
import {blue, green} from "@mui/material/colors";

export const MessageCard = ({name, message, avatarSrc, isAuthor = false}) => {
    return (
        <Card sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            width: 'fit-content',
            background: 'transparent',
            boxShadow: 'none',
            flexDirection: isAuthor ? 'row-reverse' : 'row',
            alignSelf: isAuthor ? 'flex-end' : 'flex-start',
        }}>
            <Avatar sx={{mx: 2}} src={avatarSrc} alt={name}/>
            <CardContent sx={{
                flex: '1 1 auto',
                backgroundColor: isAuthor ? green[100] : blue[100],
                borderRadius: '20px',
                textAlign: isAuthor ? 'right' : 'left'
            }}>
                <Typography variant="subtitle1" color="text.secondary">
                    {isAuthor ? 'Me' : name}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    {message}
                </Typography>
            </CardContent>
        </Card>
    );
};