import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const AnalyticsChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Email Performance',
        data: data.values,
        fill: false,
        backgroundColor: 'rgba(254, 215, 170, 0.5)',
        borderColor: 'rgba(249, 115, 22, 1)',
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Line data={chartData} />
    </div>
  );
};

AnalyticsChart.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};

export default AnalyticsChart;