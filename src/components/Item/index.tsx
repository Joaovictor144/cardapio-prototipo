import styled from 'styled-components';

interface AtributesProps{
    image:string;
    title:string;
    item:string;
    ingrediente1:string;
    
}

export function Item(props:AtributesProps){
    return(
        <Container>
            <div className="itens">
                    <div>
                        <img src={props.image} alt={props.title} />
                        <h4>{props.item}</h4>
                        <p>{props.ingrediente1}</p>                                                  
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