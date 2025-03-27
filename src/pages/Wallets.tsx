import { Col, Container, Dropdown, Row } from "react-bootstrap";
import TraHi from "../parts/TraHi";
import { useEffect, useState } from "react";
import { AiOutlineRise } from "react-icons/ai";
// import { CiBank } from "react-icons/ci";
// import { CiCreditCard1 } from "react-icons/ci";
// import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { RiVisaLine } from "react-icons/ri";
import BOLinechart from "../parts/BOLinechart";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import { GoDotFill } from "react-icons/go";

const Wallets = () => {
  const [crdWl, setCrdWl] = useState<CrdWl[]>([]);
  interface CrdWl {
    id: number;
    title: string;
    currency: symbol;
    amount: number;
  }
  // const walletIcons = [
  //   { id: 1, icon: <CiBank /> },
  //   { id: 2, icon: <CiCreditCard1 /> },
  //   { id: 3, icon: <SiVisa /> },
  //   { id: 4, icon: <LiaMoneyBillWaveAltSolid /> },
  // ];
  useEffect(() => {
    fetch("/data/cardsWalletsLeft.json")
      .then((response) => response.json())
      .then((response) => setCrdWl(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
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
    <Container id="wallets-page" className="-mt-4 pb-3">
      <div id="page-up-info" className="mr-3 flex flex-col pt-4">
        <div id="dashboard-up" className="-ml-3">
          <h3 id="title-page">Wallets</h3>
        </div>
        <div
          id="dashboard-down"
          className="-ml-3 mb-5 mt-3 flex justify-between"
        >
          <p id="owner-page">Welcome to Vanja finance Management</p>
        </div>
      </div>
      <Row id="bigRow" className="mr-2 gap-x-8">
        <Col id="walletsLeft" lg={3} xs={12}>
          {crdWl.map((c) => (
            <Row
              id="walletsLeft-cards"
              className="mb-4 h-[5.69rem] rounded-md shadow-md hover:text-white"
              key={c.id}
            >
              <div id="cardContent" className="-ml-4 flex px-0">
                <div id="cardContent-Left">
                  <span className="-mt-7 grid text-[7rem] text-[#E1E1F9]">
                    <GoDotFill />
                  </span>
                </div>
                <div id="cardContent-Right" className="-ml-3 flex flex-col">
                  <h3 id="cardTitle" className="text-lg">
                    {c.title}
                  </h3>
                  <span id="cardTitle">${c.amount}</span>
                </div>
              </div>
            </Row>
          ))}
        </Col>
        <Col id="walltsRight">
          <Row
            id="cardTitle"
            className="rounded-md bg-white py-3 pl-2 shadow-md"
          >
            <h3>City Bank</h3>
          </Row>

          <Row id="walletsCards-row-up" className="gap-x-8">
            <Col
              id="walletsCards-col-up-big-left"
              className="mt-[1.875rem] flex flex-col justify-between rounded-md bg-white p-4 shadow-md"
            >
              <div>
                <h6>Total Balance</h6>
                <h2 className="mb-2 leading-[3rem]">$221,478</h2>
              </div>
              <div>
                <div className="flex justify-between py-2">
                  <p>Personal Funds</p>
                  <p className="text-base font-bold text-big">$32,500.28</p>
                </div>
                <Dropdown.Divider />
                <div className="flex justify-between pt-2">
                  <p>Credit Limits</p>
                  <p className="text-base font-bold text-big">$2500.00</p>
                </div>
              </div>
            </Col>
            <Col
              id="visaCard"
              className="mt-[1.875rem] flex flex-col justify-between rounded-md bg-[#1E1B4B] p-4 shadow-md"
            >
              <div className="flex justify-between">
                <h6 className="text-[#7184AD]">Debit Card</h6>
                <img
                  src="/images/visaLogo.svg"
                  className="xs:h-1 -mt-6 max-lg:h-[4.5rem] md:h-16"
                />
              </div>
              <span className="text-bold text-xl leading-8 text-white">
                1234 5678 7890 9875
              </span>
              <div className="flex justify-between pt-2 align-bottom">
                <p className="text-lg font-medium text-white">User Name</p>
                <p className="text-base text-white">
                  EXP: <span className="font-bold"> 12/21</span>
                </p>
              </div>
            </Col>
          </Row>

          <Row id="walletsCards-row-down" className="mb-4 gap-x-8">
            <Col
              id="walletsCards-col-down-big-left"
              className="mt-[1.875rem] rounded-md bg-white p-4 shadow-md"
            >
              <div>
                <h6>Total Balance</h6>
                <p className="my-3 text-3xl font-medium text-big">$ 432568</p>
              </div>

              <Dropdown.Divider />
              <div id="percentage-1" className="flex items-center gap-1 pt-2.5">
                <span className="text-xl text-riseingPercentageColor">
                  <AiOutlineRise />
                </span>
                <p id="percentage-text-1" className=" ">
                  2.47% Last month <span className="font-bold">$24,478</span>
                </p>
              </div>
            </Col>
            <Col
              id="walletsCards-col-down-big-left"
              className="mt-[1.875rem] rounded-md bg-white p-4 shadow-md"
            >
              <div>
                <h6>Monthly Expenses</h6>
                <p className="my-3 text-3xl font-medium text-big">$ 432568</p>
              </div>

              <Dropdown.Divider />
              <div id="percentage-1" className="flex items-center gap-1 pt-2.5">
                <span className="text-xl text-riseingPercentageColor">
                  <AiOutlineRise />
                </span>
                <p id="percentage-text-1" className=" ">
                  2.47% Last month <span className="font-bold">$24,478</span>
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row
        id="balance-overtime"
        className="xs:w-full mb-4 mr-2 grid justify-self-end rounded-md bg-white px-4 pb-3 pt-4 shadow-md lg:w-[72.3%]"
      >
        <Col id="BalanceOvertime-outer-frame" xs={12}>
          <h4 className="-ml-2">Balance Overtime</h4>

          <div className="-ml-10 h-[92.5%]">
            <BOLinechart />
          </div>
        </Col>
      </Row>

      <Row id="transaction-history-row" className="mr-2">
        <Col></Col>
        <Col
          id="transaction-history-col"
          className="grid justify-self-end rounded-md bg-white p-4 pb-0 shadow-md lg:w-[72%]"
          xs={12}
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
    </Container>
  );
};

export default Wallets;
