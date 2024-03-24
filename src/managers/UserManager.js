import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "../firebase";

export class UserManager {
    static collectionName = 'users';

    static async get(id) {
        const docRef = doc(db, this.collectionName, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        }

        return null;
    }

    static async create(user) {
        const docRef = doc(db, this.collectionName, user.id);
        await setDoc(docRef, user);
    }
}
