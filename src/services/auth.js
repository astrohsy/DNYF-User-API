const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const { getAuth } = require("firebase/auth")
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measuremeantId: process.env.MEASUREMENT_ID
}

class Firebase {
    constructor() {
        Firebase.initializeApp
    }
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = getAuth(app);