import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const BPBarchart = () => {
  const [budgetP, setBudgetP] = useState<BudgetPeriod[]>([]);

  interface BudgetPeriod {
    id: number;
    month: string;
    a: number;
    b: number;
    c: number;
  }

  useEffect(() => {
    fetch("/data/budgetPeriod.json")
      .then((response) => response.json())
      .then((response) => setBudgetP(response))
      .catch((error) => console.error("Error fetching data:", error));
  });
  return (
    <ResponsiveContainer width="150%" height="100%">
      <BarChart data={budgetP} barSize="5%">
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip
          wrapperStyle={{ backgroundColor: "transparent", border: "none" }}
        />

        <Bar dataKey="a" stackId="a" fill="#2F2CD8" />
        <Bar dataKey="b" stackId="a" fill="#8280E8" />
        <Bar dataKey="c" stackId="a" fill="#C0BFF3" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BPBarchart;
