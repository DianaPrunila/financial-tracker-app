import Dropdown from "react-bootstrap/Dropdown";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { GoDotFill } from "react-icons/go";
import { AiOutlineRise } from "react-icons/ai";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressBar from "react-bootstrap/ProgressBar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";
import BTLinechart from "../parts/BTLinechart";
import IVsEBarchart from "../parts/IVsEBarchart";
import WELinechart from "../parts/WELinechart";

const Dashboard = () => {
  const [firstR, setFirstR] = useState<FirstRow[]>([]);
  const [breackD, setBreackD] = useState<Breakdown[]>([]);
  const [budget, setBudget] = useState<Budget[]>([]);
  const [payementH, setPayementH] = useState<PayementHistory[]>([]);
  const [savingG, setSavingG] = useState<SavingGoals[]>([]);
  const [transactionH, setTransactionH] = useState<TransactionHistory[]>([]);

  interface FirstRow {
    id: number;
    title: string;
    sum: number;
    perc: number;
  }
  interface Breakdown {
    id: number;
    title: string;
    color: string;
    sum: number;
    perc: number;
  }
  interface Budget {
    id: number;
    icon: string;
    iconColor: string;
    title: string;
    nr: number;
  }
  interface PayementHistory {
    id: number;
    name: string;
    date: string;
    amount: number;
    status: string;
  }
  interface SavingGoals {
    id: number;
    color: string;
    goal: string;
    value: number;
    perc: number;
  }
  interface TransactionHistory {
    id: number;
    iconColor: string;
    icon: React.ComponentType;
    name: string;
    date: string;
    description: string;
    amount: number;
    currency: string;
  }

  useEffect(() => {
    fetch("/data/firstRow.json")
      .then((response) => response.json())
      .then((response) => setFirstR(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    fetch("/data/breackdown.json")
      .then((response) => response.json())
      .then((response) => setBreackD(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    fetch("/data/budget.json")
      .then((response) => response.json())
      .then((response) => setBudget(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    fetch("/data/payementHistory.json")
      .then((response) => response.json())
      .then((response) => setPayementH(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    fetch("/data/savingGoals.json")
      .then((response) => response.json())
      .then((response) => setSavingG(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    fetch("/data/transactionHistory.json")
      .then((response) => response.json())
      .then((response) => setTransactionH(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container id="dashboard-page" className="-mt-6 pb-3">
      <div id="page-up-info" className="mr-3 flex flex-col pt-4">
        <div id="dashboard-up" className="-ml-3">
          <h3 id="title-page">Dashboard</h3>
        </div>
        <div
          id="dashboard-down"
          className="-ml-3 mb-5 mt-3 flex justify-between"
        >
          <p id="owner-page">Welcome to Prunila finance Management</p>
          {/* <p>Home --- Dashboard</p> */}
        </div>
      </div>
      <div id="boxes" className="content-between px-0">
        <Row
          id="outer-frame-first-row"
          className="mr-1 grid grid-cols-1 gap-7 pr-2 sm:grid-cols-2 lg:grid-cols-4"
        >
          {firstR.map((f) => (
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

        <Row id="outer-frame-second-row" className="mt-4 w-full gap-7">
          <Col id="balance-trends-col" xs={12} lg={8}>
            <Row
              id="outer-frame-balance-trends"
              className="flex h-[90%] content-between rounded-md bg-white pr-7 pt-4 shadow-md"
            >
              <div
                id="balance-trends-frame-up"
                className="flex flex-wrap justify-between"
              >
                <div id="balance-trends-frame-left" className="pl-4">
                  <h4 id="title-balance-trends" className="text-big">
                    Balance Trends
                  </h4>
                  <p className="text-[2rem] font-medium text-big">€ 432568</p>
                </div>

                <div
                  id="balance-trends-frame-right"
                  className="flex flex-col justify-center pb-3"
                >
                  <p id="last-month" className=" ">
                    Last Month
                  </p>
                  <p id="balance-trends-percentage">xx.yy%</p>
                </div>
              </div>

              <div id="line-chart" className="h-[70%] w-full px-0 pb-5 xl:pb-0">
                <BTLinechart />
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
                  {breackD.map((br) => (
                    <ProgressBar
                      key={br.id}
                      now={br.perc}
                      style={{ backgroundColor: br.color }}
                    />
                  ))}
                </ProgressBar>
              </div>
              <div id="monthly-expenses-catergories" className="divide-y">
                {breackD.map((s) => (
                  <div
                    key={s.id}
                    id="monthly-expenses-down"
                    className="flex justify-between pt-3"
                  >
                    <div id="monthly-expenses-left" className="flex">
                      <div
                        id="dots"
                        className="flex align-super text-3xl"
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
                    id="dots"
                    className="text-3xl"
                    style={{ color: b.iconColor }}
                  >
                    <GoDotFill />
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
            className="z-0 flex flex-col justify-between rounded-md bg-white pb-4 pr-5 shadow-md"
            xs={12}
            lg={8}
          >
            <div id="title-income-vs-expenses" className="p-4">
              <h4> Monthly Income vs Expenses</h4>
            </div>
            <div id="bar-chart" className="ml-0 h-[90%]">
              <IVsEBarchart />
            </div>
          </Col>
        </Row>

        <Row id="outer-frame-forth-row" className="mt-4 w-full gap-7">
          <Col
            id="weekly-expenses-col"
            className="flex flex-col justify-between rounded-md bg-white pb-3 pt-4 shadow-md"
            xs={12}
            lg={8}
          >
            <div id="title-weekly-expenses" className="pl-4">
              <h4> Weekly Expenses</h4>
            </div>
            <div className="h-[90%] pr-5">
              <WELinechart />
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
              {payementH.map((h) => (
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
              {savingG.map((s) => (
                <div
                  id="wheel-1"
                  key={s.id}
                  className="flex w-28 flex-col items-center"
                >
                  <CircularProgressbar
                    value={s.perc}
                    text={`${s.perc}%`}
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
                  {transactionH.map((t) => (
                    <tr key={t.id} className="align-middle text-small">
                      <th scope="row" className="font-light text-black">
                        <div className="flex items-center">
                          <div
                            id="table-icons"
                            className="mr-2 rounded-full p-2 text-xl text-white"
                            style={{ backgroundColor: t.iconColor }}
                          >
                            {/* {t.icon} */}
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
