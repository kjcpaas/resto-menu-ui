import { useQuery } from "@apollo/client";
import { getMenuList } from "../queries";

import { Link } from "react-router-dom";

const HomePage = () => {
  const { loading, error, data } = useQuery(getMenuList);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <div>
        <h1>Choose your menu</h1>
        <ul>
          {data.menus.map(
            ({ label, identifier }: { label: string; identifier: string }) => {
              return (
                <li key={identifier}>
                  <Link to={`/menus/${identifier}`}>{label}</Link>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
