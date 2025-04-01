import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import { Table, Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";

function DistibutorRequests() {
  const distributorData = [
    {
      name: "Aparna Pharmacy",
      license: "1238966",
      address: "38 Sitapura ind Area Jaipur",
      time: "1 day ago",
      status: "Pending",
      contact: "+91 8824579856",
    },
    {
      name: "Aparna Pharmacy",
      license: "1238966",
      address: "38 Sitapura ind Area Jaipur",
      time: "1 day ago",
      status: "Pending",
      contact: "+91 8824579856",
    },
    {
      name: "Aparna Pharmacy",
      license: "1238966",
      address: "38 Sitapura ind Area Jaipur",
      time: "1 day ago",
      status: "Rejected",
      contact: "+91 8824579856",
    },
    {
      name: "Aparna Pharmacy",
      license: "1238966",
      address: "38 Sitapura ind Area Jaipur",
      time: "1 day ago",
      status: "Pending",
      contact: "+91 8824579856",
    },
  ];

  return (
    <Container className="mt-5">
      <Card className="p-3 shadow-sm">
        <Row className="align-items-center">
          <Col xs={12} md={4}>
            <h5 className="mb-2 mb-md-0">Distributor Requests</h5>
          </Col>
          <Col xs={6} md={3} className="text-md-end">
            <Button variant="outline-secondary" size="sm" style={{ borderRadius: "20px" }}>
              42 Pending
            </Button>
          </Col>
          <Col xs={12} md={5} className="text-md-end mt-2 mt-md-0">
            <ButtonGroup className="w-100 w-md-auto">
              {["All", "Pending", "Approved", "Rejected"].map((filter, index) => (
                <Button
                  key={index}
                  variant="outline-secondary"
                  size="sm"
                  style={{
                    color: "black",
                    backgroundColor: "transparent",
                    borderColor: "gray",
                    padding: "4px 8px",
                    fontSize: "14px",
                  }}
                >
                  {filter}
                </Button>
              ))}
            </ButtonGroup>
          </Col>
        </Row>

        <p className="mt-3 text-muted" style={{ fontSize: "12px" }}>
          <b>You have got orders</b>! Approve the dealers and start processing orders.
        </p>

        <div className="table-responsive" style={{ maxHeight: "300px", overflowY: "auto" }}>
          <Table hover>
            <thead>
              <tr>
                <th>Distributor Name</th>
                <th>Status</th>
                <th>Contact No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {distributorData.map((distributor, index) => (
                <tr key={index}>
                  <td style={{ fontSize: "15px", fontWeight: "400" }}>
                    {distributor.name} <br />
                    Licence No: {distributor.license}
                    <p style={{ fontSize: "13px", color: "gray" }}>
                      {distributor.address} . {distributor.time}
                    </p>
                  </td>
                  <td>
                    <Button
                      variant="outline-light"
                      style={{
                        background: distributor.status === "Rejected" ? "#FFFFC5" : "#F0F8FF",
                        color: distributor.status === "Rejected" ? "#FFA400" : "#1CBAFE",
                      }}
                    >
                      {distributor.status}
                    </Button>
                  </td>
                  <td>{distributor.contact}</td>
                  <td>
                    <FaArrowRight style={{ fontSize: "2rem", color: "#5CBAFE" }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </Container>
  );
}

export default DistibutorRequests;
