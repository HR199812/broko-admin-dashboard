'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularProgressBar = ({ progress, strokeColor }) => {
  const data = {
    labels: ['Progress', 'Remaining'],
    datasets: [
      {
        label: 'Progress',
        data: [progress, 100 - progress],
        backgroundColor: [strokeColor, '#F5F5F5'], // Colors for the progress and remaining part
        borderWidth: 5, // Adjust border width to create gap
        borderColor: '#F5F5F5', // The gap color
        borderRadius: {
          innerStart: 20,  // Curved inner start
          outerStart: 20,  // Curved outer start
          innerEnd: 20,    // Curved inner end
          outerEnd: 20     // Curved outer end
        },
      },
    ],
  };

  const options = {
    cutout: '70%', // Adjusts the thickness of the progress ring
    plugins: {
      tooltip: {
        enabled: true, // Disable tooltips
      },
      legend: {
        display: false, // Hide the legend
      },
    },
    rotation: -90, // Start the progress from the top
    circumference: 360, // Full circle
  };

  return (
    <div style={{ width: '150px', height: '150px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default CircularProgressBar;
