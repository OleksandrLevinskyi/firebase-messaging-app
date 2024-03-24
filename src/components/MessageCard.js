import {Avatar, Card, CardContent, Typography} from "@mui/material";
import {blue} from "@mui/material/colors";

export const MessageCard = ({name, message, avatarSrc}) => {
    return (
        <Card sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            width: 'fit-content',
            background: 'transparent',
            boxShadow: 'none'
        }}>
            <Avatar sx={{mx: 2}} src={avatarSrc} alt={name}/>
            <CardContent sx={{flex: '1 1 auto', backgroundColor: blue[100], borderRadius: '20px'}}>
                <Typography variant="subtitle1" color="text.secondary">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    {message}
                </Typography>
            </CardContent>
        </Card>
    );
};