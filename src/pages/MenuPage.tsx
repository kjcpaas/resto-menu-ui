import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getMenu } from "../queries";
import LoadingPage from "./Loading";
import NotFoundPage from "./NotFound";
import SectionComponent from "../SectionComponent";
import Sidebar from "../components/menu/Sidebar";
import ItemModal from "../components/menu/ItemModal";

const MenuPage = () => {
  const { menuId, sectionId } = useParams();
  const { loading, error, data } = useQuery(getMenu(menuId));
  const [activeItem, setActiveItem] = useState();

  const sectionOrder = parseInt(sectionId || "", 10) || 0;

  if (loading) return <LoadingPage />;
  if (error) return <p>Error : {error.message}</p>;
  if (
    data.menu == null ||
    sectionOrder < 0 ||
    // Only render not found if sectionId is given
    (sectionId && data.menu.menuSections.length <= sectionOrder)
  ) {
    return <NotFoundPage />;
  }

  const { menuSections, label: menuLabel } = data.menu;
  const activeSection = menuSections[sectionOrder].section;

  return (
    <>
      <Row className="menu-name my-1">
        <h2 className="text-center">{menuLabel}</h2>
      </Row>
      <Row>
        <Col xs={3}>
          <Sidebar menu={data.menu} activeItem={sectionOrder} />
        </Col>
        <Col xs={9}>
          <SectionComponent
            section={activeSection}
            setActiveItem={setActiveItem}
          />
        </Col>
      </Row>
      {activeItem && (
        <ItemModal
          item={activeItem}
          onClose={() => {
            setActiveItem(undefined);
          }}
        />
      )}
    </>
  );
};

export default MenuPage;
