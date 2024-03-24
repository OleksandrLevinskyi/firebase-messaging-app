import './App.css';
import {LoginPage} from "./pages/LoginPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MessagesPage} from "./pages/MessagesPage";
import {AuthStateHandler} from "./components/AuthStateHandler";

export function App() {
    return (
        <BrowserRouter>
            <AuthStateHandler/>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/messages" element={<MessagesPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}