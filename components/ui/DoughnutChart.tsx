'use client'
import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend } 
from "chart.js"
import { Doughnut } from 'react-chartjs-2'


ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        labels: ["Bnak 1", "Bank 2", "Bank 3"],
        datasets: [
            {
                label: "Banks",
                data: [1000, 1500, 1200],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
            }
        ]
    };
    const options = {
        cutout: 6,
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom', // Positions the legend at the bottom to prevent overlap
            labels: {
              padding: 5, // Adds padding between the legend and the chart
              boxWidth: 20, // Adjust the size of the box indicating colors
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        layout: {
          padding: {
            top: 5,
            bottom: 10,
            left: 10,
            right: 10,
          },
        },
      };

  return (
    <Doughnut 
        data={data}
        options={options}
    />
  )
}

export default DoughnutChart
