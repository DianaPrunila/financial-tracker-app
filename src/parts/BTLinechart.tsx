import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const BTLinechart = () => {
  const [trends, setTrends] = useState<Trends[]>([]);
  interface Trends {
    id: number;
    month: string;
    active: number;
    inactive: number;
  }
  useEffect(() => {
    fetch("/data/trends.json")
      .then((response) => response.json())
      .then((response) => setTrends(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <ResponsiveContainer>
      <AreaChart data={trends} className="">
        <XAxis dataKey="month" />

        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="inactive"
          stroke="#CDCCFB"
          fillOpacity={1}
          fill="#CDCCFB"
        />
        <Area
          type="monotone"
          dataKey="active"
          stroke="#6C84FF"
          fillOpacity={1}
          fill="#6C84FF"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default BTLinechart;
