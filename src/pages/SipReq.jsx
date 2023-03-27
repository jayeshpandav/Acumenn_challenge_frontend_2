import React from "react";
import { Container } from "react-bootstrap";
import SipReqForm from "../components/SipReqForm";
import Topbar from "../components/Topbar";

const SipReq = () => {
  return (
    <>
      <Topbar />
      <Container className="mb-3">
        <h2 className="h2">SIP Required For Target Value</h2>
      </Container>
      <Container style={{ boxShadow: "0 4px 8px rgba(0,0,0,.1)" }}>
        <p
          style={{
            backgroundColor: "#9A9B9E",
            boxShadow: "0px 0px 15px 0px ",
          }}
        >
          this Calculator finds out how much SIP amojunt is required today to
          achieve a future target value.
          <p>(Please ensure expected return and Step up rate is different)</p>
        </p>
        <hr />
        <SipReqForm />
      </Container>
    </>
  );
};

export default SipReq;
