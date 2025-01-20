const Dashboard = () => {
  return (
    <div id="dashboard-page" className="">
      <div id="page-up-info" className="">
        <div id="dashboard-up-left" className="">
          <h3 id="title-page" className="\ big">
            Dashboard
          </h3>
          <p id="owner-page" className="small">
            Welcome to Prunila finance Management
          </p>
        </div>
        <div id="dashboard-up-right" className="">
          <p className="small">Home --- Dashboard</p>
        </div>
      </div>

      <div id="first-row-frames" className="">
        <div id="outer-frame-first-row-1" className="">
          <div id="total-balance-frame" className="">
            <p id="total-balance " className="big">
              Total Balance
            </p>
            <p id="sum-total-balance " className="sum-total-balance big">
              $
            </p>
            <div id="percentage-1" className="">
              <p id="percentage-text-1" className="">
                %
              </p>
            </div>
          </div>
        </div>

        <div id="outer-frame-first-row-2" className="">
          <div id="total-period-change-frame" className="">
            <p id="total-period-change" className="big">
              Total Period Change
            </p>
            <p id="sum-total-period-change" className="big">
              $
            </p>
            <div id="percentage-2" className="">
              <p id="percentage-text-2" className="">
                %
              </p>
            </div>
          </div>
        </div>

        <div id="outer-frame-first-row-3" className="">
          <div id="total-period-expenses-frame" className="">
            <p id="total-period-expenses" className="big">
              Total Period Expenses
            </p>
            <p id="sum-total-period-expenses big" className="">
              $
            </p>
            <div id="percentage-3" className="">
              <p id="percentage-text-3" className="">
                %
              </p>
            </div>
          </div>
        </div>

        <div id="outer-frame-first-row-4" className="">
          <div id="total-period-income-frame" className="">
            <p id="total-period-income" className="big">
              Total Period Income
            </p>
            <p id="sum-total-period-income" className="big">
              $
            </p>
            <div id="percentage-4" className="">
              <p id="percentage-text-4" className="">
                %
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="outer-frame-balance-trends" className="">
        <div id="balance-trends-frame" className="">
          <h4 id="title-balance-trends" className="big">
            Balance Treends
          </h4>
          <div id="balance-trands-frame-up" className="">
            <p id="last-month" className="small">
              Last Month
            </p>
            <p id="balance-trends-percentage" className="">
              %
            </p>
          </div>
          <div id="balance-trends-graph" className="">
            {" "}
            graph
          </div>
        </div>
      </div>

      <div id="outer-frame-monthly-breakdown" className="">
        <div id="monthly-brakdown-frame" className="">
          <h4 id="monthly-brakdown-title" className="big">
            Monthly Expense Breakdown
          </h4>
          <div id="bar-expenses" className="">
            bar expenses
          </div>
          <div id="monthly-expenses-catergories" className="">
            <div id="dots" className="">
              dot{" "}
            </div>
            <div id="category-name-div" className="small">
              <p id="category-name-title" className="">
                {" "}
                FOOD
              </p>
            </div>
            <div id="right-breakdown" className="">
              <p id="category-sum" className="">
                $
              </p>
              <p id="category-percentage" className="">
                %
              </p>
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
