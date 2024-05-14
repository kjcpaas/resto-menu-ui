import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

import { getMenuList } from "../queries";
import LoadingPage from "./Loading";

const HomePage = () => {
  const { loading, error, data } = useQuery(getMenuList);

  if (loading) return <LoadingPage />;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <div>
        <h1 className="text-center">Choose your menu</h1>
        <ListGroup>
          {data.menus.map(
            ({ label, identifier }: { label: string; identifier: string }) => {
              return (
                <ListGroup.Item key={identifier}>
                  <Link to={`/menus/${identifier}`}>{label}</Link>
                </ListGroup.Item>
              );
            }
          )}
        </ListGroup>
      </div>
    </>
  );
};

export default HomePage;
