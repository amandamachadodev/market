import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border-radius: 2%;
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    align-items: center;
    text-align:center;
    width: 40%;

    .Title {
        font-size: 12px;
    }

    img {
        max-width: 60px;
    }
`

export function CardProduct(props) {
    return(
        <Card key={props.id}>
            <img src={props.image} alt={props.title.substr(0, 10)}/>
            <p className="Title">{props.title.substr(0, 35)}...</p>
            <p>R$ {props.price.toFixed(2)}</p>
        </Card>
    )
}