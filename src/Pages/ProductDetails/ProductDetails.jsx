import React, { useEffect, useContext } from "react";
import ProductsContext from "../../Context/ProductsContext";
import { CardProduct } from "../../Components/CardProducts/CardProduct";
import { fetchItem } from "../../service/fetchItem";


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
        <>
        {
            loading ? <p>Loading...</p> : productDetail?.map(item => {
                return (
                    <CardProduct
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.thumbnail}
                    />
                )})
        }
        </>
    )
}

export default ProductDetails;