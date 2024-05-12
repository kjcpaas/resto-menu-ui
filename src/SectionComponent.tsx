import MenuItemComponent from "./MenuItemComponent";

const SectionComponent = ({ section }) => {
  const { label, description, sectionItems } = section;

  return (
    <div>
      <h2>{label}</h2>
      <div>{description}</div>
      <div>
        {sectionItems &&
          sectionItems.map(({ item }) => {
            return <MenuItemComponent key={item.identifier} item={item} />;
          })}
      </div>
    </div>
  );
};

export default SectionComponent;
