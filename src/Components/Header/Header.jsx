import React from "react";
import "../Header/Header.css";
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { useState } from "react";

export function Header() {
    const [menuShow, setMenuShow] = useState(false);

    function handleClick() {
        menuShow ? setMenuShow(false) : setMenuShow(true);
        console.log(menuShow);
    }

    return(
        <header className="Header">
            <AiOutlineMenu className="Header-icon" size={25} onClick={handleClick}/>
            <p className="Header-title">Mercado</p>
            <AiOutlineUser className="Header-icon" size={25}/>
        </header>
    )
}