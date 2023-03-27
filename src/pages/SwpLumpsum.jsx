import React from "react";
import { Container } from "react-bootstrap";
import SwpForm from "../components/SwpForm";
import Topbar from "../components/Topbar";

const SwpLumpsum = () => {
  return (
    <>
      <Topbar />
      <Container className="mb-3">
        <h2 className="h2">Monthly SWP For Lumpsum Investment</h2>
      </Container>
      <Container style={{ boxShadow: "0 4px 8px rgba(0,0,0,.1)" }}>
        <p
          style={{
            backgroundColor: "#9A9B9E",
            boxShadow: "0px 0px 15px 0px ",
          }}
        >
          This calculator gives you how much amount you can withdraw every month
          (SWP) for a given one time lumpsum investment.
          <p>
            You can decide how much amount you need at the annuity period. It
            could als be nil. If your balance requirement is high, figures could
            become negative
          </p>
        </p>
        <hr />
        <SwpForm />
      </Container>
    </>
  );
};

export default SwpLumpsum;
