'use client';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ], // Months on the x-axis
    datasets: [
      {
        label: 'Properties',
        data: [30, 25, 40, 35, 50, 55, 60, 65, 70, 75, 80, 85], // Dummy data for properties added each month
        backgroundColor: 'rgba(75,192,192,0.6)', // Bar color
        borderColor: 'rgba(75,192,192,1)', // Border color of the bars
        borderWidth: 2,
        borderRadius: 10, // This rounds the corners of the bars
        barThickness: 40, // Thickness of the bars
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Properties Added in the State',
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 45, // Rotate x-axis labels (month names)
          minRotation: 45,
        },
      },
      y: {
        beginAtZero: true, // Start the y-axis from 0
      },
    },
  };

  return (
    <div className='rounded-lg' style={{ width: '740px', height: '400px', backgroundColor: '#F5F5F5', padding: '20px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
