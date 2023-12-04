import { ButtonText } from '../../components/ButtonText';
import { Container, Content, Form } from './style'
import { Input } from '../../components/Input/index'
import { Button } from '../../components/button/index'
import { FcCurrencyExchange } from "react-icons/fc";
import { RiMailLine, RiLockPasswordLine } from "react-icons/ri";


export function SignIn() {

  return (
    
    <Container>
      <header>
        <ButtonText
        title="About me"/>
        <ButtonText
        title="Suport"/>
      </header>
  

      <Content>
      <div> 
        <FcCurrencyExchange/>
         <h1>
         
              My Money APP!
         </h1>
          <h2>
           - Control bills and your finantial situation -
           </h2>
        </div>
      </Content>
      <Form>

        <h2>
          Login
        </h2>

        <Input
         Icon={RiMailLine}
        placeholder="Email"/>
        <Input
         Icon={RiLockPasswordLine}
        placeholder="Password"/>
        <Button
        title="Enter"/>
        
      </Form>
      
      </Container>
  )
}
