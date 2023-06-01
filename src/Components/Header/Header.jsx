import React from "react";
// import "../Header/Header.css";
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { useState } from "react";
import styled from 'styled-components';

export function Header() {

    const TagHeader = styled.header`
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 9%;
        background-color: #fff159;

        .Header-icon {
            margin-top: 1%;
            padding: 4%;
        }

        p {
            margin-top: 7%;
            color: rgb(0, 153, 255);
        }
    `

    const [menuShow, setMenuShow] = useState(false);

    function handleClick() {
        menuShow ? setMenuShow(false) : setMenuShow(true);
        console.log(menuShow);
    }

    return(
        <TagHeader className="Header">
            <AiOutlineMenu className="Header-icon" size={25} onClick={handleClick}/>
            <p className="Header-title">Mercado</p>
            <AiOutlineUser className="Header-icon" size={25}/>
        </TagHeader>
    )
}