import React, { useContext, createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleChangeTheme = () => {
        setIsDarkMode(!isDarkMode)
        const htmlStyle = document.documentElement.style;
        if (!isDarkMode) {
            htmlStyle.setProperty('--left-side-box-bg-color', "#FFBF5E")
            htmlStyle.setProperty('--left-side-text-color', "#FEFEFE")
            htmlStyle.setProperty('--left-side-bg-color', "#8C8C8C")
            htmlStyle.setProperty('--container-main-bg-color', "#2C2C2C")
            htmlStyle.setProperty('--container-main-text-color', "#FFFFFF")       
            htmlStyle.setProperty('--input-border-color', "#8E8E8E")       
        }else{
            htmlStyle.setProperty('--left-side-box-bg-color', "#444AFF")
            htmlStyle.setProperty('--left-side-text-color', "#444AFF")
            htmlStyle.setProperty('--left-side-bg-color', "#DADADA")
            htmlStyle.setProperty('--container-main-bg-color', "#FFFFFF")        
            htmlStyle.setProperty('--container-main-text-color', "#1F1F1F")
            htmlStyle.setProperty('--input-border-color', "#DADADA")
        }
    }

    const data = {
        isDarkMode,
        setIsDarkMode,
        handleChangeTheme
    }

    return(
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

function useData() {
    return useContext(DataContext);
}

export { DataProvider, DataContext, useData}