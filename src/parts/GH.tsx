import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { CiCalendar } from "react-icons/ci";
import { IoCalendarClearOutline, IoCardOutline } from "react-icons/io5";

const GH = () => {
  const [goalsH, setGoalsH] = useState<GoalsHistory[]>([]);
  interface GoalsHistory {
    id: number;
    date: string;
    wallet: string;
    description: string;
    amount: number;
    rest: number;
  }
  useEffect(() => {
    fetch("/data/goalsHistory.json")
      .then((response) => response.json())
      .then((response) => setGoalsH(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <Col id="goals-history-col">
      <div id="title-goals-history" className="my-2">
        <h4>History</h4>
      </div>

      <div className="overflow-x-scroll">
        <MDBTable className="-ml-4 w-full min-w-max">
          <MDBTableHead>
            <tr>
              <th id="title-date" scope="col">
                <b>Date</b>
              </th>
              <th id="title-wallet" scope="col">
                <b>Wallet</b>
              </th>
              <th id="title-description" scope="col">
                <b>Description</b>
              </th>
              <th id="title-amount" scope="col">
                <b>Amount</b>
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {goalsH.map((g) => (
              <tr key={g.id} className="align-middle text-small">
                <td id="date-col">
                  <div className="flex items-center">
                    <div
                      id="table-icons"
                      className="mr-4 rounded-full text-xl text-[#7184AD]"
                    >
                      <IoCalendarClearOutline />
                    </div>
                    <div
                      id="transaction-category-title"
                      className="font-normal text-small"
                    >
                      {g.date}
                    </div>
                  </div>
                </td>
                <td id="wallet-col">
                  <div className="flex items-center">
                    <div
                      id="table-icons"
                      className="mr-4 rounded-full py-2 text-xl text-[#7184AD]"
                    >
                      <IoCardOutline />
                    </div>
                    <div
                      id="transaction-category-title"
                      className="font-normal text-small"
                    >
                      {g.wallet}
                    </div>
                  </div>
                </td>
                <td id="descripsion-col">{g.description}</td>
                <td id="amount-col" className="flex flex-col">
                  <b className="mb-2 text-big">+{g.amount}$</b>
                  <span>12.368$</span>
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </Col>
  );
};

export default GH;
