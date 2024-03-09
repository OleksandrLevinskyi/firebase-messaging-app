import './App.css';
import {MainPage} from "./MainPage";
import {createTheme, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    },
});

export function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <MainPage/>
        </ThemeProvider>
    );
}
