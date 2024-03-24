import {collection, query, orderBy, getDocs, addDoc, serverTimestamp} from "firebase/firestore";
import {auth, db} from "../firebase";

export class MessageManager {
    static collectionName = 'messages';

    static async getAll() {
        const massageQuery = query(collection(db, this.collectionName), orderBy("timestamp", "asc"));
        const querySnapshot = await getDocs(massageQuery);

        return querySnapshot.docs.map(doc => {
            const data = doc.data();

            return {
                id: doc.id, // since id is not stored inside message doc, you can add a prop when retrieving docs instead
                isAuthor: auth.currentUser.uid === data.authorId, // check if logged-in user is the author
                ...data
            }
        });
    }

    static async create(message) {
        const user = auth.currentUser; // ideal implementation is to store logged in user AuthContext and get a user from there

        const newMessageRecord = {
            text: message,
            authorDisplayName: user.displayName,
            authorImage: user.photoURL,
            authorId: user.uid,
            timestamp: serverTimestamp()
        };

        await addDoc(collection(db, this.collectionName), newMessageRecord); // generates doc id automatically
    }
}
