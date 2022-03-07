import styled from "styled-components";

export const DivAliado = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    @media screen and (min-width: 700px) {
        flex-direction: row;
        justify-content: space-around;
    }
    `
export const ImgDiv = styled.img`
    object-fit: contain;
    height: 60vh;
    @media screen and (min-width: 700px) {
        height: 100vh;
    }
`
export const FormAli = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    font-size: 1.4rem;
    margin: 0 auto;
    padding: 10px;
    margin-top: 20px;
    border-radius: 20px;
    margin-bottom: 20px;
    @media screen and (min-width: 700px) {
        margin: 20px 0;
        width: 350px;
    }
    @media screen and (min-width: 800px) {
        width: 450px;
    }
`
export const Label = styled.label`
    padding: 20px 0;
`
export const Input = styled.input`
    border-radius: 20px;
    width: 90%;
    border: none;
    font-size:1.3rem;
    margin: 20px 0;
    background: #e8f3ff;
    padding: 10px;
`
export const Select = styled.select`
    border-radius: 20px;
    width: 100%  ;
    padding: 10px;
    background: #e8f3ff;
    font-size:1.3rem;
    border: none;
`
export const DivImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export const ConntainerImages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`