import { useEffect, useState } from "react";

const Check = () => {
  interface FirstRow {
    id: number;
    title: string;
    sum: number;
    perch: string;
  }

  interface Trends {
    id: number;
    month: string;
    active: number;
    inactive: number;
  }
  interface Data {
    firstRow: FirstRow[];
    trends: Trends[];
  }
  const [data, setData] = useState<Data>({
    firstRow: [],
    trends: [],
  });

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))

      .catch((error) => console.error("Something whent wrong", error));
  }, []);
  return (
    <div>
      {data.firstRow.map((item) => (
        <div key={item.id} className="text-2xl text-red-700">
          {item.title}
        </div>
      ))}
      <div>ana are mere</div>
    </div>
  );
};

export default Check;
