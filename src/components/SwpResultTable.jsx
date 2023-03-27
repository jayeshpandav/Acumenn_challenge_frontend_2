import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SwpResultTable = () => {
  const { state } = useLocation();
  const formData = state?.formData;
  console.log("formdata: ", formData);
  const [result, setResult] = useState({});

  const withdrawalsData = {
    initial_investment: formData.initialInvestment,
    withdrawal_amount: 1000,
    withdrawal_frequency: "monthly",
    num_withdrawals: formData.swpPeriod * 12,
    inflation_rate: 0.075,
    roi: formData.rateOfReturn * 0.01,
  };

  useEffect(() => {
    axios
      .post(
        "https://acumenn-backend1.onrender.com/api/investment/swp/withdrawals",
        withdrawalsData
      )
      .then((response) => {
        console.log("withdraw", withdrawalsData);
        setResult(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    // eslint-disable-next-line
  }, []);
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
              {result.results?.map((result) => (
                <tr key={result.current_investment}>
                  <td>25</td>
                  <td>{result.withdrawal}</td>
                  <td>{result.current_investment}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        }
      </Container>
    </>
  );
};

export default SwpResultTable;
