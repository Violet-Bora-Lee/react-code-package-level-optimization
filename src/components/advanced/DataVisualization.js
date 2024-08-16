import React, { useState, useEffect } from 'react';

function DataVisualization() {
  const [ChartComponent, setChartComponent] = useState(null);

  useEffect(() => {
    const loadChart = async () => {
      const { Chart, BarController, CategoryScale, LinearScale, BarElement } = await import('chart.js');
      Chart.register(BarController, CategoryScale, LinearScale, BarElement);
      const { Bar } = await import('react-chartjs-2');
      setChartComponent(() => Bar);
    };

    loadChart();
  }, []);

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div>
      <h2>Data Visualization</h2>
      {ChartComponent && <ChartComponent data={data} options={options} />}
    </div>
  );
}

export default DataVisualization;