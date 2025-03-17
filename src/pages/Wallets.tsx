import { Col, Container, Row } from "react-bootstrap";
import TraHi from "../parts/TraHi";
import { useEffect, useState } from "react";

const Wallets = () => {
  const [crd, setCrd] = useState<Crd[]>([]);
  interface Crd {
    id: number;
    title: string;
    currency: symbol;
    amount: number;
  }
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
      <Row id="bigRow" className="w-full">
        <Col id="walletsLeft" className="">
          {crd.map((c) => (
            <Row
              id=""
              className="mb-4 h-[5.69rem] w-[53%] rounded-md bg-white p-4 shadow-md hover:bg-sidebarColor hover:text-white"
              key={c.id}
            >
              <div id="cardContent" className="flex flex-col">
                <div id="cardContent-Left"></div>
                <div id="cardContent-Right" className="j flex flex-col">
                  <h3 id="cardTitle" className="text-lg">
                    {c.title}
                  </h3>
                  <span id="cardTitle">${c.amount}</span>
                </div>
              </div>
            </Row>
          ))}
        </Col>
        <Col id="walltsRight" className=""></Col>
      </Row>
      <Row id="BalanceOvertime-outer-frame"></Row>
      <Row>
        <TraHi />
      </Row>
    </Container>
  );
};

export default Wallets;
