import { Link } from "react-router-dom";
import { Container, Brand, Content, Logout } from "./style"
import { ImExit } from "react-icons/im";
import { FcCurrencyExchange } from "react-icons/fc";


export function Header(){

    return(
        <Container>
            <Brand>
            <div> 
                <FcCurrencyExchange/> 
            </div> 
            <h2>
                My Money APP!
            </h2>
            </Brand>
            <Content>
                <div>
                    <span>
                        Hello $NAME !
                    </span>
                    
                </div>
                <strong>How are you doing today?</strong>
            </Content>

            <Logout>
                    <ImExit/>
                    
            </Logout>
        </Container>
    )
}