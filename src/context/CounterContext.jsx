import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterConextProvider = ({ childen }) => {
    const [counter, setCounter] = useState();
    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {childen}
        </CounterContext.Provider>
    );
};