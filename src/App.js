import './App.css';
import {Button, createTheme, Stack, ThemeProvider, Typography} from "@mui/material";
import ForumIcon from '@mui/icons-material/Forum';
import GoogleIcon from '@mui/icons-material/Google';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Stack spacing={2} style={{alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                <ForumIcon style={{fontSize: '100px'}}/>
                <Typography variant='h3'>Messaging App</Typography>
                <Button
                    variant="contained"
                    startIcon={<GoogleIcon/>}
                    style={{marginTop: 40}}>
                    Log In with Google
                </Button>
            </Stack>
        </ThemeProvider>
    );
}

export default App;
