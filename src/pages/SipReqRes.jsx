import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SipReqResTable from "../components/SipReqResTable";

const SipReqRes = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Container>
        <div className="d-flex flex-row mx-2 justify-content-center">
          <Button className="mx-4" variant="primary" onClick={handleBack}>
            <span>&#60;</span>Back
          </Button>
          <Button className="mx-4" variant="primary" type="submit">
            Save
          </Button>
          <Button className="mx-4" variant="primary" type="submit">
            Download/Print
          </Button>
        </div>
        <SipReqResTable />
        <div className="d-flex flex-row mx-2 justify-content-center">
          <Button
            className="mx-4"
            variant="primary"
            type="submit"
            onClick={handleBack}
          >
            <span>&#60;</span>Back
          </Button>
          <Button className="mx-4" variant="primary">
            Save
          </Button>
          <Button className="mx-4" variant="primary" type="submit">
            Download/Print
          </Button>
        </div>
        <div>
          *Returns are not guarenteed. The above is for illustration purpose
          only. Report Date: 25/03/2023
        </div>
      </Container>
    </>
  );
};

export default SipReqRes;
