"use client";
import { Doughnut, arc } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement,
  Colors,
} from "chart.js";

ChartJS.register(ArcElement, Legend, Tooltip, Colors);
const PieChart = ({ skill }) => {
  const options = {
    Legend: "javascript",
  };

  return (
    <div className="mx-4 px-4">
      <Doughnut
        options={options}
        data={{
          datasets: [
            {
              label: [skill.lang, "remain"],
              data: [skill.percentage, "200"],
              // backgroundColor: ["rgba(0,0,255,0.7)", "rgba(255,0,0,0.7)"],
              // borderColor: ["rgb(0,0,255)", "rgba(255,0,0,1)"],
              hoverOffset: 6,
            },
          ],
        }}
        height={150}
        width={150}
      />
    </div>
  );
};

export default PieChart;
