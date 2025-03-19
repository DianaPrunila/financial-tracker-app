import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const BOLinechart = () => {
  const [BO, setBO] = useState<BO[]>([]);
  interface BO {
    id: number;
    year: number;
    value: number;
  }
  useEffect(() => {
    fetch("/data/balanceOvertime.json")
      .then((response) => response.json())
      .then((response) => setBO(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <ResponsiveContainer>
      <AreaChart data={BO}>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="##FF4B63"
          fillOpacity={0.5}
          fill="#FFEEF1"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default BOLinechart;
