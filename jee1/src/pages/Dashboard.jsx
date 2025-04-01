import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ProgressBar,
  ListGroup,
  Table,
  ButtonGroup,
} from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import SummaryCards from "../components/SummaryCards";
import DistibutorRequests from "../components/DistributorRequests";
import Header from "../components/Header";
import TopProduct from "../components/TopProduct";
import TopDistibutor from "../components/TopDistibutor";
import StocksRunningLow from "../components/StocksRunningLow";

function Dashboard() {
  return (
    <Container fluid>
      {/* Header - Full Width */}
      {/* <Row className="bg-light p-3 shadow-sm"> */}
      <Col></Col>
      {/* </Row> */}

      <Row className="min-vh-100">
        {/* Left Sidebar */}
        <Header />
        <Col md={2} className="bg-light vh-100 p-3">
          {/* <h3 className="mb-4">Jee1</h3> */}
          <Sidebar />
        </Col>

        {/* Main Content + Right Sidebar */}
        <Col md={10}>
          <Row>
            {/* Main Content */}
            <Col md={8} className="">
              <SummaryCards />
              <DistibutorRequests />
              <TopProduct />
            </Col>

            {/* Right Sidebar */}
            <Col md={4} className="bg-light vh-100 p-3">
              <TopDistibutor />
              <StocksRunningLow />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
