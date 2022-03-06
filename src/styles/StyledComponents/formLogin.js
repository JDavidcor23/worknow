import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color:#529eb5;
    gap: 20px;
<<<<<<< HEAD
    @media screen and (min-width: 700px) {
        margin: 20px 0;
        width: 350px;
    }
    @media screen and (max-width: 800px) {
        width: 200px;
    }
=======
>>>>>>> 590a69f4651e8bf7077b0e746b1b339ff5c40159
`
export const Input = styled.input`
    height: 35px;
    border: none;
    padding: 10px;
    border-radius: 25px;
    width: 485px;
    color:black;
    font-size:1.2rem;
    background:#e9f3ff;
`
export const Button = styled.button`
    padding: 10px;
    border: none;
    font-size: 1.2rem;
    background: #007a9f;
    color: white;
    cursor:pointer;
    border-radius: 20px;
    width: 100%;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 600;
    cursor: pointer;
`


export const TextArea = styled.textarea`
    height: 200px;
    font-size: 1.3rem;
    border: none;
    margin:20px 0;
    background: #e8f3ff;
    border-radius: 20px;
    padding: 10px;
`
