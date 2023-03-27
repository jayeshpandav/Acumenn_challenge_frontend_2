import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const SwpResultTable = () => {
  const { state } = useLocation();
  const formData = state?.formData;
  console.log("formdata: ", formData);
  return (
    <>
      <Container>
        <h3 className="h3 my-3" style={{ textAlign: "center" }}>
          Monthly SWP Calculation
        </h3>
        <Row>
          <Row style={{ border: "1px solid blue" }}>
            <Col style={{ borderRight: "1px solid blue" }}>Current Age</Col>
            <Col style={{ borderLeft: "1px solid blue" }}>
              {formData.age} Years
            </Col>
          </Row>
          <Row style={{ border: "1px solid blue" }}>
            <Col style={{ borderRight: "1px solid blue" }}>
              Initial Investment
            </Col>
            <Col style={{ borderLeft: "1px solid blue" }}>
              ₹ {formData.initialInvestment}
            </Col>
          </Row>
          <Row style={{ border: "1px solid blue" }}>
            <Col style={{ borderRight: "1px solid blue" }}>SWP Period</Col>
            <Col style={{ borderLeft: "1px solid blue" }}>
              {formData.swpPeriod} Years
            </Col>
          </Row>
          <Row style={{ border: "1px solid blue" }}>
            <Col style={{ borderRight: "1px solid blue" }}>
              Expected inflation Rate
            </Col>
            <Col style={{ borderLeft: "1px solid blue" }}>
              {formData.inflationRate} %
            </Col>
          </Row>
          <Row style={{ border: "1px solid blue" }}>
            <Col style={{ borderRight: "1px solid blue" }}>
              Balance Required
            </Col>
            <Col style={{ borderLeft: "1px solid blue" }}>
              ₹ {formData.balanceRequired}
            </Col>
          </Row>
        </Row>
        <h3 className="h3 my-3" style={{ textAlign: "center" }}>
          First Year Average Monthly SWP @ {formData.rateOfReturn} %
        </h3>
        <h3 className="h3 my-3" style={{ textAlign: "center" }}>
          ₹ 88,725
        </h3>
        <h3 className="h3 my-3" style={{ textAlign: "center" }}>
          Total Withdrawal
        </h3>
        <h3 className="h3 my-3" style={{ textAlign: "center" }}>
          ₹ 1,50,62,443
        </h3>
        <h3 className="h3 my-3" style={{ textAlign: "center" }}>
          Monthly Withdrawal & Projected Investment Value
        </h3>
        {/* output table  */}
        {
          <Table bordered hover>
            <thead>
              <tr>
                <th rowspan="2">Age</th>
                <th colspan="2" className="text-center">
                  Scenerio 1 @{formData.rateOfReturn} %
                </th>
              </tr>
              <tr>
                <th>Monthly SWP</th>
                <th>Year End Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>25</td>
                <td>₹ 88,725</td>
                <td>₹ 96,97,309</td>
              </tr>
            </tbody>
          </Table>
        }
      </Container>
    </>
  );
};

export default SwpResultTable;
