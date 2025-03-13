import { Container } from "react-bootstrap";

const Analytics = () => {
  return (
    <Container id="analytics-page" className="-mt-4 pb-3">
      <div id="page-up-info" className="mr-3 flex flex-col pt-4">
        <div id="analytics-up" className="-ml-3">
          <h3 id="title-page">Analytics</h3>
        </div>
        <div
          id="analytics-down"
          className="-ml-3 mb-5 mt-3 flex justify-between"
        >
          <p id="owner-page">Welcome to Vanja finance Management</p>
        </div>
      </div>
    </Container>
  );
};

export default Analytics;
