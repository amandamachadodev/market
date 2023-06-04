import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border-radius: 5px;
    margin-top: 50%;
    display:flex;
    flex-direction: column;
    justifi-content: center;
    align-items: center;
    width: 80%;

    .Title {
        margin: 15px 0px;
    }

    img {
        width: 250px;
    }

    .Price {
        color: green;
        margin-top: 2%;
        margin-bottom: 5%;
    }
`
export function CardDetails(props) {
    return(
        <Card>
            <img src={props.image} alt={props.title.substr(0, 10)} />
            <h3 className="Title">{props.title}</h3>
            <p>{props.description}</p>
            <p className="Price">R$ {props.price.toFixed(2)}</p>
        </Card>
    )
}