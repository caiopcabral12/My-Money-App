import { Container, Content, TableContent } from "./style";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";



export function CreditCard() {
    return(
        <Container>
            <Header/>
            <Content>
                <TableContent>
                   
                    <div className="Section1">
                         <span className="InfoTitle">Infos</span>
                        <div className="Infos">
                             <span>Regarding Month</span>
                             <span className="spanNumbers1">November</span> 
                        </div>
                        <div className="Infos">
                             <span>Closement Date</span>
                             <span className="spanNumbers1">05/12/2023</span>
                        </div >
                    </div>

                    <div className="Section2">
                    <span className="InfoTitle">Payment Infos</span>
                    <div className="Limit">
                             <span>Credit Limit</span>
                             <span className="spanNumbers">R$ 2.300,00</span> 
                        </div>
                        <div className="Infos">
                             <span>New Purchases</span>
                             <span className="spanNumbers">R$ 100,00</span> 
                        </div>
                        <div className="Infos">
                             <span>installment</span>
                             <span className="spanNumbers">R$ 100,00</span>
                        </div >
                        <div className="Infos">
                             <span>Fees</span>
                             <span className="spanNumbers">R$ 100,00</span>
                        </div>
                        <div className="Infos">
                             <span>Total</span>
                             <span className="spanNumbers">R$ 300,00</span>
                        </div>
                    </div>
                    

                    
                
                
            </TableContent>
            <Table/>
            </Content>
            
            
        </Container>
    )
}