import styled from 'styled-components';

interface AtributesProps{
    image:string;
    title:string;
    item:string;
    ingrediente1:string;
    ingrediente2:string;
    ingrediente3?:string;
    ingrediente4?:string;
    ingrediente5?:string;
    ingrediente6?:string;
    ingrediente7?:string;
}

export function Item(props:AtributesProps){
    return(
        <Container>
            <div className="itens">
                    <div>
                        <img src={props.image} alt={props.title} />
                        <h4>{props.item}</h4>
                        <ul>
                            <li>{props.ingrediente1}</li>                          
                            <li>{props.ingrediente2}</li>                          
                            <li>{props.ingrediente3}</li>                          
                            <li>{props.ingrediente4}</li>                          
                        </ul>
                    </div>
                </div>
        </Container>
    )
}

const Container = styled.div`
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

`