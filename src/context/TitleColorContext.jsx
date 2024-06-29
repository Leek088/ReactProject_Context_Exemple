import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();
export const titleColorReducer = (state, action) => {

};

export const TitleColorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(titleColorReducer, { color: "purple", fontSize: "60px" });

    return (
        <TitleColorContext.Provider value={{ ...state }}>
            {children}
        </TitleColorContext.Provider>
    );
}
