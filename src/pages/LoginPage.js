import {Button, Stack, Typography} from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import GoogleIcon from "@mui/icons-material/Google";
import {useNavigate} from "react-router-dom";
import {blue} from "@mui/material/colors";

export function LoginPage() {
    let navigate = useNavigate();

    const handleLogin = () => {
        navigate('/messages');
    };

    return <Stack spacing={2} style={{alignItems: "center", justifyContent: "center", height: "100vh"}}>
        <ForumIcon style={{fontSize: "100px", color: blue[700]}}/>
        <Typography variant="h3">MESSAGING APP</Typography>
        <Button variant="outlined"
                size="large"
                startIcon={<GoogleIcon/>}
                onClick={handleLogin}>
            Log in with Google
        </Button>
    </Stack>;
}