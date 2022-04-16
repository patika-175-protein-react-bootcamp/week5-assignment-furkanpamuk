import React from 'react'
import { useData } from '../context/Data'
import MoonSvg from '../constants/MoonSvg'
import SunSvg from '../constants/SunSvg'

function RightSideHeader() {
    const { handleChangeTheme, isDarkMode } = useData();

    const handleTheme = () => {
        handleChangeTheme()
    }

    return (
        <>
            <p className="rightsideHeader">Kayıt</p>
            <div className="line"></div>
            <div className="theme-svg" onClick={handleTheme}>
                {
                    isDarkMode ? 
                    <SunSvg width={"40px"} height={"40px"} />
                    :
                    <MoonSvg width={"40px"} height={"40px"} />
                }
                
            </div>
        </>
    )
}

export default RightSideHeader