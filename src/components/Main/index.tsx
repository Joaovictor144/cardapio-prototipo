import { Container, Content } from "./style";
import hambuger1 from "../../assets/hamburger/1.jpeg";
import hambuger2 from "../../assets/hamburger/2.jpeg";
import hambuger3 from "../../assets/hamburger/3.jpeg";
import batata1 from "../../assets/batata/1.jpeg";
import batata2 from "../../assets/batata/2.jpeg";

export function Main(){
    return(
        <Container>
            <Content>
                <div className="title-item">
                    <h3>Hamburgers</h3>
                </div>
                <div className="itens">
                    <div>
                        <img src={hambuger1} alt="" />
                        <h4>texas burger</h4>
                        <ul>
                            <li>pão</li>
                            <li>Hamburger</li>
                            <li>Bacon</li>
                            <li>Molho</li>
                        </ul>
                    </div>
                </div>
                <div className="itens">
                    <div>
                        <img src={hambuger2} alt="" />
                        <h4>texas burger 2</h4>
                        <ul>
                            <li>pão</li>
                            <li>Hamburger</li>
                            <li>Bacon</li>
                            <li>Molho</li>
                        </ul>
                    </div>
                </div>
                <div className="itens">
                    <div>
                        <img src={hambuger3} alt="" />
                        <h4>texas burger 3</h4>
                        <ul>
                            <li>pão</li>
                            <li>Hamburger</li>
                            <li>Bacon</li>
                            <li>Molho</li>
                        </ul>
                    </div>
                </div>
                <div className="itens">
                    <div>
                        <img src={hambuger1} alt="" />
                        <h4>texas burger 4</h4>
                        <ul>
                            <li>pão</li>
                            <li>Hamburger</li>
                            <li>Bacon</li>
                            <li>Molho</li>
                        </ul>
                    </div>
                </div>
                <div>&nbsp;</div>
                <div className="title-item">
                    <h3>Batata</h3>
                </div>
                <div className="itens">
                    <div>
                        <img src={batata1} alt="" />
                        <h4>Batata Cheddar<br/>e Bacon</h4>
                        <ul>
                            <li>Cheddar</li>                          
                            <li>Bacon</li>
                        </ul>
                    </div>
                </div>
                <div className="itens">
                    <div>
                        <img src={batata2} alt="" />
                        <h4>Batata</h4>
                        <ul>
                            <li>Cheddar</li>                          
                            <li>Bacon</li>
                        </ul>
                    </div>
                </div>
                <div>&nbsp;</div>
                
            </Content>
        </Container>
    )
};