import { Header } from "../../components/Header";
import { Container, Content, TableContent } from "./style";
import { Table } from "../../components/Table";

export function Expenses() {
    return(
        <Container>
            <Header/>
            <Content>
                <TableContent>
                <Table/>
                </TableContent>
            </Content>
        </Container>
    )
}