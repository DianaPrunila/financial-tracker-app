import Dropdown from "react-bootstrap/Dropdown";
import { GoDotFill } from "react-icons/go";
import "../index.css";
import { AiOutlineRise } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Dashboard = () => {
  const firstRow = [
    {
      id: 1,
      title: "Total Balance",
      sum: "$",
      perc: "not sure how",
    },
    {
      id: 2,
      title: "Total Period Change",
      sum: "$",
      perc: "not sure how",
    },
    {
      id: 3,
      title: "Total Period Expenses",
      sum: "$",
      perc: "not sure how",
    },
    {
      id: 4,
      title: "Total period Income",
      sum: "$",
      perc: "not sure how",
    },
  ];
  const secondRow = [
    { id: 1, title: "Food", color: "#DD2626", sum: "sum", perc: "perc" },
    { id: 2, title: "Transport", color: "#F97316", sum: "sum", perc: "perc" },
    { id: 3, title: "Healthcare", color: "#ffcc00", sum: "sum", perc: "perc" },
    { id: 4, title: "Education", color: "#F7ED4C", sum: "sum", perc: "perc" },
    { id: 5, title: "Clothes", color: "#84CC16", sum: "sum", perc: "perc" },
    { id: 6, title: "Pets", color: "#22C55E", sum: "sum", perc: "perc" },
    {
      id: 7,
      title: "Entertainment",
      color: "#06B6D4 ",
      sum: "sum",
      perc: "perc",
    },
    { id: 8, title: "Other", color: "#78716C", sum: "sum", perc: "perc" },
  ];
  return (
    <div
      id="dashboard-page"
      // Home---Dashboard se duce in sus cand e pe exran mic
      className="ml-4 w-full"
    >
      <div id="page-up-info" className="flex flex-wrap-reverse justify-between">
        <div id="dashboard-up-left" className="-ml-3 mb-5">
          <h3
            id="title-page"
            className="mt-2 text-pageTitle font-medium text-big"
          >
            Dashboard
          </h3>
          <p id="owner-page" className="mt-1 leading-7 text-small">
            Welcome to Prunila finance Management
          </p>
        </div>
        <div id="dashboard-up-right" className="">
          <p className="text-small">Home --- Dashboard</p>
        </div>
      </div>

      <Container fluid id="outer-frame-first-row" className="mb-4 px-0">
        <Row className="grid grid-cols-1 gap-7 pr-3 sm:grid-cols-2 lg:grid-cols-4">
          {firstRow.map((f) => (
            <Col className="rounded-md bg-white px-4 py-6 shadow-md" key={f.id}>
              <Row>
                <p id="total-balance" className="font-medium text-big">
                  {f.title}
                </p>
              </Row>
              <Row id="first-row-sum" className="my-2.5">
                <p
                  id="sum-total-balance"
                  className="text-3xl font-medium text-big"
                >
                  $
                </p>
              </Row>
              <Dropdown.Divider />
              <div id="percentage-1" className="flex items-center gap-1 pt-2.5">
                <span className="text-xl text-riseingPercentageColor">
                  <AiOutlineRise />
                </span>
                <p id="percentage-text-1" className="text-small">
                  2.47% Last month $24,478
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Container id="second-row" className="px-0">
        <Row className="grid w-fit grid-cols-1 gap-x-7 lg:grid-cols-[65%_36%]">
          <div
            id="outer-frame-balance-trends"
            className="mb-4 rounded-md bg-white p-4 shadow-md"
          >
            <div id="balance-trends-frame" className="">
              <div
                id="balance-trands-frame-up"
                className="flex justify-between"
              >
                <div id="balance-trends-frame-left">
                  <h4
                    id="title-balance-trends"
                    className="text-framesTitle font-medium text-big"
                  >
                    Balance Treends
                  </h4>
                  <p className="my-3 text-3xl font-medium text-big">$</p>
                </div>
                <div id="balance-trends-frame-right" className="">
                  <p id="period " className="text-categTitle">
                    Last Month
                  </p>
                  <p id="percentage" className="my-2 justify-self-end">
                    %
                  </p>
                </div>
              </div>
              <div id="graph" className="">
                <img
                  src="/images/GRAPH.png"
                  alt="Graph"
                  id="balance-trends-graph"
                  className="w-fit"
                />
              </div>
            </div>
          </div>

          <div
            id="outer-frame-monthly-breakdown"
            className="h-fit rounded-md bg-white p-4 shadow-md"
          >
            <div id="monthly-brakdown-frame" className="">
              <h4
                id="monthly-brakdown-title"
                className="text-framesTitle font-medium text-big"
              >
                Monthly Expense Breakdown
              </h4>
              <div id="bar-expenses" className="mb-2 mt-3">
                bar expenses
              </div>
              <div
                id="monthly-expenses-catergories"
                className="divide-y divide-solid"
              >
                {secondRow.map((s) => (
                  <div
                    key={s.id}
                    id="monthly-expenses-down"
                    className="flex justify-between pt-2.5"
                  >
                    <div id="monthly-expenses-left" className="-ml-2 flex">
                      <div
                        id="dots"
                        className="text-3xl"
                        style={{ color: s.color }}
                      >
                        <GoDotFill />
                      </div>
                      <div id="category-name-div" className="text-small">
                        <p id="category-name-title" className="font-medium">
                          {s.title}
                        </p>
                      </div>{" "}
                    </div>{" "}
                    <div id="monthly-expenses-right" className="flex">
                      <div id="right-breakdown" className="">
                        <p id="category-sum" className="pr-2.5">
                          {s.sum} $
                        </p>
                      </div>
                      <div id="category-percentage">
                        <p className="font-medium"> {s.perc}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Row>
      </Container>

      <div id="outer-frame-income-vs-expenses" className="">
        <div id="income-vs-expenses-frame" className="">
          <div id="income-vs-expenses-title-frame" className="">
            <h4 id="income-vs-expenses-title" className="big">
              Monty Income vs Expenses
            </h4>
          </div>
          <div id="income-vs-expenses-graph" className="">
            Graph
          </div>
        </div>
      </div>

      <div id="outer-frame-weekly-expenses" className="">
        <div id="weekly-expenses-frame" className="">
          <div id="weekly-expenses-title-frame" className="">
            <h4 id="weekly-expenses-title" className="big">
              Weekly Expenses
            </h4>
          </div>
          <div id="weekly-expenses-graph" className="">
            Graph
          </div>
        </div>
      </div>

      <div id="outer-frame-payements-history" className="">
        <div id="frame-payement-history" className="">
          <div id="frame-payement-history-title" className="">
            <h4 id="payement-history-title" className="big">
              Payement History
            </h4>
            <p>See more</p>
          </div>
          <div id="-categories" className="">
            <div id="payement-history-categ -1" className="">
              <div id="frame-categ-1-tile+time" className="">
                <h5 id="payement-history-caterg-1-title" className="">
                  Electity
                </h5>
                <p id="payement-history-categor-1-time" className="">
                  January
                </p>
              </div>
              <div id="payement-history-frame-categ-1-sum+state" className="">
                <h5 id="payement-history-caterg-1-sum" className="">
                  +450.00
                </h5>
                <div id="payement-history-paid-padding" className="">
                  <p id="payement-history-categor-1-state" className="">
                    Paid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
