import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import CardItem from "../components/CardItem";

const SIPPage = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="h1 mx-2 mb-3">SIP</div>
          <hr className="h1 mx-2" style={{ width: "3em" }} />
        </Col>
        <Col>
          <Button variant="primary mx-4">How To Use</Button>
          <Button variant="primary">Sample Reports</Button>
        </Col>
      </Row>
      <CardItem />
    </>
  );
};

export default SIPPage;
