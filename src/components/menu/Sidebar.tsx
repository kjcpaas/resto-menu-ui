import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ menu, activeItem }) => {
  const navigate = useNavigate();
  return (
    <ListGroup className="menu-sidebar">
      {menu.menuSections.map(
        ({ displayOrder, section }: { displayOrder: number }) => {
          return (
            <ListGroup.Item
              key={`${menu.identifier}-${displayOrder}`}
              active={activeItem == displayOrder}
              onClick={() => {
                navigate(`/menus/${menu.identifier}/sections/${displayOrder}`);
              }}
            >
              {section.label}
            </ListGroup.Item>
          );
        }
      )}
    </ListGroup>
  );
};

export default Sidebar;
