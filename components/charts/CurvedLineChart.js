'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CurvedLineChart = () => {
  const data = {
    labels: [
      '2024-09-01', '2024-09-02', '2024-09-03', '2024-09-04',
      '2024-09-05', '2024-09-06', '2024-09-07', '2024-09-08',
    ],
    datasets: [
      {
        label: 'Last Month',
        data: [30, 50, 40, 60, 70, 90, 100, 110],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4, // This makes the line curved
      },// Line chart data for "Net Cash"
      {
        label: "This Month",
        type: "line",
        data: [10, 20, 50, 120, 250, 220, 300, 310],
        tension: 0.4, // This makes the line curved
        color: 'purple',
      },
    ]
  };

const options = {
  responsive: true,
  maintainAspectRatio: false, // This ensures the chart fits the container
  scales: {
    x: {
      title: {
        display: true,
        text: 'Date',
      },
      ticks: {
        autoSkip: true, // Skip overlapping labels if necessary
        maxRotation: 45, // Maximum rotation angle for the labels
        minRotation: 45, // Minimum rotation angle for the labels
      },
    },
    y: {
      title: {
        display: true,
        text: 'Count',
      },
      ticks: {
        stepSize: 20,
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    tooltip: {
      enabled: true,
    },
  },
};

return (
  <div className='rounded-lg' style={{ width: '740px', height: '400px', backgroundColor: '#F5F5F5', padding: '20px' }}>
    <Line data={data} options={options} />
  </div>
);
};

export default CurvedLineChart;
