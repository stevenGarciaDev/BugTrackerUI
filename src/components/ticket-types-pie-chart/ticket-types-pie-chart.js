/* eslint-disable no-unused-vars */
import React from 'react';
import { Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const TicketTypesPieChart = ({ uiCount, backendCount, devopsCount }) => {
  // eslint-disable-next-line no-unused-vars
  const data = {
    labels: [
      'UI',
      'Backend',
      'Devops',
    ],
    datasets: [{
      data: [uiCount, backendCount, devopsCount],
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
  };

  return (
    <Pie
      data={data}
    />
  );
};

TicketTypesPieChart.propTypes = {
  uiCount: PropTypes.number.isRequired,
  backendCount: PropTypes.number.isRequired,
  devopsCount: PropTypes.number.isRequired,
};

export default TicketTypesPieChart;
