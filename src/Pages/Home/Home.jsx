import React from "react";
import { Header } from "../../Components/Header/Header";
import { CardProducts } from "../../Components/CardProducts/CardProducts";
import styled from "styled-components";

function Home() {
    const PageHome = styled.div`
    `
    return(
        <PageHome>
            <Header />
            <CardProducts/>
        </PageHome>
    );
}

export default Home;