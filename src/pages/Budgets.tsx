import { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { AiOutlineRise } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";

const Budgets = () => {
  const [budgetP, setBudgetP] = useState<BudgetPeriod[]>([]);
  const [cardsBL, setCardsBL] = useState<CardsBudsgetsLeft[]>([]);
  interface CardsBudsgetsLeft {
    id: number;
    title: string;
    currency: symbol;
    amount: number;
    time: string;
  }
  interface BudgetPeriod {
    id: number;
    month: string;
    a: number;
    b: number;
    c: number;
  }
  useEffect(() => {
    fetch("/data/budgetPeriod.json")
      .then((response) => response.json())
      .then((response) => setBudgetP(response))
      .catch((error) => console.error("Error fetching data:", error));
  });
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
            className="rounded-md bg-white py-3 pl-2 shadow-md"
          >
            <h3>Grocery</h3>
          </Row>

          <Row id="budgetsCards-row-up" className="gap-x-8">
            <Col
              id="budgetsCards-col-up-big-left"
              className="mt-[1.875rem] flex flex-col justify-between rounded-md bg-white p-4 shadow-md"
            >
              <div>
                <h6>Total Balance</h6>
                <h2 className="mb-2 leading-[3rem]">$221,478</h2>
              </div>
              <div>
                <div className="flex justify-between py-2">
                  <p>Personal Funds</p>
                  <p className="text-base font-bold text-big">$32,500.28</p>
                </div>
                <Dropdown.Divider />
                <div className="flex justify-between pt-2">
                  <p>Credit Limits</p>
                  <p className="text-base font-bold text-big">$2500.00</p>
                </div>
              </div>
            </Col>
          </Row>

          <Row id="budgetsCards-row-down" className="mb-4 gap-x-8">
            <Col
              id="walletsCards-col-down-big-left"
              className="mt-[1.875rem] rounded-md bg-white p-4 shadow-md"
            >
              <div>
                <h6>Total Balance</h6>
                <p className="my-3 text-3xl font-medium text-big">$ 432568</p>
              </div>

              <Dropdown.Divider />
              <div id="percentage-1" className="flex items-center gap-1 pt-2.5">
                <span className="text-xl text-riseingPercentageColor">
                  <AiOutlineRise />
                </span>
                <p id="percentage-text-1" className=" ">
                  2.47% Last month <span className="font-bold">$24,478</span>
                </p>
              </div>
            </Col>
            <Col
              id="walletsCards-col-down-big-left"
              className="mt-[1.875rem] rounded-md bg-white p-4 shadow-md"
            >
              <div>
                <h6>Monthly Expenses</h6>
                <p className="my-3 text-3xl font-medium text-big">$ 432568</p>
              </div>

              <Dropdown.Divider />
              <div id="percentage-1" className="flex items-center gap-1 pt-2.5">
                <span className="text-xl text-riseingPercentageColor">
                  <AiOutlineRise />
                </span>
                <p id="percentage-text-1" className=" ">
                  2.47% Last month <span className="font-bold">$24,478</span>
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Budgets;
