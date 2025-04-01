import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function Stock() {
  const [stocks, setStocks] = useState([]);

  const URL = "http://157.15.202.188:3001/stock-runningLow-test";

  useEffect(() => {
    axios
      .get(URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI1LCJ1c2VyTmFtZSI6Inlhc2hiaG9qYWsxQGdtYWlsLmNvbSIsInVzZXJUeXBlIjoiRW1wbG95ZWUiLCJkYXRhIjp7ImVtcGxveWVlSWQiOjEyNSwiZW1wbG95ZWVDb2RlIjoiRU1QMTI1IiwiZmlyc3ROYW1lIjoiWWFzaCIsImxhc3ROYW1lIjoiQmhvamFrIiwiYWRkcmVzcyI6Inh5eiIsInBob25lIjoiNzI3OTg4ODQ0MyIsImVtYWlsIjpudWxsLCJlbXBsb3llZU9mIjoxMjcsImVtcGxveWVlU3RhdHVzIjoiQWN0aXZlIiwiZW50aXR5SWQiOjEyNSwiY3JlYXRlZEF0IjoiMjAyNS0wMy0xMlQwNTozNjoyOC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNS0wMy0xMlQwNTozNjoyOC4wMDBaIn0sImlhdCI6MTc0MTc3NzQ5OCwiZXhwIjoxNzQ0MzY5NDk4fQ.E69a7jDQkzpQJlPpNkx2uhWfLvuR2lBCji-X8TZ147s`,
        },
      })
      .then((response) => {
        console.log("Fetched stock data:", response.data); // Yeh line add karen
        setStocks(response.data.apiData);
      })
      .catch((error) => console.error("Error fetching stock data:", error));
  }, []);

  return (
    <>
      <Card className="mb-4 p-3 mt-5">
        <div className="d-flex align-items-center gap-4">
          <h6 className="mb-0">Stocks Running Low</h6>
        </div>

        <div
          className="table-responsive"
          style={{ maxHeight: "30rem", overflowY: "auto" }}
        >
          <Table>
            <thead>
              <th style={{ width: "60%" }}></th>
              <th style={{ width: "20%" }}></th>
            </thead>
                {/* {stock.PId} */}
            <tbody>
              {stocks.map((stock, index) => (
                  <tr key={index}>
                  <td>
                    {stock.PName}
                    <p style={{ fontSize: "13px" }}>
                      Remaining Quantity : {stock.Stock}
                    </p>
                  </td>
                  <td>
                    <Button variant="outline-danger">Low</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </>
  );
}
export default Stock;
