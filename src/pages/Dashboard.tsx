import Dropdown from "react-bootstrap/Dropdown";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { GoDotFill } from "react-icons/go";
import { AiOutlineRise } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RiBillLine } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";
import { GoMortarBoard } from "react-icons/go";
import { LuClapperboard } from "react-icons/lu";
import { BsScissors } from "react-icons/bs";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

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
  const monthlyBreakdown = [
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
  const transactionHistory = [
    {
      id: 1,
      iconColor: "#10B981",
      icon: <BsScissors />,
      name: "Beauty",
      date: "date",
      description: "description of the transaction",
      amount: "amount",
      currency: "currency",
    },
    {
      id: 2,
      iconColor: "#14B8A6",
      icon: <RiBillLine />,
      name: "Bills & Fees",
      date: "date",
      description: "description of the transaction",
      amount: "amount",
      currency: "currency",
    },
    {
      id: 3,
      iconColor: "#06B6D4",
      icon: <FaCarSide />,
      name: "Car",
      date: "date",
      description: "description of the transaction",
      amount: "amount",
      currency: "currency",
    },
    {
      id: 4,
      iconColor: "#0EA5E9",
      icon: <GoMortarBoard />,
      name: "Education",
      date: "date",
      description: "description of the transaction",
      amount: "amount",
      currency: "currency",
    },
    {
      id: 5,
      iconColor: "#3B82F6",
      icon: <LuClapperboard />,
      name: "Entertainment",
      date: "date",
      description: "description of the transaction",
      amount: "amount",
      currency: "currency",
    },
  ];
  const savingGoals = [
    {
      id: 1,
      color: "#2f2cd8",
      goal: "Vacantion",
      value: 80,
      percentage: 80,
    },
    {
      id: 2,
      color: "#2f2cd8",
      goal: "Gift",
      value: 60,
      percentage: 60,
    },
    {
      id: 3,
      color: "#2f2cd8",
      goal: "New Car",
      value: 30,
      percentage: 30,
    },
    {
      id: 4,
      color: "#2f2cd8",
      goal: "Laptop",
      value: 90,
      percentage: 90,
    },
  ];
  return (
    <div
      id="dashboard-page"
      // Home---Dashboard se duce in sus cand e pe exran mic
      className=""
    >
      <div id="page-up-info" className="flex justify-between">
        <div id="dashboard-up-left" className="-ml-3 mb-5">
          <h3 id="title-page" className="mt-2 text-big">
            Dashboard
          </h3>
          <p id="owner-page" className="mt-1 leading-7">
            Welcome to Prunila finance Management
          </p>
        </div>
        <div id="dashboard-up-right" className="">
          <p className=" ">Home --- Dashboard</p>
        </div>
      </div>

      <Container id="outer-frame-first-row" className="mb-4 px-0">
        <Row className="grid grid-cols-1 gap-6 pr-3 sm:grid-cols-2 lg:grid-cols-4">
          {firstRow.map((f) => (
            <Col className="rounded-md bg-white px-4 py-6 shadow-md" key={f.id}>
              <Row>
                <h6 id="total-balance" className="text-big">
                  {f.title}
                </h6>
              </Row>
              <Row id="first-row-sum" className="my-2.5">
                <p id="sum-total-balance" className="text-3xl text-big">
                  $
                </p>
              </Row>
              <Dropdown.Divider />
              <div id="percentage-1" className="flex items-center gap-1 pt-2.5">
                <span className="text-xl text-riseingPercentageColor">
                  <AiOutlineRise />
                </span>
                <p id="percentage-text-1" className=" ">
                  2.47% Last month $24,478
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Container id="outer-frame-second-row" className="px-0">
        <Row className="grid w-full grid-cols-1 gap-x-8 lg:grid-cols-[65%_33.5%]">
          <Col id="balance-trends-col" className="pr-1">
            <Row
              id="outer-frame-balance-trends"
              className="mb-4 rounded-md bg-white p-4 shadow-md"
            >
              <div
                id="balance-trends-frame-up"
                className="flex justify-between"
              >
                <div id="balance-trends-frame-left">
                  <h6 id="title-balance-trends" className="text- text-big">
                    Balance Trends
                  </h6>
                  <p className="text-[2rem] text-big">$</p>
                </div>

                <div id="balance-trends-frame-right">
                  <p id="last-month" className=" ">
                    Last Month
                  </p>
                  <p id="balance-trends-percentage">xx.yy%</p>
                </div>
              </div>

              <Col className="text-center">
                <img
                  src="/images/GRAPH.png"
                  alt="Graph"
                  id="balance-trends-graph"
                  className="w-fit"
                />
              </Col>
            </Row>
          </Col>
          <Col
            id="monthly-breakdown-col"
            className="h-fit rounded-md bg-white p-4 shadow-md"
          >
            <Row id="monthly-brakdown-frame" className="">
              <h4 id="monthly-brakdown-title" className="text- text-big">
                Monthly Expense Breakdown
              </h4>
              <div id="bar-expenses" className="my-3">
                bar expenses
              </div>
              <div id="monthly-expenses-catergories" className="divide-y">
                {monthlyBreakdown.map((s) => (
                  <div
                    key={s.id}
                    id="monthly-expenses-down"
                    className="flex justify-between pt-2.5"
                  >
                    <div id="monthly-expenses-left" className="flex">
                      <div
                        id="dots"
                        className="text-3xl"
                        style={{ color: s.color }}
                      >
                        <GoDotFill />
                      </div>
                      <div id="category-name-div" className="">
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
            </Row>
          </Col>
        </Row>
      </Container>

      <Container id="outer-frame-third-row" className="">
        <Row className="my-6 grid grid-cols-1 gap-6 lg:grid-cols-[38.5%_60%]">
          <Col
            id="monthly-budget-col"
            className="rounded-md bg-white p-4 shadow-md"
          >
            <div id="title-monthly-budget" className="">
              <h4> Monthly Budget</h4>
            </div>
          </Col>
          <Col
            id="income-vs-expenses-col"
            className="rounded-md bg-white p-4 shadow-md"
          >
            <div id="title-income-vs-expenses" className="">
              <h4> Monthly Income vs Expenses</h4>
            </div>
            <div className=""> GRAPH</div>
          </Col>
        </Row>
      </Container>

      <Container id="outer-frame-forth-row" className="">
        <Row className="my-6 grid grid-cols-1 gap-6 lg:grid-cols-[65%_33.5%]">
          <Col
            id="weekly-expenses-col"
            className="rounded-md bg-white p-4 shadow-md"
          >
            <div id="title-weekly-expenses" className="">
              <h4> Weekly Expenses</h4>
            </div>
            <div className=""> GRAPH</div>
          </Col>
          <Col
            id="payment-history-col"
            className="rounded-md bg-white p-4 shadow-md"
          >
            <div id="title-payment-history" className="flex justify-between">
              <h4> Payment History</h4>
              <a href="" className="">
                See more
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container id="outer-frame-fifth-row" className="">
        <Row className="-mb-4 mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[38.5%_60%]">
          {/* Saving Goals Section */}
          <Col
            id="saving-goals-col"
            className="rounded-md bg-white p-4 shadow-md"
          >
            <div id="title-saving-goals" className="mb-4">
              <h4>Saving Goals</h4>
            </div>
            <div id="wheels" className="flex flex-wrap justify-between">
              {savingGoals.map((s) => (
                <div id="wheel-1" key={s.id} className="w-28">
                  <CircularProgressbar
                    value={s.percentage}
                    text={`${s.percentage}%`}
                    className="font-bold"
                    styles={buildStyles({
                      pathColor: "#2f2cd8",
                      textColor: "#7184ad",
                      textSize: "0.875rem",
                    })}
                  />
                  <div className="m-2 flex justify-center">
                    <h6>{s.goal}</h6>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Transaction History Section */}
          <Col
            id="transaction-history-col"
            className="overflow-x-scroll rounded-md bg-white p-4 pb-0 shadow-md"
          >
            <div id="title-transaction-history">
              <h4>Transaction History</h4>
            </div>
            <MDBTable className="w-full">
              <MDBTableHead>
                <tr>
                  <th id="title-category" scope="col">
                    Category
                  </th>
                  <th id="title-date" scope="col">
                    Date
                  </th>
                  <th id="title-description" scope="col">
                    Description
                  </th>
                  <th id="title-amount" scope="col">
                    Amount
                  </th>
                  <th id="title-currency" scope="col">
                    Currency
                  </th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {transactionHistory.map((t) => (
                  <tr key={t.id} className="text-small">
                    <th scope="row" className="font-light text-black">
                      <div className="flex">
                        <div
                          className="mr-2 rounded-full p-2 text-xl text-white"
                          style={{ backgroundColor: t.iconColor }}
                        >
                          {t.icon}
                        </div>
                        <div className="font-normal text-small">{t.name}</div>
                      </div>
                    </th>
                    <td>{t.date}</td>
                    <td>{t.description}</td>
                    <td>{t.amount}</td>
                    <td>{t.currency}</td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
