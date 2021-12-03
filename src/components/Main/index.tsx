import { Container, Content } from "./style";
import hambuger1 from "../../assets/hamburger/1.jpeg";
import { Item } from "../Item";
import axios from 'axios';
import { useEffect, useState } from "react";

interface Batatas{
    nome:string;
    ingredientes:string;
    valor:string;
    imagem:string;
}

export function Main(){
    const [batata,setBatata] = useState<Batatas[]>([]);

    useEffect(()=>{
        getBatata();
    },[batata])

    let getBatata = async()=>{
        let response = await axios.get("http://127.0.0.1:8000/api/listarbatatas");
            setBatata(response.data)
    };

    return(
        <Container>
            <Content>
                <div className="title-item">
                    <h3>Hamburgers</h3>
                </div>
               {batata.map(batatas =>{
                   return ( <Item 
                            key={batatas.nome}
                            image={hambuger1} 
                            title={"hambuger1"}
                            item={batatas.nome}
                            ingrediente1={batatas.ingredientes}
                            />
                        )
               })}
                          
                <div>&nbsp;</div>
                {/* <div className="title-item">
                    <h3>Batata</h3>
                </div>
                <Item 
                image={batata1} 
                title={"batata1"}
                item={"Batata Cheddar"}
                ingrediente1={"Cheddar"}
                ingrediente2={"Bacon"}
                 />
                <Item 
                image={batata2} 
                title={"batata2"}
                item={"Batata "}
                ingrediente1={"Cheddar"}
                ingrediente2={"Bacon"}
                 />
                
                <div>&nbsp;</div> */}
                
            </Content>
            
        </Container>
    )
};