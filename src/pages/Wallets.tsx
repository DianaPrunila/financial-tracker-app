import { Container } from "react-bootstrap";

const Wallets = () => {
  return (
    <Container id="dashboard-page" className="-mt-4 pb-3">
      <div id="page-up-info" className="mr-3 flex flex-col pt-4">
        <div id="dashboard-up" className="-ml-3">
          <h3 id="title-page">Dashboard</h3>
        </div>
        <div
          id="dashboard-down"
          className="-ml-3 mb-5 mt-3 flex justify-between"
        >
          <p id="owner-page">Welcome to Vanja finance Management</p>
        </div>
      </div>
    </Container>
  );
};

export default Wallets;
