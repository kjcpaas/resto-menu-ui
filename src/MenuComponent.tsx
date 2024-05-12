import { useQuery } from "@apollo/client";
import { getMenu } from "./queries";
import { useState } from "react";

import SectionComponent from "./SectionComponent";

const MenuComponent = ({ menuId }) => {
  const { loading, error, data } = useQuery(getMenu(menuId));
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  if (loading) return <p>Loading...</p>;
  if (error || data.menu == null) return <p>Error : {error.message}</p>;

  const { menuSections, label: menuLabel } = data.menu;
  const activeSection = menuSections[activeSectionIndex].section;

  return (
    <div>
      <h1>{menuLabel}</h1>
      <div>
        <div>
          <ul>
            {menuSections.map(({ displayOrder, section }) => {
              return (
                <li
                  key={`${menuId}-${displayOrder}`}
                  onClick={() => setActiveSectionIndex(displayOrder)}
                >
                  {section.label}
                </li>
              );
            })}
          </ul>
        </div>

        <SectionComponent section={activeSection} />
      </div>
    </div>
  );
};

export default MenuComponent;
