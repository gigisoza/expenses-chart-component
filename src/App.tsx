import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

function App() {
  const state = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "Spending - Last 7 days",
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 8,
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      },
    ],
  };

  return (
    <>
      <div>
        <h1>Spending - Last 7 days</h1>
        <Bar data={state} />
      </div>
    </>
  );
}

export default App;
