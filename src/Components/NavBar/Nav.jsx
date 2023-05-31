import React from "react";

export function NavBar() {
    return(
        <nav className="NavBar">
            <ul>
                <li className="NavLink">
                    <a >Início</a>
                </li>
                <li className="NavLink">
                    <a >Adicionar CEP</a>
                </li>
                <li className="NavLink">
                    <a >Produtos</a>
                </li>
            </ul>
        </nav>
    )
}