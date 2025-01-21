import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineRise } from "react-icons/ai";

const FirstRow = () => {
  return (
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
          <div id="monthly-expenses-catergories">
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
  );
};

export default FirstRow;
