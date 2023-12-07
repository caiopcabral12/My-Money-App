import { Header } from "../../components/Header"
import { Table } from "../../components/Table"
import { Button } from "../../components/button"
import { Container, Navigation, Content } from "./style"

export function Accounts() {
    return(
        <Container>
            <Header/>
            <Navigation>
                <Button
                title="Accounts Payable"/>
                <Button
                 title="Accounts Receivable"/>
            </Navigation>
            <Content>
                <Table/>
            </Content>
        </Container>
    )
}

