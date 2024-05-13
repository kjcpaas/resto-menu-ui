import { useQuery } from "@apollo/client";
import { getMenu } from "../queries";
import { Link, useParams } from "react-router-dom";

import NotFoundPage from "./NotFound";
import SectionComponent from "../SectionComponent";

const MenuPage = () => {
  const { menuId, sectionId } = useParams();
  const { loading, error, data } = useQuery(getMenu(menuId));

  const sectionOrder = parseInt(sectionId || "", 10) || 0;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (
    data.menu == null ||
    sectionOrder < 0 ||
    // Only do not found if sectionId is given
    (sectionId && data.menu.menuSections.length <= sectionOrder)
  ) {
    return <NotFoundPage />;
  }

  const { menuSections, label: menuLabel } = data.menu;
  const activeSection = menuSections[sectionOrder].section;

  return (
    <div>
      <h1>{menuLabel}</h1>
      <div>
        <div>
          <ul>
            {menuSections.map(
              ({ displayOrder, section }: { displayOrder: number }) => {
                return (
                  <li key={`${menuId}-${displayOrder}`}>
                    <Link to={`/menus/${menuId}/sections/${displayOrder}`}>
                      {section.label}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>

        <SectionComponent section={activeSection} />
      </div>
    </div>
  );
};

export default MenuPage;
