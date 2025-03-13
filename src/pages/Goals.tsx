import { Container } from "react-bootstrap";

const Goals = () => {
  return (
    <Container id="goals-page" className="-mt-4 pb-3">
      <div id="page-up-info" className="mr-3 flex flex-col pt-4">
        <div id="goals-up" className="-ml-3">
          <h3 id="title-page">Goals</h3>
        </div>
        <div id="goals-down" className="-ml-3 mb-5 mt-3 flex justify-between">
          <p id="owner-page">Welcome to Vanja finance Management</p>
        </div>
      </div>
    </Container>
  );
};

export default Goals;
