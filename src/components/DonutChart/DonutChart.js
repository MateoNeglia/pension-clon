import { PieChart } from '@mui/x-charts/PieChart';
import * as React from 'react';
import './DonutChart.scss';

const data = [
  { value: 5, label: 'Renta Fija' },
  { value: 7, label: 'Renta Variable' },
  { value: 50, label: 'Efectivo' },  
];

export default function DonutChart() {
  return (
    <div className='main-chart'>
        <PieChart
        colors={['#A1E3CB', '#85D1EF', '#042E5D']}
        series={[
            {
            data,
            innerRadius: 50,
            outerRadius: 100,
            paddingAngle: 2,
            cornerRadius: 5,
            startAngle: -50,
            endAngle: 310,
            cx: 150,
            cy: 150,
            }
        ]}
    />
    </div>
    
  );
}