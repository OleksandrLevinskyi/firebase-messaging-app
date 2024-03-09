import {Button, Stack, Typography} from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import GoogleIcon from "@mui/icons-material/Google";

export function MainPage() {
    return <Stack spacing={2} style={{alignItems: "center", justifyContent: "center", height: "100vh"}}>
        <ForumIcon style={{fontSize: "100px"}}/>
        <Typography variant="h3">Messaging App</Typography>
        <Button
            variant="contained"
            startIcon={<GoogleIcon/>}
            style={{marginTop: 40}}>
            Log In with Google
        </Button>
    </Stack>;
}