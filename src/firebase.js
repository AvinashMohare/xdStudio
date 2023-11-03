import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCSDVKixE6-Vrw6TU_rVvOs8XJxFt7OPcg",
    authDomain: "xdstudio.firebaseapp.com",
    databaseURL:
        "https://xdstudio-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "xdstudio",
    storageBucket: "xdstudio.appspot.com",
    messagingSenderId: "925705680104",
    appId: "1:925705680104:web:85972d9cd0619bf6b2c55d",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
