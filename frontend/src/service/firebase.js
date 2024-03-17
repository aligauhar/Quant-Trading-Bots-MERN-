import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';
import Apidata from "../../src/restApi.json"

// Function to fetch Firebase configuration and initialize auth and provider
const initializeFirebase = () => {
  return new Promise((resolve, reject) => {
    // Fetch Firebase configuration from API endpoint
    axios.post(Apidata.BACKEND_URL  + 'api/firebase-config')
      .then(response => {
        const data = response.data.frontend_firebase_auth;

        // Create firebaseConfig object using the fetched data
        const firebaseConfig = {
          apiKey: data.apiKey,
          authDomain: data.authDomain,
          projectId: data.projectId,
          storageBucket: data.storageBucket,
          messagingSenderId: data.messagingSenderId,
          appId: data.appId,
          measurementId: data.measurementId
        };

        // Initialize Firebase app with firebaseConfig
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

        console.log('Firebase initialized successfully');

        // Resolve the promise with auth and provider objects
        resolve({ auth, provider });
      })
      .catch(error => {
        console.error('Error fetching Firebase configuration:', error);
        reject(error);
      });
  });
};

// Export the promise that resolves to auth and provider objects
export default initializeFirebase;
