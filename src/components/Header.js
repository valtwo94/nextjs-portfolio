'use client'

import styled from "styled-components";
import Logo from "@/components/Logo";
import Link from "next/link";
import {usePathname} from "next/navigation";
import PhoneContactModal from "@/components/modals/PhoneContactModal";

const Header = () => {
    const pathname = usePathname()

    return (
        <S.Container>
            <Logo/>
            <S.Navigation>
                <S.LinkContainer>
                    <S.NavLink href={'/home/rent'} active={pathname === '/home/rent' ? "true" : "false"}>렌트카</S.NavLink>
                    <S.NavLink href={'/home/event'}
                               active={pathname === '/home/event' ? "true" : "false"}>이벤트</S.NavLink>
                    <S.NavLink href={'/home/mypage'}
                               active={pathname === '/home/mypage' ? "true" : "false"}>마이페이지</S.NavLink>
                </S.LinkContainer>
                <S.LinkContainer>
                    <PhoneContactModal/>
                    <S.Divider/>
                    <S.NavLink href={'/login'}>로그인</S.NavLink>
                </S.LinkContainer>
            </S.Navigation>
        </S.Container>
    )
}

export default Header


const S = {
    Container: styled.header`
        width: 100%;
        height: 80px;
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
        align-items: center;
        justify-content: space-between;
    `,
    LinkContainer: styled.div`
        display: flex;
        align-items: center;
        flex-direction: row;
    `,
    NavLink: styled(Link)`
        color: ${(props) => (props.active == "true" ? "var(--primary-color)" : "")};
        font-weight: ${(props) => (props.active === "true" ? "bold" : "normal")};
    `,
    Divider: styled.div`
        margin: 8px;
        width: 2px;
        height: 20px;
        opacity: 0.2;
        background-color: var(--divider-color);
        
    `
}