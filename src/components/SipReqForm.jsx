import React, { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SipReqForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    target_value: "",
    annual_rate_of_return: "",
    years: "",
  });
  // const [result, setResult] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    await axios
      .post(
        "https://acumenn-backend1.onrender.com/api/investment/sip/required",
        formData
      )
      .then((response) => {
        // setResult(response.data);
        console.log(response.data);
        navigate("/sipresult", { state: { resultData: response.data } });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Form className="mb-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          Target Amount
        </Form.Label>
        <InputGroup className="">
          <Form.Control
            type="number"
            name="target_value"
            onChange={handleChange}
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
          SIP Period
        </Form.Label>
        <InputGroup className=" ">
          <Form.Control
            aria-label="Amount (to the nearest dollar)"
            name="years"
            onChange={handleChange}
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
            aria-label="Amount (to the nearest dollar)"
            name="annual_rate_of_return"
            onChange={handleChange}
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
          Scenario 2 (Optional)
        </Form.Label>
        <InputGroup className=" ">
          <Form.Control aria-label="Amount (to the nearest dollar)" />
          <InputGroup.Text>%</InputGroup.Text>
          {/* <InputGroup.Text>.00</InputGroup.Text> */}
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          Include Step-Up Comparison
        </Form.Label>
        <Form.Check
          inline
          label="Yes"
          // name="group1"
          type="radio"
          id={`inline-radio-1`}
        />
        <Form.Check
          inline
          label="No"
          // name="group1"
          type="radio"
          id={`inline-radio-2`}
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          Step-Up % Every Year
        </Form.Label>
        <InputGroup className=" ">
          <Form.Control aria-label="Amount (to the nearest dollar)" disabled />
          <InputGroup.Text>%</InputGroup.Text>
          {/* <InputGroup.Text>.00</InputGroup.Text> */}
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6"
        >
          Include Cost of Delay Report
        </Form.Label>
        <Form.Check
          inline
          label="Yes"
          // name="group1"
          type="radio"
          id={`inline-radio-1`}
        />
        <Form.Check
          inline
          label="No"
          // name="group1"
          type="radio"
          id={`inline-radio-2`}
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-row" controlId="formBasicEmail">
        <Form.Label
          style={{ width: "20vw" }}
          className="text-nowrap mx-3 my-auto h6 "
        >
          <Form.Check type="checkbox" label="Add client Name" />
        </Form.Label>
        <InputGroup className=" ">
          <Form.Control aria-label="Amount (to the nearest dollar)" disabled />
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

export default SipReqForm;
