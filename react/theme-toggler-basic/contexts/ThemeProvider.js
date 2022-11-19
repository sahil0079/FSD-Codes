import React, { useState } from "react";


export const ThemeContext = React.createContext(false)


function ThemeProvider({ children }) {

    const [toggle, setToggle] = useState(false)

    const toggleFunction = () => {
        setToggle(!toggle)
    }

    return (
        <ThemeContext.Provider value={{ toggle, toggleFunction }} >
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeProvider