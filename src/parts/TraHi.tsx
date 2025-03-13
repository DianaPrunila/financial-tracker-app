import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const TraHi = () => {
  const [transactionH, setTransactionH] = useState<TransactionHistory[]>([]);
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
    fetch("/data/transactionHistory.json")
      .then((response) => response.json())
      .then((response) => setTransactionH(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
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
  );
};

export default TraHi;
