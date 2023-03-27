import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div>
      <Container>
        <Row>
          <Container className="mt-5">
            <h1 className="h1 mb-3">Calculators Cum Client proposal</h1>
          </Container>
        </Row>
        <hr />
        <Container>
          <ul className="list-unstyled d-flex flex-wrap mx-3">
            <li className="mx-3 d-flex flex-nowrap">All</li>
            <li className="mx-3 d-flex flex-nowrap">Premium Calculator</li>
            <li className="mx-3 d-flex flex-nowrap">Lumpsum</li>
            <Link
              to="/"
              className="text-decoration-none"
              style={{ color: "black" }}
            >
              <li className="mx-3 d-flex flex-nowrap">SIP</li>
            </Link>
            <li className="mx-3 d-flex flex-nowrap">STP</li>
            <Link
              to="/swplumpsum"
              className="text-decoration-none"
              style={{ color: "black" }}
            >
              <li className="mx-3 d-flex flex-nowrap">SWP</li>
            </Link>
            <li className="mx-3 d-flex flex-nowrap">Combination</li>
            <li className="mx-3 d-flex flex-nowrap">Need Based Calculator</li>
            <li className="mx-3 d-flex flex-nowrap">MF vs insurance</li>
            <li className="mx-3 d-flex flex-nowrap">Others</li>
            <li className="mx-3 d-flex flex-nowrap">Fund Performance</li>
            <li className="mx-3 d-flex flex-nowrap">View Saved File</li>
            <li className="mx-3 d-flex flex-nowrap">Not a Member?</li>
          </ul>
        </Container>
      </Container>
    </div>
  );
};

export default Topbar;
