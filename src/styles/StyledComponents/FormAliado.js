import styled from "styled-components";

export const DivAliado = styled.div`
    background: rgb(232, 243, 255);
    display: flex;
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
    background: white;
    font-size: 1.4rem;
    margin: 0 auto;
    padding: 10px;
    margin-top: 20px;
    border-radius: 20px;
    margin-bottom: 20px;
`
export const Label = styled.label`
    padding: 20px 0;
`
export const Input = styled.input`
    border-radius: 20px;
    border: none;
    font-size:1.3rem;
    background: #e8f3ff;
    padding: 10px;
`
export const Select = styled.select`
    border-radius: 20px;
    padding: 10px;
    background: #e8f3ff;
    font-size:1.2rem;
    border: none;
`