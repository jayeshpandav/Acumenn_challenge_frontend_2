import React, { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SwpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: 0,
    initialInvestment: 0,
    swpPeriod: 0,
    rateOfReturn: 0,
    balanceRequired: 0,
    inflationRate: 7.5,
    clientName: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    navigate("/swpresult", { state: { formData } });
  };
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Form className="mb-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          Current Age (Optional)
        </Form.Label>
        <InputGroup className="">
          <Form.Control
            onChange={handleChange}
            type="number"
            aria-label="Amount (to the nearest dollar)"
            name="age"
          />
          <InputGroup.Text>Yr</InputGroup.Text>
          {/* <InputGroup.Text>.00</InputGroup.Text> */}
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          Initial Investment
        </Form.Label>
        <InputGroup className=" ">
          <Form.Control
            onChange={handleChange}
            type="number"
            aria-label="Amount (to the nearest dollar)"
            name="initialInvestment"
          />
          <InputGroup.Text>₹</InputGroup.Text>
          {/* <InputGroup.Text>.00</InputGroup.Text> */}
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          Deferment Period
        </Form.Label>
        <Form.Check
          inline
          label="Yes"
          name="group1"
          type="radio"
          id={`inline-radio-1`}
        />
        <Form.Check
          inline
          label="No"
          name="group1"
          defaultChecked
          type="radio"
          id={`inline-radio-2`}
        />
        <InputGroup className=" ">
          <Form.Control
            disabled
            onChange={handleChange}
            type="number"
            aria-label="Amount (to the nearest dollar)"
          />
          <InputGroup.Text>Yr</InputGroup.Text>
          {/* <InputGroup.Text>.00</InputGroup.Text> */}
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          SWP Period
        </Form.Label>
        <InputGroup className="">
          <Form.Control
            onChange={handleChange}
            type="number"
            aria-label="Amount (to the nearest dollar)"
            name="swpPeriod"
          />
          <InputGroup.Text>Yr</InputGroup.Text>
          {/* <InputGroup.Text>.00</InputGroup.Text> */}
        </InputGroup>
      </Form.Group>
      <h4 className="h4 text-muted">Assumed Rate Of Return:</h4>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          Scenario 1
        </Form.Label>
        <InputGroup className=" ">
          <Form.Control
            onChange={handleChange}
            type="number"
            aria-label="Amount (to the nearest dollar)"
            name="rateOfReturn"
          />
          <InputGroup.Text>%</InputGroup.Text>
          {/* <InputGroup.Text>.00</InputGroup.Text> */}
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          Balance Required at the end of SWP
        </Form.Label>
        <InputGroup className=" ">
          <Form.Control
            onChange={handleChange}
            type="number"
            aria-label="Amount (to the nearest dollar)"
            name="balanceRequired"
          />
          <InputGroup.Text>₹</InputGroup.Text>
          {/* <InputGroup.Text>.00</InputGroup.Text> */}
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          Scenario 2 (Optional)
        </Form.Label>
        <InputGroup className=" ">
          <Form.Control
            onChange={handleChange}
            type="number"
            aria-label="Amount (to the nearest dollar)"
          />
          <InputGroup.Text>%</InputGroup.Text>
          {/* <InputGroup.Text>.00</InputGroup.Text> */}
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          Include Inflation Rate
        </Form.Label>
        <Form.Check
          inline
          label="Yes"
          name="group2"
          defaultChecked
          type="radio"
          id={`inline-radio-1`}
        />
        <Form.Check
          inline
          label="No"
          name="group2"
          type="radio"
          id={`inline-radio-2`}
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          Expected Inflation Rate
        </Form.Label>
        <InputGroup className=" ">
          <Form.Control
            onChange={handleChange}
            type="number"
            aria-label="Amount (to the nearest dollar)"
            // disabled
            name="inflationRate"
            defaultValue={7.5}
          />
          <InputGroup.Text>%</InputGroup.Text>
          {/* <InputGroup.Text>.00</InputGroup.Text> */}
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          Include Taxation
        </Form.Label>
        <Form.Check
          inline
          label="Yes"
          name="group3"
          type="radio"
          id={`inline-radio-1`}
        />
        <Form.Check
          inline
          label="No"
          name="group3"
          defaultChecked
          type="radio"
          id={`inline-radio-2`}
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6 "
        >
          {/* <Form.Check type="checkbox" label="Add client Name" /> */}
          Assumed Inflation Rate for Indexation
        </Form.Label>
        <InputGroup className=" ">
          <Form.Control
            onChange={handleChange}
            type="number"
            aria-label="Amount (to the nearest dollar)"
            disabled
          />
          <InputGroup.Text>%</InputGroup.Text>
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          Applicable Short Term Tax Rate
        </Form.Label>
        <InputGroup className=" ">
          <Form.Control
            disabled
            onChange={handleChange}
            type="number"
            aria-label="Amount (to the nearest dollar)"
          />
          <InputGroup.Text>%</InputGroup.Text>
          {/* <InputGroup.Text>.00</InputGroup.Text> */}
        </InputGroup>
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          For Period
        </Form.Label>
        <InputGroup className=" ">
          <Form.Control
            disabled
            onChange={handleChange}
            type="number"
            aria-label="Amount (to the nearest dollar)"
          />
          <InputGroup.Text>Yr</InputGroup.Text>
          {/* <InputGroup.Text>.00</InputGroup.Text> */}
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          Applicable Long Term Tax Rate
        </Form.Label>
        <InputGroup className=" ">
          <Form.Control
            disabled
            onChange={handleChange}
            type="number"
            aria-label="Amount (to the nearest dollar)"
          />
          <InputGroup.Text>%</InputGroup.Text>
          {/* <InputGroup.Text>.00</InputGroup.Text> */}
        </InputGroup>
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          For Period
        </Form.Label>
        <InputGroup className=" ">
          <Form.Control
            disabled
            onChange={handleChange}
            type="number"
            aria-label="Amount (to the nearest dollar)"
          />
          <InputGroup.Text>Yr</InputGroup.Text>
          {/* <InputGroup.Text>.00</InputGroup.Text> */}
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6 "
        >
          <Form.Check disabled type="checkbox" label="Add client Name" />
        </Form.Label>
        <InputGroup className=" ">
          <Form.Control
            onChange={handleChange}
            type="text"
            aria-label="Amount (to the nearest dollar)"
            disabled
            name="clientName"
          />
          <InputGroup.Text>
            <BsFillPersonFill />
          </InputGroup.Text>
          {/* <InputGroup.Text>.00</InputGroup.Text> */}
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          Get Report
        </Form.Label>
        <Form.Check
          inline
          label="Summary Report"
          // name="group1"
          type="radio"
          id={`inline-radio-1`}
        />
        <Form.Check
          inline
          label="Detailed Report"
          // name="group1"
          type="radio"
          id={`inline-radio-2`}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="add Suggested Schemes for Investment"
        />
      </Form.Group>

      <Container className="d-flex flex-row-reverse mr-5 pb-5">
        <Button variant="primary" type="submit">
          Calculate
        </Button>
        <Button className="mx-4" variant="primary" onClick={handleBack}>
          <span>&#60;</span>Back
        </Button>
      </Container>
    </Form>
  );
};

export default SwpForm;
