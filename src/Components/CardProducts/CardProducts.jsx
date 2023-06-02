import React, { useContext } from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductsContext from "../../Context/ProductsContext";

export function CardProducts() {
    const Card = styled.div`
        border-radius: 2%;
        display: flex;
        flex-direction: column;
        position: relative;
        margin-top: 10%;
        align-items: center;
        text-align:center;
        width: 40%;

        .Title {
            font-size: 12px;
        }
    `
    const Products = styled.section`
        justify-content: space-evenly;
        margin-top: 20%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    `

    const { data, getProducts } = useContext(ProductsContext);

    const [products, setProducts] = useState([]);

    useEffect( () => {
        getProducts();
        setProducts(data);
        console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <Products>
            {products.map(item => {
                return (
                    <Card key={item.id}>
                        <img src={item.thumbnail} alt={item.title}/>
                        <p className="Title">{item.title.substr(0, 35)}...</p>
                        <p>R$ {item.price.toFixed(2)}</p>
                    </Card>
                )
            })}
        </Products>
    )
}