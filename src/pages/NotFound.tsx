import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <p>
        Back to <Link to="/">Home</Link>.
      </p>
    </>
  );
};

export default NotFoundPage;
