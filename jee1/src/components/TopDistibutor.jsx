import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import { ProgressBar, ListGroup, Table } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { MdOutlineHealthAndSafety } from "react-icons/md";



function TopDistibutor() {
  return (
    <>
      <Card className="mb-4 p-3 mt-5">
        <div className="d-flex align-items-center gap-4">
          <h5 className="mb-0">Top 10 Distibutors</h5>
        </div>
        <p style={{ fontSize: "12px", marginTop: "10px" }}>
          Based on order quantity
        </p>

        <div
          className="table-responsive"
          style={{ maxHeight: "30rem", overflowY: "auto" }}
        >
          <Table >
            <thead>
              {/* <tr> */}
                <th style={{ width: "20%" }}> </th>
                <th style={{ width: "40%" }}></th>
                <th style={{ width: "10%" }}></th>
              {/* </tr> */}
            </thead>
            <tbody>
              <tr>
                <td style={{ fontSize: "15px", fontWeight: "400" }}>
                <FaGoogle />
                </td>
                <td>
                Agarwal Pharma
                </td>
                <td>
                <Button variant="outline-secondary" >15%</Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "15px", fontWeight: "400" }}>
                <FaFacebookF />
                </td>
                <td>
                Jyoti Pharma
                </td>
                <td>
                <Button variant="outline-secondary" style={{height:"30px"}}>35%</Button>
                </td>
              </tr>
              
              <tr>
                <td style={{ fontSize: "15px", fontWeight: "400" }}>
                <FaFacebookF />
                </td>
                <td>
                Jyoti Pharma
                </td>
                <td>
                <Button variant="outline-secondary" style={{height:"30px"}}>35%</Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "15px", fontWeight: "400" }}>
                <RxLinkedinLogo />
                </td>
                <td>
                Rama Dealers
                </td>
                <td>
                <Button variant="outline-secondary" style={{height:"30px"}}>50%</Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "15px", fontWeight: "400" }}>
                <RxLinkedinLogo />
                </td>
                <td>
                Rama Dealers
                </td>
                <td>
                <Button variant="outline-secondary" style={{height:"30px"}}>50%</Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "15px", fontWeight: "400" }}>
                <RxLinkedinLogo />
                </td>
                <td>
                Rama Dealers
                </td>
                <td>
                <Button variant="outline-secondary" style={{height:"30px"}}>50%</Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "15px", fontWeight: "400" }}>
                <RxLinkedinLogo />
                </td>
                <td>
                Rama Dealers
                </td>
                <td>
                <Button variant="outline-secondary" style={{height:"30px"}}>50%</Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "15px", fontWeight: "400" }}>
                <MdOutlineHealthAndSafety />
                </td>
                <td>
                Medicure Bazaar
                </td>
                <td>
                <Button variant="outline-secondary" style={{height:"30px"}}>75%</Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "15px", fontWeight: "400" }}>
                <MdOutlineHealthAndSafety />
                </td>
                <td>
                Medicure Bazaar
                </td>
                <td>
                <Button variant="outline-secondary" style={{height:"30px"}}>75%</Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "15px", fontWeight: "400" }}>
                <MdOutlineHealthAndSafety />
                </td>
                <td>
                Medicure Bazaar
                </td>
                <td>
                <Button variant="outline-secondary" style={{height:"30px"}}>75%</Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "15px", fontWeight: "400" }}>
                <MdOutlineHealthAndSafety />
                </td>
                <td>
                Medicure Bazaar
                </td>
                <td>
                <Button variant="outline-secondary" style={{height:"30px"}}>75%</Button>
                </td>
              </tr>
             
              <tr>
                <td style={{ fontSize: "15px", fontWeight: "400" }}>
                <RxLinkedinLogo />
                </td>
                <td>
                Rama Dealers
                </td>
                <td>
                <Button variant="outline-secondary" style={{height:"30px"}}>50%</Button>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "15px", fontWeight: "400" }}>
                <RxLinkedinLogo />
                </td>
                <td>
                Rama Dealers
                </td>
                <td>
                <Button variant="outline-secondary" style={{height:"30px"}}>50%</Button>
                </td>
              </tr>
              
            </tbody>
          </Table>
        </div>
     
      </Card>
    </>
  );
}
export default TopDistibutor;
