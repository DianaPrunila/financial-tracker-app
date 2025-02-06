import { useEffect, useRef } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";

const LineChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null); // Explicitly type the chart instance

  useEffect(() => {
    const xValues = [
      "4 Jan",
      "5 Jan",
      "6 Jan",
      "7 Jan",
      "8 Jan",
      "9 Jan",
      "10 Jan",
    ];

    // Destroy the previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current?.getContext("2d");
    if (!ctx) return; // Ensure ctx is available before proceeding

    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: xValues,
        datasets: [
          {
            label: "Active",
            data: [0, 65, 52, 115, 98, 165, 125],
            backgroundColor: "#6C84FF",
            fill: true,
          },
          {
            label: "Inactive",
            data: [40, 105, 92, 155, 138, 205, 165],
            backgroundColor: "#F0F3FF",
            fill: true,
          },
        ],
      },
    } as ChartConfiguration);

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); // Cleanup on unmount
        chartInstanceRef.current = null;
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default LineChart;
