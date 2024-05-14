import sashimiImgUrl from "../../assets/img/sashimi.jpeg";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const MenuItem = ({ item, setActiveItem }) => {
  const { label, description, price } = item;
  return (
    <Col md={4}>
      <Card className="pb-2">
        <Card.Img
          variant="top"
          src={sashimiImgUrl}
          onClick={() => setActiveItem(item)}
        />
        <Card.Body>
          <Card.Title
            className="text-truncate"
            onClick={() => setActiveItem(item)}
          >
            {label}
          </Card.Title>
          <Card.Text className="text-truncate">{description}</Card.Text>
        </Card.Body>
        <Row className="px-3">
          <Col lg={6}>{formatter.format(price)}</Col>
          <Col lg={6}>
            <Button variant="primary" className="w-100">
              Add
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default MenuItem;
