import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROCESS_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measuremeantId: process.env.MEASUREMENT_ID
}

const provider = new GoogleAuthProvider();

class Firebase {
    constructor() {
        Firebase.initializeApp
    }
}
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);