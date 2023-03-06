import styled from "styled-components";

export const Container = styled.div``

export const Conteudo = styled.div`
    h1 {
        margin: 6rem 20rem 3.8rem 20rem;
        display: flex;
        text-align: center;
        justify-content:center;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 2.3rem;
        color: var(--white); 
    }
`

export const Lista = styled.div`
    background: var(--dark-300);
    width: 49rem;
    min-height: 10rem;
    border: 1px solid #9D4B00;
    border-radius: 8px;
    margin:auto;
    display: grid;
    grid-template-columns: 0.1fr 0.7fr .01fr;
    
`


export const Button = styled.div`
    display: flex;
    justify-content: center;
    
`
