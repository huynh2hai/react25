import { createRoot } from 'react-dom/client'
import './app.css'
import {StrictMode} from "react";
import {App} from "./App.js";



createRoot(document.getElementById('app')).render(
   <StrictMode>
       <App />
   </StrictMode>
);
