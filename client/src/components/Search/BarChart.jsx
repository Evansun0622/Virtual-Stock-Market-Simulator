import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ sixMonthAverages, stockInfo }) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const lineChart = sixMonthAverages ? (
    <Bar
      data={{
        labels: sixMonthAverages.map(({ month }) => monthNames[month]),
        datasets: [
          {
            label: "Price",
            backgroundColor: "rgba(0, 0, 255, 0.3)",
            data: sixMonthAverages.map(({ value }) => value),
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        title: {
          display: true,
          text: `Average closing price per month of ${stockInfo.ticker} over the past 6 months`,
          position: "bottom",
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 15,
            bottom: 0,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        legend: { display: false },
        animation: {
          duration: 2000,
        },
      }}
    />
  ) : null;

  return lineChart;
};

export default BarChart;
