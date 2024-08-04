import { createContext, useContext, useState } from "react";

const GroupOrganizerContext = createContext ({});

export const ContextProvider = ({ children }) => {
const [isFontSizeLarge, setIsFontSizeLarge] = useState(false);

const setFontSize = () => {
    console.log("click")
    setIsFontSizeLarge(!isFontSizeLarge);
};
const value = {isFontSizeLarge, setFontSize };

return (
     <GroupOrganizerContext.Provider value={value}>
        {children}
        </GroupOrganizerContext.Provider>);
};

export const useGroupOrganizer = () => useContext(GroupOrganizerContext);