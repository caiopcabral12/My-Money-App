import { Container, Content, Logout } from "./style"
import { ImExit } from "react-icons/im";


export function Header(){

    return(
        <Container>
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