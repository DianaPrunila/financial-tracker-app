import Dropdown from "react-bootstrap/Dropdown";
import { GoDotFill } from "react-icons/go";
// import "../index.css";
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
      className="ml-4 mr-7 w-fit"
    >
      <div id="page-up-info" className="flex flex-wrap-reverse justify-between">
        <div id="dashboard-up-left" className="mb-2">
          <h3
            id="title-page"
            className="text-r text-pageTitle font-medium text-big"
          >
            Dashboard
          </h3>
          <p
            id="owner-page"
            className="text-textGraySmall leading-7 text-small"
          >
            Welcome to Prunila finance Management
          </p>
        </div>
        <div id="dashboard-up-right" className="">
          <p className="text-small">Home --- Dashboard</p>
        </div>
      </div>

      <Container fluid id="outer-frame-first-row" className="firts mb-4 px-0">
        <Row className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {firstRow.map((f) => (
            <Col className="rounded-md bg-white p-3 shadow-md" key={f.id}>
              <Row>
                <p id="total-balance" className="font-medium text-big">
                  {f.title}
                </p>
              </Row>
              <Row id="first-row-sum" className="my-2.5">
                <p
                  id="sum-total-balance"
                  className="my-2.5 text-3xl font-medium text-big"
                >
                  $
                </p>
              </Row>
              <Dropdown.Divider />
              <Row id="percentage-1" className="flex pt-2.5">
                <span className="mr-1 text-xl text-riseingPercentageColor">
                  <AiOutlineRise />
                </span>
                <p id="percentage-text-1" className="text-small">
                  2.47% Last month $24,478
                </p>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>

      <Container id="second-row" className="px-0">
        <Row className="grid w-full grid-cols-1 gap-x-6 lg:grid-cols-[60%_40%]">
          <Col id="balance-trends-col">
            <Row
              id="outer-frame-balance-trends"
              className="mb-4 rounded-md bg-white p-4 shadow-md"
            >
              <Col id="balance-trends-frame-up">
                <Row id="balance-trends-frame-left">
                  <h6
                    id="title-balance-trends"
                    className="text-framesTitle font-medium text-big"
                  >
                    Balance Trends
                  </h6>
                  <p className="text-[2rem] font-medium text-big">$</p>
                </Row>
              </Col>

              <Col id="balance-trends-frame-right">
                <Row>
                  <p id="last-month" className="text-small">
                    Last Month
                  </p>
                  <p id="balance-trends-percentage">xx.yy%</p>
                </Row>
              </Col>

              <Col xs={12} className="text-center">
                <img
                  src="/images/GRAPH.png"
                  alt="Graph"
                  id="balance-trends-graph"
                  className="w-fit"
                />
              </Col>
            </Row>
          </Col>
          <Col id="monthly-expenses-col" className="mr-6">
            <Row
              id="outer-frame-monthly-breakdown"
              className="w-fit rounded-md bg-white p-4 shadow-md"
            >
              <Col id="monthly-brakdown-frame">
                <h4
                  id="monthly-brakdown-title"
                  className="text-framesTitle font-medium text-big"
                >
                  Monthly Expenses Breakdown
                </h4>
              </Col>
              <Row id="bar-expenses" className="my-3">
                bar expenses
              </Row>

              <div id="monthly-expenses-categories">
                {secondRow.map((s) => (
                  <Col
                    key={s.id}
                    id="monthly-expenses-down"
                    className="flex-none"
                  >
                    <Row className="">
                      <Col
                        id="monthly-expenses-left"
                        xs={6}
                        className="flex min-w-max flex-nowrap px-0"
                      >
                        <Row className="">
                          <Col
                            id="dots"
                            className="flex flex-nowrap px-0 text-2xl"
                            style={{ color: s.color }}
                          >
                            <GoDotFill />
                          </Col>
                          <Col
                            id="category-name-div"
                            className="flex flex-nowrap p-0 text-small"
                          >
                            <p
                              id="category-name-title"
                              className="font-medium text-sideBar"
                            >
                              {s.title}
                            </p>
                          </Col>
                        </Row>
                      </Col>

                      <Col
                        id="monthly-expenses-right"
                        className="flex-none justify-items-end"
                      >
                        <Row className="flex justify-end">
                          <Col
                            id="right-breakdown"
                            className="flex min-w-max flex-nowrap px-0"
                          >
                            <p id="category-sum" className="mx-3">
                              {s.sum} $
                            </p>
                          </Col>
                          <Col
                            id="category-percentage"
                            className="flex min-w-max flex-nowrap px-0"
                          >
                            <p className="font-medium">{s.perc}%</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>

      <div id="outer-frame-monthly-budgets" className="">
        <div id="monthly-budgets-frame" className="">
          <div id="monthly-budgets-title-frame" className="">
            <h4 id="monthly-budget-title" className="big">
              Monthly Budget
            </h4>
          </div>
          <div id="budgets-categories" className="">
            <div id="categ-1" className="">
              <div id="logo" className="">
                logo
              </div>
              <div id="categ-writing" className="">
                <p id="" className="">
                  Grocery Stores
                </p>
                <p id="slash" className="">
                  75/100
                </p>
              </div>
              <div id="bar" className="">
                bar
              </div>
            </div>
          </div>
        </div>
      </div>

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
