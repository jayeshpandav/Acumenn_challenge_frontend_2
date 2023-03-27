import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiOutlineCalculator } from "react-icons/ai";
import { Link } from "react-router-dom";

const cardData = [
  {
    id: 1,
    name: "Future Value Of SIP",
  },
  {
    id: 2,
    name: "SIP Required For Target Future Value",
  },
  {
    id: 3,
    name: "Future value of Limited Period SIP",
  },
  {
    id: 4,
    name: "Limited Period SIP Need Based Calculator",
  },
  {
    id: 5,
    name: "Future Value of Step-Up SIP",
  },
  {
    id: 6,
    name: "Step-Up SIP Required For Target Future Value",
  },
  // ... add more cards here
];

const CardItem = () => {
  return (
    <Container
      className="d-flex flex-wrap"
      style={{
        maxWidth: "1200px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {cardData.map((card) => (
        <div
          key={card.id}
          className="my-3 mx-2"
          style={{ width: "calc(50% - 20px)" }}
        >
          <Card
            style={{ height: "20rem", boxShadow: "0 4px 8px rgba(0,0,0,.1)" }}
          >
            <AiOutlineCalculator style={{ height: "10rem", width: "10rem" }} />
            <Card.Body>
              <Card.Title style={{ height: "30px" }}>{card.name}</Card.Title>
              {card.name === "SIP Required For Target Future Value" ? (
                <Link to="/sipreq">
                  <Button
                    variant="outline-primary mt-3"
                    style={{ marginLeft: "30%" }}
                  >
                    Calculate Now
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="outline-primary mt-3"
                  style={{ marginLeft: "30%" }}
                >
                  Calculate Now
                </Button>
              )}
            </Card.Body>
          </Card>
        </div>
      ))}
    </Container>
  );
};

export default CardItem;
