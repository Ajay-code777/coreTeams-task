import Card from "react-bootstrap/Card";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

function SummaryCards() {
  const [product, setProduct] = useState({});
  const URL = "http://157.15.202.188:3001/distProductInfo";

  useEffect(() => {
    axios
      .get(URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI1LCJ1c2VyTmFtZSI6Inlhc2hiaG9qYWsxQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiRW1wbG95ZWUiLCJkYXRhIjp7ImVtcGxveWVlSWQiOjEyNSwiZW1wbG95ZWVDb2RlIjoiRU1QMTI1IiwiZmlyc3ROYW1lIjoiWWFzaCIsImxhc3ROYW1lIjoiQmhvamFrIiwiYWRkcmVzcyI6Inh5eiIsInBob25lIjoiNzI3OTg4ODQ0MyIsImVtYWlsIjpudWxsLCJlbXBsb3llZU9mIjoxMjcsImVtcGxveWVlU3RhdHVzIjoiQWN0aXZlIiwiZW50aXR5SWQiOjEyNSwiY3JlYXRlZEF0IjoiMjAyNS0wMy0xMlQwNTozNjoyOC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wMy0xMlQwNTozNjoyOC4wMDBaIn0sImlhdCI6MTc0MTc3NzQ5OCwiZXhwIjoxNzQ0MzY5NDk4fQ.E69a7jDQkzpQJlPpNkx2uhWfLvuR2lBCji-X8TZ147s`,
        },
      })
      .then((response) => {
        console.log("Fetched product data:", response.data);
        setProduct(response.data.apiData);
      })
      .catch((error) => console.error("Error fetching product data", error));
  }, []);

  const cardsData = [
    { title: "Orders Received", subtitle: "Last 30 days", value: product.orderReceived, bgColor: "#fffdbd" },
    { title: "Total Products", subtitle: "In Portfolio", value: product.totalProducts, bgColor: "#c8d2fa" },
    { title: "Approved ", subtitle: "By You", value: product.retailersApproved, bgColor: "#ebf5f5" },
  ];

  return (
    <Container className="mt-3">
       <Row className="justify-content-center text-center">
        <Col xs={12} md={8}>
          <h4 className="fw-bold">Hello,</h4>
          <p className="text-muted">We have all the stats ready for you!</p>
        </Col>
      </Row>
      <Row className="g-3">
        {cardsData.map((card, index) => (
          <Col key={index} xs={12} md={4}>
            <Card
              className="shadow-sm"
              style={{ borderRadius: "12px", backgroundColor: card.bgColor }}
            >
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="font-semibold text-dark">{card.title}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">{card.subtitle}</Card.Subtitle>

                <div className="d-flex justify-content-between align-items-center" style={{ fontSize: "2rem" }}>
                  <div>{card.value || "0"}</div>
                  <BiSolidRightTopArrowCircle />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SummaryCards;
