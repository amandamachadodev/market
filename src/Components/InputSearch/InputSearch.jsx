import React, { useContext, useState } from "react";
import styled from "styled-components";
import ProductsContext from "../../Context/ProductsContext";
import { BsSearch } from "react-icons/bs";

const Input = styled.input`
    border-radius: 5px;
    height: 32px;
    width: 70%;
    border: 1px solid gray;
    text-align: center;    
`

const ContentInput = styled.div`
    position: fixed;
    top: 6%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .icon {
        position: fixed;
        left: 75%;
    }
`

export function InputSearch() {


    const [ inputChange, setInputChange ] = useState('');
    const { inputSearch, setInputSearch } = useContext(ProductsContext);
    return(
        <ContentInput>
            <Input
                type="text"
                id="inputChange"
                value={inputSearch}
                onChange={({target}) => {setInputSearch(target.value)}}
                placeholder="Buscar produtos"
            />
            <BsSearch
                className="icon"
                color="gray"
                onClick={() => {
                    setInputSearch(inputChange);
                    setInputChange('')}}/>
        </ContentInput>
    )
}