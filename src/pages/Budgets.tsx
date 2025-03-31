import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GoDotFill } from "react-icons/go";
import ProgressBar from "react-bootstrap/ProgressBar";
import BPBarchart from "../parts/BPBarchart";

const Budgets = () => {
  const [cardsBL, setCardsBL] = useState<CardsBudsgetsLeft[]>([]);
  interface CardsBudsgetsLeft {
    id: number;
    title: string;
    currency: symbol;
    amount: number;
    time: string;
  }

  useState(() => {
    fetch("/data/cardsBudgetsLeft.json")
      .then((response) => response.json())
      .then((response) => setCardsBL(response))
      .catch((error) => console.log("Error fetching data: ", error));
  });

  return (
    <Container id="budgets-page" className="-mt-4 pb-3">
      <div id="page-up-info" className="mr-3 flex flex-col pt-4">
        <div id="dashboard-up" className="-ml-3">
          <h3 id="title-page">Wallets</h3>
        </div>
        <div
          id="dashboard-down"
          className="-ml-3 mb-5 mt-3 flex justify-between"
        >
          <p id="owner-page">Welcome to Vanja finance Management</p>
        </div>
      </div>
      <Row id="bigRow" className="mr-2 gap-x-8">
        <Col id="budgetsLeft" lg={3} xs={12}>
          {cardsBL.map((cBL) => (
            <Row
              id="walletsLeft-cards"
              className="mb-4 h-[5.69rem] rounded-md shadow-md hover:text-white"
              key={cBL.id}
            >
              <div id="cardContent" className="-ml-4 flex px-0">
                <div id="cardContent-Left">
                  <span className="-mt-7 grid text-[7rem] text-[#E1E1F9]">
                    <GoDotFill />
                  </span>
                </div>
                <div id="cardContent-Right" className="-ml-3 flex flex-col">
                  <h3 id="cardTitle" className="text-lg">
                    {cBL.title}
                  </h3>
                  <span id="cardTitle">${cBL.amount}</span>
                </div>
              </div>
            </Row>
          ))}
        </Col>

        <Col id="budgetsRight">
          <Row
            id="budgetTitle"
            className="mb-4 rounded-md bg-white py-3 pl-2 shadow-md"
          >
            <h3>Grocery</h3>
          </Row>

          <Row
            id="budgets-secondRow-up"
            className="mb-4 w-[103.5%] rounded-md bg-white px-3 py-4 shadow-md"
          >
            <div id="budgets-secondRow-up-up" className="flex justify-between">
              <p>Spend</p>
              <p>Budget</p>
            </div>
            <div
              id="budgets-secondRow-up-middle"
              className="mb-2 flex justify-between"
            >
              <span className="text-2xl font-medium leading-[2.4rem] text-big">
                $1458.30
              </span>
              <span className="text-2xl font-medium leading-[2.4rem] text-big">
                $1458.30
              </span>
            </div>
            <div id="budgets-secondRow-up-progressBar" className="pb-2">
              <ProgressBar now={25} className="h-2 rounded-full" />
            </div>
          </Row>

          <Row
            id="budgets-thirdRow"
            className="mb-4 w-[103.5%] rounded-md bg-white px-3 py-4 shadow-md"
          >
            <div className="flex justify-between">
              <div id="budgets-thirdRow-1" className="">
                <span className="">Last Month</span>
                <span className="mt-3 flex text-2xl font-medium text-big">
                  $42,678
                </span>
              </div>
              <div id="budgets-thirdRow-2" className="">
                <span className="">Expenses</span>
                <span className="mt-3 flex text-2xl font-medium text-big">
                  $1,798
                </span>
              </div>
              <div id="budgets-thirdRow-3" className="">
                <span className="">Taxes</span>
                <span className="mt-3 flex text-2xl font-medium text-big">
                  $255.25
                </span>
              </div>
              <div id="budgets-thirdRow-4" className="">
                <span className="">Debt</span>
                <span className="mt-3 flex text-2xl font-medium text-big">
                  $365,478
                </span>
              </div>
            </div>
          </Row>

          <Row
            id="budgets-forthRow"
            className="w-[103.5%] rounded-md bg-white px-3 py-4 shadow-md"
          >
            <Col id="budget-period-col" xs={12} lg={8}>
              <div id="title-budget-period">
                <h4 className="mb-4"> Budget Period</h4>
              </div>
              <div id="budgetPeriod-chart" className="-ml-10 h-[83%]">
                <BPBarchart />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Budgets;
