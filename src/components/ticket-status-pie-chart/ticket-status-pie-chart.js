import React from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';

const TicketStatusPieChart = ({ completedCount, incompletedCount }) => {
  // eslint-disable-next-line no-unused-vars
  const data = {
    labels: [
      'Completed',
      'Remaining',
    ],
    datasets: [{
      data: [completedCount, incompletedCount],
      backgroundColor: [
        '#282',
        '#36A2EB',
      ],
      hoverBackgroundColor: [
        '#282',
        '#36A2EB',
      ],
    }],
  };

  return (
    <Pie
      data={data}
    />
  );
};

TicketStatusPieChart.propTypes = {
  completedCount: PropTypes.number.isRequired,
  incompletedCount: PropTypes.number.isRequired,
};

export default TicketStatusPieChart;
