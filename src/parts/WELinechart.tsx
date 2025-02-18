import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const WELinechart = () => {
  const [weeklyExp, setWeeklyExp] = useState<WeeklyExpenses[]>([]);

  interface WeeklyExpenses {
    id: number;
    week: string;
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
  }
  useEffect(() => {
    fetch("/data/weeklyExpenses.json")
      .then((response) => response.json())
      .then((response) => setWeeklyExp(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={weeklyExp}>
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="a" stackId="a" fill="#D946EF" />
        <Bar dataKey="b" stackId="a" fill="#9A2EFF" />
        <Bar dataKey="c" stackId="a" fill="#6D2EFF" />
        <Bar dataKey="d" stackId="a" fill="#3336FF" />
        <Bar dataKey="e" stackId="a" fill="#146EFF" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WELinechart;
