import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../styles/analytics.css";

const data = [
  { name: "S", value: 60 },
  { name: "M", value: 80 },
  { name: "T", value: 60 },
  { name: "W", value: 50 },
  { name: "T", value: 50 },
  { name: "F", value: 70 },
  { name: "S", value: 55 },
];

export default function ProjectAnalytics() {
  return (
    <div className="analytics-main">
      <h2>Performance Analysis</h2>
      <div className="progress-bar">
        <ResponsiveContainer width="100%" height={120}>
          <BarChart data={data} barCategoryGap="0%" barSize={70}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="rgb(7, 201, 185)"
              radius={[20, 20, 20, 20]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
