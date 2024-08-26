import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { dataset } from './MockDataSet';

export default function GridDemo() {
  return (
    <LineChart
      dataset={dataset}
      xAxis={[{ dataKey: 'x' }]}
      series={[{ dataKey: 'y' }]}
      height={300}
      width={1000}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
    />
  );
}