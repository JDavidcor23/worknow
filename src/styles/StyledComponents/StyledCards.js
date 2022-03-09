import styled from 'styled-components'

export const Cards = styled.div`
    width: 200px;
    padding: 20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius: 20px;
    box-shadow: -1px -1px 25px -2px rgb(0 0 0 / 56%);
    margin: 10px 10px;
`
export const ImgCard = styled.img`
    width: 90%;
    height: 200px;
    border-radius: 20px;
    object-fit: cover;
`
export const PCard = styled.p`
    font-size: 1.2rem;
    text-align:center;
    margin:10px 0;
    font-weight: bold;
`