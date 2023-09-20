import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { chartBoxType } from "../../types/types";

const ChartBox = (props: chartBoxType) => {

  return (
    <section className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt={props.title} />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{color: props.color}}>View All</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{display: "none"}}
                position={{x: 10, y: 50}}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <div 
            className="percentage"
            style={{ color: props.percentage<0 ? "tomato" : "limegreen" }}
          >{props.percentage}%</div>
          <div className="duration">This Month</div>
        </div>
      </div>
    </section>
  );
};

export default ChartBox;
