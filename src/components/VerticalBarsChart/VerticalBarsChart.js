import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import Stack from '@mui/material/Stack';

export default function VerticalBarsChart() {
  return (
    <Stack direction="column" spacing={1} sx={{ width: '1000px', maxWidth: 1000 }}>
      <BarChart
        series={[
          { dataKey: 'high', label: 'High', layout: 'vertical', stack: 'stack' },
          { dataKey: 'low', label: 'Low', layout: 'vertical', stack: 'stack' },
        ]}
        {...chartSettingsV}
        borderRadius='7'
      />
    </Stack>
  );
}

const dataset = [
  [4, -8, 'Enero 2021'],
  [0, -4, 'Enero 2022'],
  [6, 0, 'Enero 2023'],
  [6, 4, 'Enero 2024'],
].map(([high, low, order]) => ({
  high,
  low,
  order,
}));

const chartSettingsV = {
    dataset,
    height: 400,  
    sx: {
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
        transform: 'translateX(-10px)',
      },
    },
    slotProps: {
      legend: {
        direction: 'row',
        position: { vertical: 'bottom', horizontal: 'left' },
        padding: -5,
      },
    },
  xAxis: [{ scaleType: 'band', dataKey: 'order' }],
  yAxis: undefined,
};