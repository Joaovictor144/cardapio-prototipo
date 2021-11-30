import styled from 'styled-components';

export const Container = styled.section`
   
`

export const Content = styled.div`
    padding: 2rem 1rem;
    
    max-width: 1120px;
   
    div.title-item{
        text-align: center;
        align-items: center;
        margin:0 auto;
        justify-content: center;
    }
    div.itens{
        display:inline;
        float:left;
        justify-content: center;
        width:50%;
        div{
            align-items: center;
            margin:0 auto;
            padding: 0 1rem;
            img{
                padding:1rem 0;
                width:100px;
                max-height:127px;
                border-radius: 50%;
            }
            h4{
               padding: 0.5rem 0;
               text-transform:uppercase;
            }
        }
        li{
            list-style:none;
            
        }
    }
    h3{
        color:var(--red);
        font-size: 2rem;
        padding: 2rem 0;
    }
`