'use client'

import styled from "styled-components";
import Logo from "@/components/Logo";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Header = () => {
    const pathname = usePathname()

    return (
        <S.Container>
            <Logo/>
            <S.Navigation>
                <div>
                    <S.NavLink href={'/home/rent'} isactive={pathname === '/home/rent'? "true": "false"}>렌트카</S.NavLink>
                    <S.NavLink href={'/home/event'} isactive={pathname === '/home/event'?"true": "false"}>이벤트</S.NavLink>
                    <S.NavLink href={'/home/mypage'} isactive={pathname === '/home/mypage'?"true": "false"}>마이페이지</S.NavLink>
                </div>
                <div>
                    
                </div>
            </S.Navigation>
        </S.Container>
    )
}

export default Header


const S = {
    Container: styled.header`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-top: 8px;
        padding-bottom: 8px;
    `,
    Navigation: styled.nav`
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `,
    NavLink: styled(Link)`
        color: ${(props) => (props.isactive === "true" ? "var(--primary-color)":"")};
       font-weight: ${(props) => (props.isactive === "true" ? "bold":"normal")}; 
    `
}