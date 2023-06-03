import React from "react";
import styled from "styled-components";


const NavBar = styled.nav`
    position: absolute;
    top: 8%;
    background-color: rgb(189 189 189 / 58%);
    padding: 4%;
    texte-align: center;
    border: solid black 1px;
    border-radius: 2%;

    .Nav-border {
        margin-bottom: 10%;
        border-bottom: solid black 1px; 
    }

    .Nav-link {
        margin: 5%;
    }
`

export function Nav() {

    return(
        <NavBar>
            <ul>
                <li className="Nav-border Nav-link">Início</li>
                <li className="Nav-border Nav-link">Categorias</li>
                <li className="Nav-link">Produtos</li>
            </ul>
        </NavBar>
    )
}