import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <div className="text-center">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for could not be found.</p>
        <p>
          Back to <Link to="/">Home</Link>.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
