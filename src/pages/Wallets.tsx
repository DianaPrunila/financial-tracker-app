import { Col, Container, Dropdown, Row } from "react-bootstrap";
import TraHi from "../parts/TraHi";
import { useEffect, useState } from "react";
import { AiOutlineRise } from "react-icons/ai";
// import { CiBank } from "react-icons/ci";
// import { CiCreditCard1 } from "react-icons/ci";
// import { SiVisa } from "react-icons/si";
// import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";

const Wallets = () => {
  const [crd, setCrd] = useState<Crd[]>([]);
  interface Crd {
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
    fetch("/data/cards.json")
      .then((response) => response.json())
      .then((response) => setCrd(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <Container id="wallets-page" className="-mt-4 pb-3">
      <div id="page-up-info" className="mr-3 flex flex-col pt-4">
        <div id="dashboard-up" className="-ml-3">
          <h3 id="title-page">Dashboard</h3>
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
          {crd.map((c) => (
            <Row
              id=""
              className="mb-4 h-[5.69rem] rounded-md bg-white p-4 shadow-md hover:bg-sidebarColor hover:text-white"
              key={c.id}
            >
              <div id="cardContent" className="">
                <div id="cardContent-Left">
                  {/* <span key={wI.id}>{wI.icon}</span> */}
                </div>
                <div id="cardContent-Right" className="flex flex-col">
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
              className="mt-[1.875rem] rounded-md bg-white p-4 shadow-md"
            >
              <div>
                <h6>Total Balance</h6>
                <h2 className="mb-2 leading-[3rem]">$221,478</h2>
              </div>
              <div className="flex justify-between py-2">
                <p>Personal Funds</p>
                <p className="text-base font-bold text-big">$32,500.28</p>
              </div>
              <Dropdown.Divider />
              <div className="flex justify-between pt-2">
                <p>Credit Limits</p>
                <p className="text-base font-bold text-big">$2500.00</p>
              </div>
            </Col>
            <Col
              id="visaCard"
              className="mt-[1.875rem] rounded-md bg-big p-4 shadow-md"
              lg={6}
              xs={12}
            >
              <div>
                <h6 className="text-bkGd">Debit Card</h6>
                <span className="text-bold my-10 text-xl leading-8 text-white">
                  1234 5678 7890 9875
                </span>
              </div>

              <div className="flex justify-between pt-2 align-bottom">
                <p>User Name</p>
                <p className="text-base font-bold text-big">$2500.00</p>
              </div>
            </Col>
          </Row>
          <Row id="walletsCards-row-down" className="mb-5 gap-x-8">
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
      <Row id="BalanceOvertime-outer-frame" className="mr-2"></Row>
      <Row className="mr-2 grid justify-items-end">
        <TraHi />
      </Row>
    </Container>
  );
};

export default Wallets;
