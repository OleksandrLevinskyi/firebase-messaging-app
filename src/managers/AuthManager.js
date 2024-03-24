import {signOut, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {auth} from "../firebase";

export class AuthManager {
    static async logIn() {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const userData = result.user;
            console.log(userData);
        } catch (e) {
            console.log(`Error while logging in: ${e}`);
        }
    }

    static async logOut() {
        try {
            await signOut(auth);
        } catch (e) {
            console.log(`Error while signing out: ${e}`);
        }
    }
}