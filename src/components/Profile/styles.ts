import styled from "styled-components";

export const Container = styled.div`
    width: 500px;
    height: 500px;

    background-color: #FFFFFF10;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
 `

export const Avatar = styled.img`
    width: 300px;
    height: 300px;
    margin: 10px 0;
    
    background-color: #FFF;
    border-radius: 50%;
`
export const DataProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1 , h3{
        color: #FFF;
    }

    a{
        color: #FFF;
    }

    button{
        width: 200px;
        height: 40px;
        background: none;
        border: 1px solid #FFF;
        border-radius: 5px;
        color: #FFF;
        cursor: pointer;
        font-size: 20px;
        margin: 10px 0;
    }
`

export const FollowContainer = styled.div`
    display: flex;

    h3{
        margin: 5px;
    }
`