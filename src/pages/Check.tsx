import { useEffect, useState } from "react";

const App = () => {
  const [firstR, setFirstR] = useState<FirstRow[]>([]);
  const [trends, setTrends] = useState<Trends[]>([]);
  const [breackD, setBreackD] = useState<Breakdown[]>([]);
  const [budget, setBudget] = useState<Budget[]>([]);
  const [categoryC, setCategoryC] = useState<CategoryColor[]>([]);
  const [incVsExp, setIncVsExp] = useState<IncomeVsExpenses[]>([]);
  const [weeklyExp, setWeeklyExp] = useState<WeeklyExpenses[]>([]);
  const [payementH, setPayementH] = useState<PayementHistory[]>([]);
  const [savingG, setSavingG] = useState<SavingGoals[]>([]);
  const [transactionH, setTransactionH] = useState<TransactionHistory[]>([]);

  interface FirstRow {
    id: number;
    title: string;
    sum: number;
    perc: string;
  }

  interface Trends {
    id: number;
    month: string;
    active: number;
    inactive: number;
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
    iconColor: string;
    icon: string;
    title: string;
    nr: number;
  }
  interface CategoryColor {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
  }
  interface IncomeVsExpenses {
    id: number;
    month: string;
    income: number;
    expenses: number;
  }
  interface WeeklyExpenses {
    id: number;
    week: string;
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
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
    icon: string;
    name: string;
    date: string;
    description: string;
    amount: number;
    currency: string;
  }

  useEffect(() => {
    fetch("/data/firstRow.json")
      .then((response) => response.json())
      .then((json) => setFirstR(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("/data/trends.json")
      .then((response) => response.json())
      .then((json) => setTrends(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("/data/breackdown.json")
      .then((response) => response.json())
      .then((json) => setBreackD(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("/data/budget.json")
      .then((response) => response.json())
      .then((json) => setBudget(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("/data/categoryColors.json")
      .then((response) => response.json())
      .then((json) => setCategoryC(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("/data/incomeVsExpenses.json")
      .then((response) => response.json())
      .then((json) => setIncVsExp(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("/data/weeklyExpenses.json")
      .then((response) => response.json())
      .then((json) => setWeeklyExp(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("/data/payementHistory.json")
      .then((response) => response.json())
      .then((json) => setPayementH(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("/data/savingGoals.json")
      .then((response) => response.json())
      .then((json) => setSavingG(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("/data/transactionHistory.json")
      .then((response) => response.json())
      .then((json) => setTransactionH(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div>
        <h1>Chek</h1>
        <ul className="bg-red-500">
          {firstR.map((item) => (
            <li key={item.id}>
              {item.title}: {item.perc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
