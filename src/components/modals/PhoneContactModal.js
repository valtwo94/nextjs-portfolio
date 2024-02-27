import { useState } from "react";
import styled from "styled-components";
import {FaPhone} from "react-icons/fa6";
import {IoMdClose} from "react-icons/io";

const PhoneContactModal = () => {
    const [open, setOpen] = useState(false);

    const handleOutsideClick = (e) => {
        if(e.currentTarget === e.target){
            setOpen(false)
        }
    }

    return (
        <>
            <S.Button onClick={() => setOpen(!open)}>
                <FaPhone />
                <S.Text>친절상담</S.Text>
                <S.Text>xxxx-xxxx</S.Text>
            </S.Button>

            {open && (
                <S.ModalWrapper onClick={handleOutsideClick}>
                    <S.ModalContent>
                        <div>
                            <S.CloseButton onClick={() => setOpen(false)}>
                                <IoMdClose size={20} />
                            </S.CloseButton>
                        </div>
                        <S.Message>
                            매일(공휴일 포함) 오전 9시 ~ 오후 6시<br />
                            점심시간 오후 12시30분 ~ 1시30분(1시간)<br /><br />
                            '채팅문의'에 문의를 남겨주시면 운영 시간 중 빠른 시간 내에 답변 드리겠습니다.<br />
                            카모아를 이용해 주셔서 감사합니다.
                        </S.Message>
                    </S.ModalContent>
                </S.ModalWrapper>
            )}
        </>
    );
};

export default PhoneContactModal;

const S = {
    ModalWrapper: styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    `,

    ModalContent: styled.div`
        background: white;
        padding: 20px;
        border-radius: 8px;
        width: 400px;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        cursor: default;
    `,

    CloseButton: styled.button`
        position: relative;
        padding: 8px;
        background-color: #eeeeee;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        cursor: pointer;
    `,

    Button: styled.button`
    color: var(--primary-color);
    font-size: var(--link-font-size);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    cursor: pointer;
  `,

    Text: styled.span`
    margin-left: 8px;
  `,
    Message: styled.p`
        text-align: center;
        line-height: 1.3;
        color: var(--message-color);
    `,
    
};
