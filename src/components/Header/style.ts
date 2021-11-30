import styled from 'styled-components';

export const Container = styled.header`
    background: var(--background);
`
export const Content = styled.div`
    max-width: 1120px;
    margin:0 auto;
    padding: 0 1rem 0rem;
    display:flex;
    align-items: center;
    justify-content: center;
    h1{
        color:white;
        padding: 2rem 2rem;
        font-family: LAKESTER,Verdana, sans-serif;
 
    }
    h2{
        color:white;
        padding: 0 3rem;
        font-size: 2rem;
        text-transform: uppercase;
    }
`