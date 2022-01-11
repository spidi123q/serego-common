import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDS5oO8nWHGoAMQZuI1b0R3bbP22F6279Y",
  authDomain: "serego-c0e43.firebaseapp.com",
  projectId: "serego-c0e43",
  storageBucket: "serego-c0e43.appspot.com",
  messagingSenderId: "247571087591",
  appId: "1:247571087591:web:c4186e6188f54e9baf2242",
  measurementId: "G-2SS8ZJSKY0",
};

export const firebaseVapidKey =
  "BF2oMi2FJ8A8c3ISF7y0BSZejpxtn2zsSx5SQoukxEZwlZ6GZgnt8c2SRlE9au_qJ2YtdSheD9f1nbjcDZ3I7GA";

// Initialize Firebase
export const initializeFirebase = () => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return {
    app,
    analytics,
  };
};
