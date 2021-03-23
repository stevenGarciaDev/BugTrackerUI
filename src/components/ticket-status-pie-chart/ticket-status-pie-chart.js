import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';

const TicketStatusPieChart = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({
    labels: [
      'Completed',
      'Remaining',
    ],
    datasets: [{
      data: [60, 40],
      backgroundColor: [
        '#282',
        '#36A2EB',
      ],
      hoverBackgroundColor: [
        '#282',
        '#36A2EB',
      ],
    }],
  });

  return (
    <Pie
      data={data}
    />
  );
};

export default TicketStatusPieChart;
