import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import { ProgressBar, ListGroup, Table } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";


function TopProduct() {
 

  return (
    <>
      <Card className="mb-4 p-3 mt-5">
        <div className="d-flex align-items-center gap-4">
          <h5 className="mb-0">Top Products</h5>
          <span>Last 30 days</span>
        </div>
        <p style={{ fontSize: "12px", marginTop: "10px" }}>
          Based on order quantity
        </p>

        <div
          className="table-responsive"
          style={{ maxHeight: "250px", overflowY: "auto" }}
        >
          <Table>
            <thead>
              <tr>
                <th style={{ width: "40%" }}>Distributor Name</th>
                <th style={{ width: "40%" }}>Popularity</th>
                <th style={{ width: "20%" }}>Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontSize: "15px", fontWeight: "400" }}>
                  Paracetamol
                </td>
                <td>
                  <ProgressBar
                    now={75}
                    variant="info"
                    style={{ height: "6px", margin: "10px 0" }}
                  />
                </td>
                <td>
                  <Button variant="outline-primary" style={{}}>
                    75%
                  </Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "15px", fontWeight: "400" }}>
                  Paracetamol
                </td>
                <td>
                  <ProgressBar
                    now={49}
                    variant="warning"
                    style={{ height: "6px", margin: "10px 0" }}
                  />
                </td>
                <td>
                  <Button
                    variant="outline-primary"
                    style={{
                      color: "orange",
                      borderColor: "orange",
                      backgroundColor: "transparent",
                    }}
                  >
                    49%
                  </Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "15px", fontWeight: "400" }}>Asprin</td>
                <td>
                  <ProgressBar
                    now={55}
                    variant="danger"
                    style={{ height: "6px", margin: "10px 0" }}
                  />
                </td>
                <td>
                  <Button
                    variant="outline-primary"
                    style={{
                      color: "red",
                      borderColor: "red",
                      backgroundColor: "transparent",
                    }}
                  >
                    55%
                  </Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "15px", fontWeight: "400" }}>Caltabs</td>
                <td>
                  <ProgressBar
                    now={25}
                    variant="success"
                    style={{ height: "6px", margin: "10px 0" }}
                  />
                </td>
                <td>
                  <Button
                    variant="outline-primary"
                    style={{
                      color: "green",
                      borderColor: "green",
                      backgroundColor: "transparent",
                    }}
                  >
                    25%
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>
    </>
  );
}
export default TopProduct;
