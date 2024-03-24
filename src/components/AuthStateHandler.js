import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from "../firebase";
import {UserManager} from "../managers/UserManager";

export const AuthStateHandler = () => {
    const navigate = useNavigate();

    useEffect(() => {
        return onAuthStateChanged(auth, async (loggedInUser) => {
            if (loggedInUser) {
                const uid = loggedInUser.uid;
                const user = await UserManager.get(uid);

                if (user === null) {
                    // if it is a new user, create a firestore doc
                    await UserManager.create({id: uid, name: loggedInUser.displayName, image: loggedInUser.photoURL})
                }

                navigate('/messages');
            } else {
                navigate('/');
            }
        });
    }, [navigate]);

    return null;
}
