import React, { useEffect, useContext } from "react";
import ProductsContext from "../../Context/ProductsContext";
import { fetchItem } from "../../service/fetchItem";
import { CardDetails } from "./CardDetails";
import styled from "styled-components";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Header } from "../../Components/Header/Header";

const Details = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    button {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        background-color: gray;
        border-radius: 5px;
        font-weight: bold;
        height: 40px;
        margin-top: 10%;
        width: 90%;
        bottom: 0;
    }

    .Kart-icon {
        margin-left: 20%;
    }
`

function ProductDetails(props) {
    const { match: { params: { id } } } = props;
    const { setLoading, loading, setProductDetail, productDetail } = useContext(ProductsContext);

    useEffect(() => {
        const get = async () => {
            setLoading(true);
            const result = await fetchItem(id);
            setProductDetail([result]);
        }
        get();
        setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <Details>
            <Header/>
        {
            loading ? <p>Loading...</p> : productDetail?.map(item => {
                return (
                    <CardDetails
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.thumbnail}
                        description={item.description}
                    />
                )})
        }
            <button>Adicionar ao carrinho
                <AiOutlineShoppingCart className="Kart-icon" size={20}/>
            </button>
        </Details>
    )
}

export default ProductDetails;