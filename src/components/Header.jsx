import React from "react";
import mega_logo from "../media/Megalab-logo.svg" 
import menu from "../media/menu.svg"
import search from "../media/search.svg"
import user from "../media/user.svg"

const Header = () => {
    return(
        <>
        <header className="">
            <div className="container head">
                <div>
                    <img className="head-logo" src={mega_logo} alt="" />
                </div>
                <h1 className="head-title">Новости</h1>
                <ul className="nav-bar">
                    <li><img src={search} alt="#"/></li>
                    <li><img src={user} alt="#"/></li>
                    <li><img src={menu} alt="#"/></li>
                </ul>
            </div>
        </header>
        </>
    )
}
export default Header;