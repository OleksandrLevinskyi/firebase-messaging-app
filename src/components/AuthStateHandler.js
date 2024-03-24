import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from "../firebase";

export const AuthStateHandler = () => {
    const navigate = useNavigate();

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/messages');
            } else {
                navigate('/');
            }
        });
    }, [navigate]);

    return null;
}
