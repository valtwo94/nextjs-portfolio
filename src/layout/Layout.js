'use client'

import styled from "styled-components";
import Header from "@/components/Header";

const Layout = ({children}) => {
    return (
        <S.Background>
            <S.Container>
                <Header/>
                {children}
            </S.Container>
        </S.Background>
    )
}

export default Layout


const S = {
    Background: styled.div`
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        overflow-y: scroll;
        overflow-x: hidden;
    `,
    Container: styled.div`
        width: 1024px;
    `,
    Body: styled.main`
    
    
    `,
    Footer: styled.footer`
        
    `
}