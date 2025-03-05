import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Login from "./Login.tsx";
import Signup from "./Signup.tsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAExKei3rcVBTx4PAaOI04Pu-NHww67SNo",
  authDomain: "alas-97c1c.firebaseapp.com",
  projectId: "alas-97c1c",
  storageBucket: "alas-97c1c.firebasestorage.app",
  messagingSenderId: "201750618371",
  appId: "1:201750618371:web:e6bea43e2798d77aa5c936",
};
initializeApp(firebaseConfig);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sigup" element={<Signup />}></Route>
        <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </Router>
  </StrictMode>
);
