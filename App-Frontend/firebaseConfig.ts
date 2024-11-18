import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDKbpw8qWsWlDxLGvkKk1Top7KCL932lEc",
  authDomain: "mobile-app-clone.firebaseapp.com",
  projectId: "mobile-app-clone",
  storageBucket: "mobile-app-clone.firebasestorage.app",
  messagingSenderId: "107356037536",
  appId: "1:107356037536:web:7314b0280932b5a05f44c5",
  measurementId: "G-9YL610L0CR" 
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
