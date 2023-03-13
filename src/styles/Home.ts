import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;

    h1{
        color: #FFF;
        margin: 50px 0;
    }
`

export const InputContainer = styled.div`
    display: flex;

    input{
        width: 400px;
        height: 40px;
        margin: 0 20px;

        border-radius: 5px;
        font-size: 20px;
        padding: 0 10px;
        outline: none;
    }

    button{
        width: 40px;
        height: 40px;

        background: none;
        border: none;
    }
`