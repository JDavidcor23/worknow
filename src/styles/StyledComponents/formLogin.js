import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    font-family: 'Noto Sans', sans-serif;
    width: 90%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color:#529eb5;
`
export const Input = styled.input`
    height: 40px;
    border: none;
    margin: 20px 0 20px 0;
    padding: 10px;
    border-radius: 20px;
    width: 100%;
    color:black;
    background:#e9f3ff;
`
export const Button = styled.button`
    padding: 10px;
    border: none;
    margin: 20px 0;
    font-size: 1.3rem;
    background: #007a9f;
    color: white;
    cursor:pointer;
    border-radius: 20px;
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
