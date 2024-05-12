const MenuItemComponent = ({ item }) => {
  const { label, description, price } = item;
  return (
    <div>
      <h3>{label}</h3>
      <div>{description}</div>
      <img src="/not_found" />
      <div>Price: {price}</div>
    </div>
  );
};

export default MenuItemComponent;
