import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const SipReqResTable = () => {
  const { state } = useLocation();
  const resultData = state?.resultData;
  return (
    <>
      <Container>
        <h3 className="h3 my-3" style={{ textAlign: "center" }}>
          SIP Planning
        </h3>
        <Row>
          <Row style={{ border: "1px solid blue" }}>
            <Col style={{ borderRight: "1px solid blue" }}>Target Amount</Col>
            <Col style={{ borderLeft: "1px solid blue" }}>
              ₹ {resultData.target_value}
            </Col>
          </Row>
          <Row style={{ border: "1px solid blue" }}>
            <Col style={{ borderRight: "1px solid blue" }}>SIP Period</Col>
            <Col style={{ borderLeft: "1px solid blue" }}>
              {resultData.years} Years
            </Col>
          </Row>
        </Row>
        <h3 className="h3 my-3" style={{ textAlign: "center" }}>
          Monthly SIP Required
        </h3>
        <Row>
          <Row style={{ border: "1px solid blue" }}>
            @ {resultData.annual_rate_of_return} %
          </Row>
          <Row style={{ border: "1px solid blue" }}>
            ₹ {resultData.required_sip}
          </Row>
        </Row>
        <h3 className="h3 my-3" style={{ textAlign: "center" }}>
          Total Investment
        </h3>
        <Row>
          <Row style={{ border: "1px solid blue" }}>
            @ {resultData.annual_rate_of_return} %
          </Row>
          <Row style={{ border: "1px solid blue" }}>
            ₹ {resultData.required_sip * 12 * resultData.years}
          </Row>
        </Row>
        <h3 className="h3 my-3" style={{ textAlign: "center" }}>
          Year Wise Projected Value
        </h3>
        <Table bordered hover>
          <thead>
            <tr>
              <th rowspan="2">Year</th>
              <th colspan="2" className="text-center">
                @ 14.00 %
              </th>
            </tr>
            <tr>
              <th>Annual Investment</th>
              <th>Year End Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>₹ 24,06,813</td>
              <td>₹ 25,85,677</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default SipReqResTable;
