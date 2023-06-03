import React, { useContext } from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductsContext from "../../Context/ProductsContext";
import { CardProduct } from "./CardProduct";

const ProductsCards = styled.section`
        justify-content: space-evenly;
        margin-top: 20%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;

        .Loading {
            color: gray;
            position: absolute;
            justify-content:center;
            top: 50%;
        }
`

export function Products() {

    const { data, getProducts, getProductsFiltered, inputSearch, loading } = useContext(ProductsContext);

    const [products, setProducts] = useState([]);

    useEffect( () => {
        getProducts();
        setProducts(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect( () => {
        getProductsFiltered(inputSearch);
        setProducts(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputSearch]);

    return(
        <ProductsCards>
            {loading ? <p className="Loading">Loading...</p> : products?.map(item => {
                return (
                    <CardProduct
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.thumbnail}
                    />
                )
            })}
        </ProductsCards>
    )
}