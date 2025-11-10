import React, { useRef, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import "../MoodDiary/moodDiary.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const MoodDiary = () => {
  const chartRef = useRef(null);

  const emojis = [
    "/icons/happy.svg",
    "/icons/fine.svg",
    "/icons/ok.svg",
    "/icons/sad.svg",
    "/icons/angry.svg",
  ];

  const [chartData, setChartData] = useState({
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "",
        data: [0, 0, 0, 0, 0],
        backgroundColor: ["#FF9D00", "#FFE95C", "#5BE579", "#3DE5FF", "#FF5454"],
        borderRadius: 50,
        borderSkipped: false,
        barThickness: 24,
      },
    ],
  });

  const [barCenters, setBarCenters] = useState([]);

  const updateBarCenters = () => {
    if (!chartRef.current) return;
    const meta = chartRef.current.getDatasetMeta(0);
    if (meta) {
      const centers = meta.data.map(bar => bar.x);
      setBarCenters(centers);
    }
  }

  useEffect(() => {
    updateBarCenters();
  }, [chartData]);

  const handleClick = (index) => {
    const newData = [...chartData.datasets[0].data];
    newData[index] += 1;
    setChartData({
      ...chartData,
      datasets: [{ ...chartData.datasets[0], data: newData }],
    });
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { display: false },
        offset: true,
      },
      y: {
        beginAtZero: true,
        ticks: { display: false },
        grid: { display: false },
      },
    },
  };

  const val = chartData.datasets[0].data.reduce((acc, it) => {
    acc += it;
    return acc;
  }, 0)

  return (
    <div className="container">
      <div className="mood-diary">
        {val === 0 && <span className="mood-diary__hint">Нажмите на смайлик, отражающий ваше настроение</span>}
        <Bar ref={chartRef} data={chartData} options={options} />
        <div className="mood-diary__x">
          {barCenters.map((x, idx) => (
            <img
              key={idx}
              src={emojis[idx]}
              style={{
                position: "absolute",
                left: x - 8,
                bottom: 0,
                width: 48,
                height: 48,
                cursor: "pointer",
              }}
              onClick={() => handleClick(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MoodDiary;
