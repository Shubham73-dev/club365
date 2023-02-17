// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDClUsPCrGKoCR204iJ9gsZDL2TEoe2Ito",
  authDomain: "club365-5a8c1.firebaseapp.com",
  databaseURL: "https://club365-5a8c1-default-rtdb.firebaseio.com",
  projectId: "club365-5a8c1",
  storageBucket: "club365-5a8c1.appspot.com",
  messagingSenderId: "851864140617",
  appId: "1:851864140617:web:f9dfca331f5ecefc273898",
  measurementId: "G-GDZ6XGRR4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);