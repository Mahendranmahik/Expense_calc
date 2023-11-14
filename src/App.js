import { Col, Container, Row } from "react-bootstrap";
import "./App.css"
import Heading from "./components/Heading";
import Showcase from "./components/Showcase";
import Transactionlist from "./components/Transactionlist";
import Addtransaction from "./components/Addtransaction";
import { GlobalcontextProvider } from "./Context/Globalcontext";

function App() {
  

  return (
    <GlobalcontextProvider>
    <Container fluid className="text-bg-dark" >
      <Row>
        <Col md={6}>
          <Heading/>
        </Col>
        
        <Col className="mt-5" md={5}>
         <Showcase/>
        </Col>
        
        <Col md={7}>
          <Transactionlist/>
          
        </Col>
        <Col md={5}>
          <Addtransaction/>
      </Col>
        
      </Row>
     
    </Container>
    </GlobalcontextProvider>
  );
}

export default App;
