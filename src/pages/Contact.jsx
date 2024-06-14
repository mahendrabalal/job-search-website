import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/theme.context";


function Contact() {
const value = useContext(ThemeContext);

    return (
       <div className={"contact-us " + value.theme}>
       <h2>Please Contact Us:</h2>
       <p>Mahendera balal & Rafael</p>
       </div>
      );
    }


export default Contact;