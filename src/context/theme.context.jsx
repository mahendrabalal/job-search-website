import { createContext, useState} from "react";

const ThemeContext = createContext();

function ContextWrapper(props) {
const [theme, setTheme] = useState('light');

const toggleTheme = () => {
    if (theme === 'dark') {
        setTheme('light')
    } else {
        setTheme('dark')
    }
}


    return(
        <ThemeContext.Provider value={
                {
                theme: theme, 
                toggleTheme: toggleTheme
                }
            } >
       {props.children}
        </ThemeContext.Provider>
           
    )
}


export default ThemeContext;
export {ContextWrapper};
