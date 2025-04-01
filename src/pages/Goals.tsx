import { useState } from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";

const Goals = () => {
  const [cardsGL, setCardsGL] = useState<CardsGoalsLeft[]>([]);
  interface CardsGoalsLeft {
    id: number;
    title: string;
    currency: symbol;
    amount: number;
    percentage: number;
    total: number;
  }

  useState(() => {
    fetch("/data/cardsGoalsLeft.json")
      .then((response) => response.json())
      .then((response) => setCardsGL(response))
      .catch((error) => console.log("Error rettching data: ", error));
  });
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
      <Row id="bigRow" className="mr-2 gap-x-8">
        <Col id="goalsLeft-col" lg={3} xs={12}>
          {cardsGL.map((cGL) => (
            <Row
              id="walletsLeft-cards"
              className="mb-4 h-[5.69rem] rounded-md shadow-md hover:text-white"
              key={cGL.id}
            >
              <div id="cardContent" className="-ml-4 flex px-0">
                <div id="cardContent-Left">
                  <div className="ml-4 mr-8 w-14 text-3xl font-bold">
                    <CircularProgressbar
                      value={cGL.percentage}
                      text={`${cGL.percentage}%`}
                    />
                  </div>
                </div>
                <div id="cardContent-Right" className="-ml-3 flex flex-col">
                  <h3 id="cardTitle" className="text-lg">
                    {cGL.title}
                  </h3>
                  <span id="cardTitle">
                    ${cGL.amount} / ${cGL.total}
                  </span>
                </div>
              </div>
            </Row>
          ))}
        </Col>

        <Col id="goalsRight">
          <Row
            id="budgetTitle"
            className="mb-4 rounded-md bg-white py-3 pl-2 shadow-md"
          >
            <h3>Car</h3>
          </Row>

          <Row
            id="goals-secondRow-up"
            className="mb-4 w-[103.5%] rounded-md bg-white px-3 py-4 shadow-md"
          >
            <div id="goals-secondRow-up-up" className="flex justify-between">
              <p>Spend</p>
              <p>Budget</p>
            </div>
            <div
              id="goals-secondRow-up-middle"
              className="mb-2 flex justify-between"
            >
              <span className="text-2xl font-medium leading-[2.4rem] text-big">
                $1458.30
              </span>
              <span className="text-2xl font-medium leading-[2.4rem] text-big">
                $1458.30
              </span>
            </div>
            <div id="goals-secondRow-up-progressBar" className="pb-2">
              <ProgressBar now={25} className="h-2 rounded-full" />
            </div>
          </Row>

          <Row
            id="goals-thirdRow"
            className="mb-4 w-[103.5%] rounded-md bg-white px-3 py-4 shadow-md"
          >
            <div className="flex justify-between">
              <div id="goals-thirdRow-1" className="">
                <span className="">Last Month</span>
                <span className="mt-3 flex text-2xl font-medium text-big">
                  $42,678
                </span>
              </div>
              <div id="goals-thirdRow-2" className="">
                <span className="">Expenses</span>
                <span className="mt-3 flex text-2xl font-medium text-big">
                  $1,798
                </span>
              </div>
              <div id="goals-thirdRow-3" className="">
                <span className="">Taxes</span>
                <span className="mt-3 flex text-2xl font-medium text-big">
                  $255.25
                </span>
              </div>
              <div id="goals-thirdRow-4" className="">
                <span className="">Debt</span>
                <span className="mt-3 flex text-2xl font-medium text-big">
                  $365,478
                </span>
              </div>
            </div>
          </Row>

          <Row
            id="goals-forthRow"
            className="mb-4 w-[103.5%] rounded-md bg-white px-3 py-4 shadow-md"
          >
            <h4>Available by Wallet</h4>
          </Row>

          <Row
            id="goals-fifthRow"
            className="mb-4 w-[103.5%] rounded-md bg-white px-3 py-4 shadow-md"
          >
            <h4>History</h4>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Goals;
