import sashimiImgUrl from "../../assets/img/sashimi.jpeg";

import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const ItemModal = ({ item, onClose }) => {
  const { label, description, price } = item;
  return (
    <>
      <Modal show onHide={onClose}>
        <Modal.Header closeButton>{/* No Header */}</Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <img className="item-image" src={sashimiImgUrl} />
            </Col>
            <Col md={6}>
              <p>
                <strong>{label}</strong>
              </p>
              <p>{description}</p>
              <div className="mb-1">
                <Button>Add ({formatter.format(price)})</Button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ItemModal;
