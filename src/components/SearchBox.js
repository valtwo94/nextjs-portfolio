'use client'
import styled from "styled-components";

const SearchBox = () => {
    return (
        <S.Container>

        </S.Container>
    )
}

export default SearchBox

const S = {
    Container: styled.div`
        width: 100%;
        height: 320px;
        position: relative;
        bottom: 80px;
        border-radius: var(--default-border-radius);
        box-shadow: var(--default-box-shadow);
        background-color: white;
    `
}