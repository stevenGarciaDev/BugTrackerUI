import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';

const TicketTypesPieChart = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({
    labels: [
      'UI',
      'Backend',
      'Devops',
    ],
    datasets: [{
      data: [50, 50, 20],
      backgroundColor: [
        '#80F',
        'coral',
        'orange',
      ],
      hoverBackgroundColor: [
        '#80F',
        'coral',
        'orange',
      ],
    }],
  });

  return (
    <Pie
      data={data}
    />
  );
};

export default TicketTypesPieChart;
