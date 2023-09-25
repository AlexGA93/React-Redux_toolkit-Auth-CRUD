import { BarChartBox, BigChartBox, ChartBox, PieChartBox } from '../../../components';
import TopBox from '../../../components/topBox/TopBox';
import { areaData, barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser, pieData } from '../../../data/data';
import './home.scss';

const Home = () => {
  return (
    <main className='home grid'>
      <div className="box box1"><TopBox /></div>
      <div className="box box2"><ChartBox {...chartBoxUser} /></div>
      <div className="box box3"><ChartBox {...chartBoxProduct} /></div>
      <div className="box box4"><PieChartBox data={pieData} /></div>
      <div className="box box5"><ChartBox {...chartBoxConversion} /></div>
      <div className="box box6"><ChartBox {...chartBoxRevenue} /></div>
      <div className="box box7"><BigChartBox data={areaData} /></div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
    </main>
  )
}

export default Home