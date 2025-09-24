// UsageStats.jsx
import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { resources } from "./sampleResources"; // your temp data
import "./css/UsageStats.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const UsageStats = () => {
  // Top 5 used resources
  const topUsed = [...resources]
    .sort((a, b) => b.usageCount - a.usageCount)
    .slice(0, 5);

  const barData = {
  labels: topUsed.map(r => r.title),
  datasets: [
    {
      label: "Usage Count",
      data: topUsed.map(r => r.usageCount),
      backgroundColor: "#1E90FF",
      borderRadius: 6,
      barThickness: 10 // increase bar height
    }
  ]
};


const barOptions = {
  indexAxis: 'y', // horizontal bars
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: true, text: "Top 5 Most Used Resources" },
    tooltip: {
      enabled: true, // keep tooltip on hover
    }
  },
  scales: {
    x: { beginAtZero: true },
    y: {
      ticks: {
        display: false // hide y-axis labels
      },
      grid: {
        drawTicks: false
      }
    }
  }
};



  // Resource distribution by type
  const typeCounts = resources.reduce((acc, r) => {
    acc[r.type] = (acc[r.type] || 0) + 1;
    return acc;
  }, {});

  const pieData = {
    labels: Object.keys(typeCounts),
    datasets: [
      {
        label: "Resource Type Distribution",
        data: Object.values(typeCounts),
        backgroundColor: ["#1cc88a", "#F1C40F", "#E74C3C"]
      }
    ]
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: "right" },
      title: { display: true, text: "Resource Distribution by Type" }
    }
  };

  // Resource usage over time (mock)
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Checkouts Over Time",
        data: [5, 8, 12, 7, 15, 10],
        borderColor: "#6f42c1",
        backgroundColor: "rgba(111,66,193,0.2)",
        fill: true,
        tension: 0.4
      }
    ]
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Resource Checkouts Over Time" }
    },
    scales: { y: { beginAtZero: true } }
  };

  return (
    <div className="US-container">
      <h1 className="US-title">📊 Resource Usage Statistics</h1>

      <div className="US-charts-row">
        <div className="US-chart">
          <Bar data={barData} options={barOptions} />
        </div>

        <div className="US-chart">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>

      <div className="US-charts-row">
        <div className="US-chart-wide">
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>
    </div>
  );
};

export default UsageStats;
