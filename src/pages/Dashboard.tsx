import Dropdown from "react-bootstrap/Dropdown";
import { GoDotFill } from "react-icons/go";
const Dashboard = () => {
  const firtsRow = [
    {
      title: "Total Balance",
      sum: "$",
      perc: "not sure how",
    },
    {
      title: "Total Period Change",
      sum: "$",
      perc: "not sure how",
    },
    {
      title: "Total Period Expenses",
      sum: "$",
      perc: "not sure how",
    },
    {
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
      className="juss flex w-[calc(100vw-11rem)] flex-col flex-wrap"
    >
      <div id="page-up-info" className="flex flex-wrap-reverse justify-between">
        <div id="dashboard-up-left" className="mb-2">
          <h3 id="title-page" className="text-pageTitle font-medium text-big">
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

      <div
        id="first-row-frames"
        className="mt-4 flex flex-wrap justify-between"
      >
        {firtsRow.map((f) => (
          <div
            id="outer-frame-first-row"
            className="mb-4 rounded-md bg-white p-4 shadow-md"
          >
            <div id="total-balance-frame" className="">
              <p id="total-balance " className="font-medium text-big">
                {f.title}
              </p>
              <div id="first-row-sum" className="my-2.5">
                <p
                  id="sum-total-balance "
                  className="my-2.5 text-3xl font-medium text-big"
                >
                  $
                </p>
              </div>
              <Dropdown.Divider />
              <div id="percentage-1" className="pt-2.5">
                <p id="percentage-text-1" className="text-small">
                  2.47% Last month $24,478
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div id="second-row" className="flex justify-between">
        <div
          id="outer-frame-balance-trends"
          className="mb-4 w-fit rounded-md bg-white p-4 shadow-md"
        >
          <div
            id="balance-trends-frame-up"
            className="mb-4 flex flex-wrap justify-between"
          >
            <div id="balance-trends-frame-left">
              <h6
                id="title-balance-trends"
                className="text-framesTitle font-medium text-big"
              >
                Balance Treends
              </h6>
              <p className="text-[2rem] font-medium text-big">$</p>
            </div>

            <div id="balance-trands-frame-right" className="">
              <p id="last-month" className="text-small">
                Last Month
              </p>
              <p id="balance-trends-percentage" className="">
                xx.yy%
              </p>
            </div>
          </div>
          <div id="balance-trends-graph" className="">
            <img src="/images/GRAPH.png" alt="Graph" />
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
            <div id="bar-expenses" className="">
              bar expenses
            </div>
            <div id="monthly-expenses-catergories" className="">
              {secondRow.map((s) => (
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
      </div>

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
