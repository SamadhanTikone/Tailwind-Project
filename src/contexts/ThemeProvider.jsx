import PropTypes from "prop-types"
import { useContext, useState } from 'react'
import ThemeContext from "./theme"

function ThemeProvider({children}) {

    const[name , setName]= useState("dark")
    const nav = "sAMADHAN"

    return(
    <ThemeContext.Provider value={{ name , setName, nav}}>
        {children}
    </ThemeContext.Provider>
    )
}

export default ThemeProvider

ThemeProvider.propTypes= {
    children: PropTypes.object,
};

export  function useTheme(){
    return useContext(ThemeContext)
}
    




