'use client'
import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend } 
from "chart.js"
import { Doughnut } from 'react-chartjs-2'


ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        labels: ["Bank 1", "Bank 2", "Bank 3"],
        datasets: [
            {
                label: "Banks",
                data: [400, 1200, 800],
                backgroundColor: ['#FFA500', '#2265d8', '#008000'],
            }
        ]
    };
    const options = {
        cutout: 16,
        responsive: true,
        plugins: {
          legend: {
            display: false
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
