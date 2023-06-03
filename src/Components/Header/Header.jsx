import React from "react";
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { useState } from "react";
import styled from 'styled-components';
import { Nav } from "../NavBar/Nav";
import { InputSearch } from "../InputSearch/InputSearch";

const TagHeader = styled.header`
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 12%;
        background-color: black;

        .Header-icon {
            margin-top: 1%;
            padding: 4%;
        }

        p {
            margin-top: 6%;
            color: white;
        }
    `

export function Header() {
    const [menuShow, setMenuShow] = useState(false);

    function handleClick() {
        menuShow ? setMenuShow(false) : setMenuShow(true);
    }

    return(
        <>
            <TagHeader className="Header" >
                <AiOutlineMenu className="Header-icon" size={25} color="white" onClick={handleClick}/>
                <p className="Header-title">Mercado</p>
                <AiOutlineUser className="Header-icon" size={25}  color="white" />
            </TagHeader>
            <InputSearch/>
            {menuShow && <Nav />}
        </>
    )
}