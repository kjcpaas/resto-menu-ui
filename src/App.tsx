import { useState } from "react";
import "./App.css";
import { useQuery } from "@apollo/client";
import MenuComponent from "./MenuComponent";
import { getMenuList } from "./queries";

function App() {
  const { loading, error, data } = useQuery(getMenuList);
  const [selectedMenuId, setSelectedMenuId] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <div>
        Choose a menu:
        <ul>
          {data.menus.map(({ label, identifier }) => {
            return (
              <li
                key={identifier}
                onClick={() => setSelectedMenuId(identifier)}
              >
                {label}
              </li>
            );
          })}
        </ul>
      </div>

      {selectedMenuId && <MenuComponent menuId={selectedMenuId} />}
    </>
  );
}

export default App;
