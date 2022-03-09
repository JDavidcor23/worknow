import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top:20px;
    align-items: center;
    border-bottom: 3px solid #ECECEC ;
    flex-direction:column;
    @media screen and (min-width: 750px) {
        flex-wrap:wrap;    } 
`
export const ContainerImg = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border: 5px dashed #007a9f;
    align-items: center;
    padding: 10px;
    width: 200px;
    `
export const FormEdit = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 90%;
    @media screen and (min-width: 750px) {
        flex-direction: row;
    } 
    
    align-items: center;
    `
export const FormAli = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;  
    margin:20px 0;
    align-items: center;
    `
export const InputEdit = styled.input`
    border-radius: 20px;
    border: none;
    font-size:1.3rem;
    margin: 20px 0;
    background: #e8f3ff;
    padding: 10px;
    width: 90%;
    max-width:450px
`
export const InputAli = styled.input`
    border-radius: 20px;
    border: none;
    font-size:1.3rem;
    margin: 20px 0;
    background: #e8f3ff;
    padding: 10px;
    width: 90%;
`
