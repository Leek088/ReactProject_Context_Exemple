import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterConextProvider } from "./context/CounterContext.jsx";
import { TitleColorContextProvider } from './context/TitleColorContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterConextProvider>
            <TitleColorContextProvider>
                <App />
            </TitleColorContextProvider>
        </CounterConextProvider>
    </React.StrictMode>,
)
