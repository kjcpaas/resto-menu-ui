import { gql } from "@apollo/client";

export const getMenuList = gql`
  query {
    menus {
      identifier
      label
    }
  }
`;

export const getMenu = (identifier) => {
  return gql`
    query {
      menu(identifier:"${identifier}") {
        identifier
        label
        state
        endDate
        startDate
        menuSections {
          displayOrder
          section {
            label
            description
            sectionItems {
              displayOrder
              item {
                identifier
                type
                label
                description
                price
                itemModifierGroups {
                  modifierGroup {
                    label
                    selectionRequiredMin
                    selectionRequiredMax
                    modifiers {
                      displayOrder
                      defaultQuantity
                      priceOverride
                      item {
                        type
                        label
                        description
                        price
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`;
};
