import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const currentUser = { username: "cooljmessy" };

    return (
        <UserContext.Provider value={{ currentUser }}>
            {children}
        </UserContext.Provider>
    );
};
