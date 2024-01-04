import { Button } from "../../components/button";
import { Header } from "../../components/Header";
import { Container, Content } from "./style";
import { MdOutlineAddCircle } from "react-icons/md";


export function Savings() {
    return(
        <Container>
            <Header/>
            <Content>
                <div className="btn">
                    <Button title="Month View"/>
                    <Button title="Day View"/>
                </div>
                    
                    
                    <div className="Section">
                         <ul> <span className="InfoTitle">Savings 
                                 <button>
                                    <MdOutlineAddCircle />
                                 </button>   
                          
                              </span>
                        <div className="Infos">
                             <li>Regarding Month</li>
                             <li className="liNumbers">November</li> 
                        </div>
                        <div className="Infos">
                             <li>Closement Date</li>
                             <li className="liNumbers">05/12/2023</li>
                        </div >
                        <div className="Infos">
                             <li>Closement Date</li>
                             <li className="liNumbers">05/12/2023</li>
                        </div >
                        <div className="Infos">
                             <li>Closement Date</li>
                             <li className="liNumbers">05/12/2023</li>
                        </div >
                        <div className="Total">
                             <li>TOTAL</li>
                             <li className="liNumbers">05/12/2023</li>
                        </div >
                        </ul>
                    </div>
            </Content>
             
        </Container>
    )
}