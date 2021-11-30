import { Container, Content } from "./style";
import hambuger1 from "../../assets/hamburger/1.jpeg";
import hambuger2 from "../../assets/hamburger/2.jpeg";
import hambuger3 from "../../assets/hamburger/3.jpeg";
import batata1 from "../../assets/batata/1.jpeg";
import batata2 from "../../assets/batata/2.jpeg";
import { Item } from "../Item";

export function Main(){
    return(
        <Container>
            <Content>
                <div className="title-item">
                    <h3>Hamburgers</h3>
                </div>
                <Item 
                image={hambuger1} 
                title={"hambuger1"}
                item={"texas burger"}
                ingrediente1={"pão"}
                ingrediente2={"Hamburger"}
                ingrediente3={"Bacon"}
                ingrediente4={"Molho"}
                 />
                <Item 
                image={hambuger2} 
                title={"hambuger2"}
                item={"texas burger"}
                ingrediente1={"pão"}
                ingrediente2={"Hamburger"}
                ingrediente3={"Bacon"}
                ingrediente4={"Molho"}
                 />
                <Item 
                image={hambuger3} 
                title={"hambuger3"}
                item={"texas burger"}
                ingrediente1={"pão"}
                ingrediente2={"Hamburger"}
                ingrediente3={"Bacon"}
                ingrediente4={"Molho"}
                 />
                <Item 
                image={hambuger1} 
                title={"hambuger4"}
                item={"texas burger"}
                ingrediente1={"pão"}
                ingrediente2={"Hamburger"}
                ingrediente3={"Bacon"}
                ingrediente4={"Molho"}
                 />
                
                <div>&nbsp;</div>
                <div className="title-item">
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
                
                <div>&nbsp;</div>
                
            </Content>
        </Container>
    )
};