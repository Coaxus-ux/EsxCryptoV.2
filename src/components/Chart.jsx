import React from 'react'
import { Line } from '@ant-design/charts';

const Chart= () => {
  const data = [
    { day: '11/07/2021', Price: 34.673 },
    { day: '12/07/2021', Price: 36.752 },
    { day: '13/07/2021', Price: 66.122 },
    { day: '14/07/2021', Price: 42.134 },
    { day: '15/07/2021', Price: 22.798 },
    { day: '16/07/2021', Price: 52.345 },
    { day: '17/07/2021', Price: 22.667 },
    { day: '18/07/2021', Price: 52.234 },
    { day: '19/07/2021', Price: 82.879 },
  ];

  const config = {
    data,
    height: 300,
    xField: 'day',
    yField: 'Price',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#ffff',
      },
    },
  };
  return <Line {...config} />;
};
export default Chart;