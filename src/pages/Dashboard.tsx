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
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { LuCarrot } from "react-icons/lu";
import { FaBusAlt } from "react-icons/fa";
import { FaCat } from "react-icons/fa6";
import { IoShirtOutline } from "react-icons/io5";
import ProgressBar from "react-bootstrap/ProgressBar";
import { BarChart } from "@mui/x-charts/BarChart";
// import LineChart from "../parts/LineChart";

import "react-circular-progressbar/dist/styles.css";
import { LineChart } from "@mui/x-charts";

const Dashboard = () => {
  const firstRow = [
    {
      id: 1,
      title: "Total Balance",
      sum: "432568",
      perc: "not sure how",
    },
    {
      id: 2,
      title: "Total Period Change",
      sum: "245860",
      perc: "not sure how",
    },
    {
      id: 3,
      title: "Total Period Expenses",
      sum: "25.35",
      perc: "not sure how",
    },
    {
      id: 4,
      title: "Total period Income",
      sum: "5000",
      perc: "not sure how",
    },
  ];

  const trends = [
    {
      id: 1,
      month: "4 Jan",
      active: 0,
      inactive: 40,
    },
    {
      id: 2,
      month: "5 Jan",
      active: 65,
      inactive: 105,
    },
    {
      id: 3,
      month: "6 Jan",
      active: 52,
      inactive: 92,
    },
    {
      id: 4,
      month: "7 Jan",
      active: 115,
      inactive: 115,
    },
    {
      id: 5,
      month: "8 Jan",
      active: 98,
      inactive: 138,
    },
    {
      id: 6,
      month: "9 Jan",
      active: 165,
      inactive: 205,
    },
    {
      id: 7,
      month: "10 Jan",
      active: 125,
      inactive: 165,
    },
  ];

  const breackdown = [
    { id: 1, title: "Food", color: "#DD2626", sum: "500", perc: 12.5 },
    { id: 2, title: "Transport", color: "#F97316", sum: "500", perc: 12.5 },
    { id: 3, title: "Healthcare", color: "#ffcc00", sum: "500", perc: 12.5 },
    { id: 4, title: "Education", color: "#F7ED4C", sum: "500", perc: 12.5 },
    { id: 5, title: "Clothes", color: "#84CC16", sum: "500", perc: 12.5 },
    { id: 6, title: "Pets", color: "#22C55E", sum: "500", perc: 12.5 },
    {
      id: 7,
      title: "Entertainment",
      color: "#06B6D4 ",
      sum: 500,
      perc: 12.5,
    },
    { id: 8, title: "Other", color: "#78716C", sum: 500, perc: 12.5 },
  ];

  const budget = [
    {
      id: 1,
      iconColor: "#22C55E",
      icon: <LuCarrot />,
      title: "Grocery Stores",
      nr: 75,
    },
    {
      id: 2,
      iconColor: "#06B6D4",
      icon: <FaBusAlt />,
      title: "Transportation",
      nr: 25,
    },
    { id: 3, iconColor: "#0EA5E9", icon: <FaCat />, title: "Pets", nr: 50 },
    {
      id: 4,
      iconColor: "#6366F1",
      icon: <GoMortarBoard />,
      title: "Education",
      nr: 45,
    },
    {
      id: 5,
      iconColor: "#8B5CF6",
      icon: <IoShirtOutline />,
      title: "Clothes",
      nr: 35,
    },
  ];

  const incomeVsExpenses = [
    {
      id: 1,
      month: "Jan",
      income: 2500,
      expenses: 1500,
    },
    {
      id: 2,
      month: "Feb",
      income: 2500,
      expenses: 1500,
    },
    {
      id: 3,
      month: "Mar",
      income: 2500,
      expenses: 1500,
    },
    {
      id: 4,
      month: "Apr",
      income: 2500,
      expenses: 1500,
    },
    {
      id: 5,
      month: "May",
      income: 2500,
      expenses: 1500,
    },
    {
      id: 6,
      month: "Jun",
      income: 2500,
      expenses: 1500,
    },
    {
      id: 7,
      month: "Jul",
      income: 5000,
      expenses: 3000,
    },
    {
      id: 8,
      month: "Aug",
      income: 2500,
      expenses: 1500,
    },
    {
      id: 10,
      month: "Sep",
      income: 2500,
      expenses: 1500,
    },
    {
      id: 11,
      month: "Oct",
      income: 2500,
      expenses: 1500,
    },
    {
      id: 11,
      month: "Nov",
      income: 5000,
      expenses: 1500,
    },
    {
      id: 12,
      month: "Dec",
      income: 2500,
      expenses: 3000,
    },
  ];

  type Expense = {
    id: number;
    week: string;
    [key: string]: string | number;
  };

  const weeklyExpenses: Expense[] = [
    { id: 1, week: "1st", a: 30, b: 20, c: 33, d: 24, e: 31 },
    { id: 2, week: "2nd", a: 34, b: 21, c: 3, d: 25, e: 35 },
    { id: 3, week: "3rd", a: 36, b: 5, c: 25, d: 84, e: 7 },
    { id: 4, week: "4th", a: 40, b: 23, c: 44, d: 22, e: 2 },
  ];

  const expenseCategories = Object.keys(weeklyExpenses[0]).filter(
    (key) => key !== "id" && key !== "week"
  );

  const categoryColors: Record<string, string> = {
    a: "#D946EF",
    b: "#9A2EFF",
    c: "#6D2EFF",
    d: "#3336FF",
    e: "#146EFF",
  };

  const payementHistory = [
    {
      id: 1,
      name: "Electricity",
      date: "2 february 2025",
      amount: "30.00",
      status: "Paid",
    },
    {
      id: 2,
      name: "Internet",
      date: "2 february 2025",
      amount: "20.00",
      status: "Due",
    },
    {
      id: 3,
      name: "Spoify",
      date: "2 february 2025",
      amount: "10.00",
      status: "Cancelled",
    },
    {
      id: 4,
      name: "Groceries",
      date: "2 february 2025",
      amount: "50.00",
      status: "Paid",
    },
  ];

  const transactionHistory = [
    {
      id: 1,
      iconColor: "#10B981",
      icon: <BsScissors />,
      name: "Beauty",
      date: "12.12.2025",
      description: "Description of the transaction",
      amount: "-45.20",
      currency: "EUR",
    },
    {
      id: 2,
      iconColor: "#14B8A6",
      icon: <RiBillLine />,
      name: "Bills & Fees",
      date: "12.12.2025",
      description: "Description of the transaction",
      amount: "-24.30",
      currency: "EUR",
    },
    {
      id: 3,
      iconColor: "#06B6D4",
      icon: <FaCarSide />,
      name: "Car",
      date: "12.12.2025",
      description: "Description of the transaction",
      amount: "-62.20",
      currency: "EUR",
    },
    {
      id: 4,
      iconColor: "#0EA5E9",
      icon: <GoMortarBoard />,
      name: "Education",
      date: "12.12.2025",
      description: "Description of the transaction",
      amount: "-120.00",
      currency: "EUR",
    },
    {
      id: 5,
      iconColor: "#3B82F6",
      icon: <LuClapperboard />,
      name: "Entertainment",
      date: "12.12.2025",
      description: "Description of the transaction",
      amount: "-37.70",
      currency: "EUR",
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
    <Container id="dashboard-page" className="-mb-5 -mt-6 pb-3">
      <div id="page-up-info" className="mr-3 flex flex-col pt-4">
        <div id="dashboard-up" className="-ml-3">
          <h3 id="title-page">Dashboard</h3>
        </div>
        <div
          id="dashboard-down"
          className="-ml-3 mb-5 mt-3 flex justify-between"
        >
          <p id="owner-page">Welcome to Prunila finance Management</p>
          <p>Home --- Dashboard</p>
        </div>
      </div>
      <div id="boxes" className="content-between px-0">
        <Row
          id="outer-frame-first-row"
          className="mr-1 grid grid-cols-1 gap-7 pr-2 sm:grid-cols-2 lg:grid-cols-4"
        >
          {firstRow.map((f) => (
            <Col className="rounded-md bg-white px-4 py-6 shadow-md" key={f.id}>
              <Row>
                <h6 id="total-balance" className="text-big">
                  {f.title}
                </h6>
              </Row>
              <Row id="first-row-sum" className="my-2.5">
                <p
                  id="sum-total-balance"
                  className="text-3xl font-medium text-big"
                >
                  € {f.sum}
                </p>
              </Row>
              <Dropdown.Divider />
              <div id="percentage-1" className="flex items-center gap-1 pt-2.5">
                <span className="text-xl text-riseingPercentageColor">
                  <AiOutlineRise />
                </span>
                <p id="percentage-text-1" className=" ">
                  2.47% Last month € 24,478
                </p>
              </div>
            </Col>
          ))}
        </Row>

        <Row id="outer-frame-second-row" className="mt-4 w-full gap-7 px-0">
          <Col id="balance-trends-col" xs={12} lg={8}>
            <Row
              id="outer-frame-balance-trends"
              className="h-full rounded-md bg-white p-4 shadow-md"
            >
              <div
                id="balance-trends-frame-up"
                className="flex justify-between"
              >
                <div id="balance-trends-frame-left">
                  <h6 id="title-balance-trends" className="text-big">
                    Balance Trends
                  </h6>
                  <p className="text-[2rem] font-medium text-big">€ 432568</p>
                </div>

                <div
                  id="balance-trends-frame-right"
                  className="flex flex-col justify-end"
                >
                  <p id="last-month" className=" ">
                    Last Month
                  </p>
                  <p id="balance-trends-percentage">xx.yy%</p>
                </div>
              </div>
              <div id="line-chart" className="h-[85%]">
                <LineChart
                  xAxis={[
                    {
                      data: trends.map((t) => t.month),
                    },
                  ]}
                  series={[
                    {
                      label: "Active",
                      data: trends.map((t) => t.inactive),
                      area: true,
                      stack: "value",
                    },

                    {
                      label: "Inactive",
                      data: trends.map((t) => t.active),
                      area: true,
                      stack: "value",
                    },
                  ]}
                />
              </div>
            </Row>
          </Col>
          <Col
            id="weekly-breakdown-col"
            className="h-fit rounded-md bg-white p-4 shadow-md"
          >
            <Row id="monthly-breakdown-frame">
              <h4 id="monthly-breakdown-title" className="text-big">
                Monthly Expense Breakdown
              </h4>
              <div id="bar-expenses" className="my-3">
                <ProgressBar className="h-1.5 rounded-full">
                  {breackdown.map((br) => (
                    <ProgressBar
                      key={br.id}
                      now={br.perc}
                      style={{ backgroundColor: br.color }}
                    />
                  ))}
                </ProgressBar>
              </div>
              <div id="monthly-expenses-catergories" className="divide-y">
                {breackdown.map((s) => (
                  <div
                    key={s.id}
                    id="monthly-expenses-down"
                    className="flex justify-between pt-3"
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
                          {s.sum} €
                        </p>
                      </div>
                      <div id="category-percentage">
                        <p className="font-semibold text-big"> {s.perc}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Row>
          </Col>
        </Row>

        <Row id="outer-frame-third-row" className="mt-4 w-full gap-7">
          <Col
            id="monthly-budget-col"
            className="rounded-md bg-white p-4 shadow-md"
          >
            <div id="title-monthly-budget" className="mb-2">
              <h4> Monthly Budget</h4>
            </div>
            <div id="conte" className="h-[85%] overflow-y-scroll">
              {budget.map((b) => (
                <div
                  key={b.id}
                  id="budgets-category"
                  className="mr-2 mt-7 flex"
                >
                  <div
                    id="budgets-left"
                    className="mr-3 rounded-full p-2 text-base text-white"
                    style={{ backgroundColor: b.iconColor }}
                  >
                    {b.icon}
                  </div>
                  <div
                    id="budgets-right"
                    className="flex w-full flex-col justify-around"
                  >
                    <div
                      id="budgets-right-up"
                      className="flex w-full justify-between"
                    >
                      <div id="budgets-text">
                        <h5>{b.title}</h5>
                      </div>
                      <div id="budge-nr" className="flex">
                        <p className="font-medium text-big">{b.nr} </p>
                        <p>/100</p>
                      </div>
                    </div>
                    <div id="budgets-right-down" className="w-full">
                      <ProgressBar
                        key={b.id}
                        now={b.nr}
                        className="h-1.5 rounded-full"
                      >
                        <div
                          className="progress-bar"
                          style={{
                            width: `${b.nr}%`,
                            backgroundColor: b.iconColor,
                          }}
                        />
                      </ProgressBar>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col
            id="income-vs-expenses-col"
            className="z-0 flex flex-col justify-between rounded-md bg-white p-4 pb-0 pr-0 shadow-md"
            xs={12}
            lg={8}
          >
            <div id="title-income-vs-expenses">
              <h4> Monthly Income vs Expenses</h4>
            </div>
            <div id="bar-chart" className="h-[90%]">
              <BarChart
                className="z-0 ml-4"
                xAxis={[
                  {
                    scaleType: "band",
                    data: incomeVsExpenses.map((IE) => IE.month),
                  },
                ]}
                series={[
                  {
                    label: "Income",
                    data: incomeVsExpenses.map((IE) => IE.income),
                    color: "#0400EB",
                  },
                  {
                    label: "Expenses",
                    data: incomeVsExpenses.map((IE) => IE.expenses),
                    color: "#CDCCFB",
                  },
                ]}
              />
            </div>
          </Col>
        </Row>

        <Row id="outer-frame-forth-row" className="mt-4 w-full gap-7">
          <Col
            id="weekly-expenses-col"
            className="flex flex-col justify-between rounded-md bg-white p-4 pb-0 shadow-md"
            xs={12}
            lg={8}
          >
            <div id="title-weekly-expenses">
              <h4> Weekly Expenses</h4>
            </div>
            <div className="flex h-[90%]">
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: weeklyExpenses.map((WE) => WE.week),
                  },
                ]}
                series={expenseCategories.map((category) => ({
                  data: weeklyExpenses.map((WE) => Number(WE[category]) || 0),
                  stack: "total",
                  label: category,
                  color: categoryColors[category],
                }))}
              />
            </div>
          </Col>
          <Col
            id="payment-history-col"
            className="rounded-md bg-white p-4 pb-0 shadow-md"
          >
            <div id="title-payment-history" className="flex justify-between">
              <h4> Payment History</h4>
              <a href="" className="">
                See more
              </a>
            </div>
            <ul
              id="payement-history-expenses"
              className="h-full divide-y overflow-y-auto"
            >
              {payementHistory.map((h) => (
                <li key={h.id} id="payement-history-expenses-model h-[85%]">
                  <div
                    id="payement-history-expenses-model-up"
                    className="mb-1 mt-3 flex justify-between"
                  >
                    <h5> {h.name}</h5>
                    <p className="text-[1rem] font-medium text-big">
                      {"-"} {h.amount}
                    </p>
                  </div>
                  <div
                    id="payement-history-expenses-model-down"
                    className="mb-3 flex justify-between"
                  >
                    <p>{h.date}</p>
                    <span className="rounded-full bg-sidebarColor p-1 px-2">
                      <p className="text-white">{h.status}</p>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row id="outer-frame-fifth-row" className="mt-4 w-full gap-7">
          <Col
            id="saving-goals-col"
            className="h-fit rounded-md bg-white p-4 shadow-md"
          >
            <div id="title-saving-goals" className="mb-4">
              <h4>Saving Goals</h4>
            </div>
            <div
              id="wheels"
              className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-around"
            >
              {savingGoals.map((s) => (
                <div
                  id="wheel-1"
                  key={s.id}
                  className="flex w-28 flex-col items-center"
                >
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

          <Col
            id="transaction-history-col"
            className="rounded-md bg-white p-4 pb-0 shadow-md"
            xs={12}
            lg={8}
          >
            <div id="title-transaction-history" className="mb-2">
              <h4>Transaction History</h4>
            </div>

            <div className="overflow-x-scroll">
              <MDBTable className="w-full min-w-max">
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
                    <tr key={t.id} className="align-middle text-small">
                      <th scope="row" className="font-light text-black">
                        <div className="flex items-center">
                          <div
                            id="table-icons"
                            className="mr-2 rounded-full p-2 text-xl text-white"
                            style={{ backgroundColor: t.iconColor }}
                          >
                            {t.icon}
                          </div>
                          <div
                            id="transaction-category-title"
                            className="font-normal text-small"
                          >
                            {t.name}
                          </div>
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
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Dashboard;
