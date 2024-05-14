import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MenuItem from "./components/menu/MenuItem";

const SectionComponent = ({ section, setActiveItem }) => {
  const { label, description, sectionItems } = section;

  return (
    <div>
      <h5 className="section-title">{label}</h5>
      <p className="section-description">{description}</p>
      <Row>
        {sectionItems &&
          sectionItems.map(({ item }) => {
            return (
              <MenuItem
                key={item.identifier}
                item={item}
                setActiveItem={setActiveItem}
              />
            );
          })}
      </Row>
    </div>
  );
};

export default SectionComponent;
