import { Container, Content, Navigation, ProfilePic, Boxes } from "./style";
import { Link } from "react-router-dom";
import { Header } from '../../components/Header/index'
import { MdOutlineSavings } from "react-icons/md";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { GiReceiveMoney } from "react-icons/gi";
import { RxCalendar } from "react-icons/rx";
import { GiPayMoney } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { ButtonText } from "../../components/ButtonText";
import { Input } from '../../components/Input/index'



function Home(title, ...rest) {
    return (

        <Container>
            <Header/>
           
            <Navigation>
                <ProfilePic>
                <img 
                      src="https://www.mykhel.com/thumb/250x90x250/football/players/4/19054.jpg"
                      alt="Profile Pic" />
                      <h2>MESSI</h2>
                </ProfilePic>
                <ul>
                    <li>Account</li>
                    <li>Balace:  R$129,20</li>
                    <li>Credit Card:  R$ 449,40</li>
                    <li>      Credit Card Bills:
                        <li>
                            RS$400           
                        </li>
                        <li>
                            17/05/2022
                        </li>
                    </li>
                </ul>
            </Navigation>
            <Content>
                <Boxes
                    title="Savings"
                    className="Savings">
                        <MdOutlineSavings/>
                        Savings
                </Boxes>

                <Boxes
                    title="Monthly Expenses"
                    className="Month"
                    >
                     <RiMoneyDollarCircleLine />
                       Monthly Expenses
                           
                        
                        
                </Boxes>

                <Boxes
                    title="Credit Card Statement"
                    className="CreditCard">
                        <HiOutlineCreditCard/>
                        Credit Card Statement
                </Boxes>
                
                <Boxes
                    title="Accounts Receivable"
                    className="Receive">
                        <GiReceiveMoney/>
                        Accounts Receivable
                </Boxes>
                <Boxes
                className="Calendary"
                    title="Calendary"> 
                    <RxCalendar/>
                        Calendary
                </Boxes>
                <Boxes
                    title="Accounts Receivable"
                    className="Pay">
                        <GiPayMoney/>
                        Accounts Payable
                </Boxes>
            </Content>
           
        </Container>

    )
}

export default Home