import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_PUBLIC_apiKey,
    authDomain: import.meta.env.VITE_PUBLIC_authDomain,
    projectId: import.meta.env.VITE_PUBLIC_projectId,
    storageBucket: import.meta.env.VITE_PUBLIC_storageBucket,
    messagingSenderId: import.meta.env.VITE_PUBLIC_messagingSenderId,
    appId: import.meta.env.VITE_PUBLIC_appId
  };

export const app = initializeApp(firebaseConfig);




