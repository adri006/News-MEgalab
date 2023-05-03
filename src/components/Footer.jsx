import React from "react";
import mega_logo from "../media/Megalab-logo.svg"

const Footer = () => {
    return(
        <footer className="d-flex justify-content-center align-items-center">
            <div>
                <img src={mega_logo} alt="#" />
            </div>
            <div className="bottom-text">
                <h4>Мой профиль</h4>
                <h4>Избранные новости</h4>
            </div>
        </footer>
    )
}
export default Footer;