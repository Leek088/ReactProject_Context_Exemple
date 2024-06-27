import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterConextProvider = ({ children }) => {
    const [counter, setCounter] = useState(4);
    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    );
};