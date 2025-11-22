import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function HorizontalBarChart() {
  const data = {
    labels: ["Mål", "Virkelighet"],
    datasets: [
      {
        label: "",
        data: [50, 17],
        backgroundColor: ["#fbbf24", "#2563eb"],
        borderRadius: 50,
        barThickness: 25,
      }
    ]
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        grid: { display: false },
        ticks: { display: false }
      },
      y: {
        grid: { display: false },
        ticks: {
          font: {
            size: 16,
            family: "Inter"
          }
        }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0f172a",
        padding: 8,
        titleColor: "#fff",
        bodyColor: "#fff",
        cornerRadius: 6
      }
    }
  };

  return (
    <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Mål vs. virkelighet</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
