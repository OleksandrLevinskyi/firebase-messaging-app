import './App.css';
import {LoginPage} from "./pages/LoginPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MessagesPage} from "./pages/MessagesPage";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/messages" element={<MessagesPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}