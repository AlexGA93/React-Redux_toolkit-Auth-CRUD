import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";
import { PieDataType } from "../../types/types";

const PieChartBox = ({data}:{data: PieDataType[]}) => {

  return (
    <section className="pieChartBox">
      <h1>Leads by Source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip 
                contentStyle={{background: "white", borderRadius: "5px"}}
                labelStyle={{display: "none"}}
                cursor={{fill: "none"}}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={`cell-${item.name}`} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
            <div className="option" key={item.name}>
                <div className="title">
                    <div className="dot" style={{backgroundColor: item.color}}></div>
                    <span>{item.name}</span>
                </div>
                <span>{item.value}</span>
            </div>
        ))}
      </div>
    </section>
  );
};

export default PieChartBox;
