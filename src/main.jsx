import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBffHQthza3R5fiLr6AO0f8cRojRT_-xeQ",
  authDomain: "proyecto-reactjs-facu.firebaseapp.com",
  projectId: "proyecto-reactjs-facu",
  storageBucket: "proyecto-reactjs-facu.appspot.com",
  messagingSenderId: "760924249758",
  appId: "1:760924249758:web:bf8413dac352d4211f258f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
