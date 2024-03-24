import {Button, Stack, Typography} from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import GoogleIcon from "@mui/icons-material/Google";
import {useNavigate} from "react-router-dom";

export function LoginPage() {
    let navigate = useNavigate();

    const handleLogin = () => {
        navigate('/messages');
    };

    return <Stack spacing={2} style={{alignItems: "center", justifyContent: "center", height: "100vh"}}>
        <ForumIcon style={{fontSize: "100px"}}/>
        <Typography variant="h3">Messaging App</Typography>
        <Button variant="contained"
                startIcon={<GoogleIcon/>}
                style={{marginTop: 40}}
                onClick={handleLogin}>
            Log In with Google
        </Button>
    </Stack>;
}