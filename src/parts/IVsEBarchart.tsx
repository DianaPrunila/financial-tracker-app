import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const IVsEBarchart = () => {
  const [incVsExp, setIncVsExp] = useState<IncomeVsExpenses[]>([]);
  interface IncomeVsExpenses {
    id: number;
    month: string;
    income: number;
    expenses: number;
  }
  useEffect(() => {
    fetch("/data/incomeVsExpenses.json")
      .then((response) => response.json())
      .then((response) => setIncVsExp(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <ResponsiveContainer>
      <BarChart data={incVsExp}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="income" fill="#0501EB" />
        <Bar dataKey="expenses" fill="#CDCCFB" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default IVsEBarchart;
