import { Calendary } from "../../components/Calendar";
import { Button } from "../../components/button";
import { Container, Content } from "./style";


export function CalendarPage() {
    return(
        <Container>
            <Content>
                <Button
                title="New Note"/>
            <Button
             title="Delete Note"/>
            </Content>
            <Calendary/>
        </Container>
    )
}