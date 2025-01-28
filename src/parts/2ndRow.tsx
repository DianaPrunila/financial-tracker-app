import { GoDotFill } from "react-icons/go";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const secRow = () => {
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
    <Container id="second-row" className="px-0 ">
      <Row className="gap-x-6 grid grid-cols-1  lg:grid-cols-[60%_40%] w-full">
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
        <Col id="monthly-expenses-col" className="mr-6 ">
          <Row
            id="outer-frame-monthly-breakdown"
            className="rounded-md bg-white p-4  shadow-md w-fit"
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
                      className="flex flex-nowrap px-0 min-w-max"
                    >
                      <Row className="">
                        <Col
                          id="dots"
                          className="text-2xl px-0 flex flex-nowrap"
                          style={{ color: s.color }}
                        >
                          <GoDotFill />
                        </Col>
                        <Col
                          id="category-name-div"
                          className="text-small p-0 flex flex-nowrap"
                        >
                          <p id="category-name-title" className="font-medium">
                            {s.title}
                          </p>
                        </Col>
                      </Row>
                    </Col>

                    <Col
                      id="monthly-expenses-right"
                      className="justify-items-end flex-none"
                    >
                      <Row className="flex justify-end">
                        <Col
                          id="right-breakdown"
                          className="px-0 flex flex-nowrap min-w-max"
                        >
                          <p id="category-sum" className="mx-3">
                            {s.sum} $
                          </p>
                        </Col>
                        <Col
                          id="category-percentage"
                          className="px-0 flex flex-nowrap min-w-max"
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
  );
};

export default secRow;
