import React from "react";
import { Header } from "../../Components/Header/Header";
import { Products } from "../../Components/CardProducts/Products";
import styled from "styled-components";

const PageHome = styled.div`
`

function Home() {
    return(
        <PageHome>
            <Header />
            <Products/>
        </PageHome>
    );
}

export default Home;