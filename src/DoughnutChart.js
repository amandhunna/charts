import React, { useEffect } from 'react';
import Chart from 'chart.js'

function DoughnutChart(props) {
  const colorPickerRef = React.createRef();

  useEffect(() => {
    const ctx = colorPickerRef.current.getContext('2d');
    new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             beginAtZero: true
        //         }
        //     }]
        // }
    }
});
  }, []);

  return (
      <canvas id={props.chartId || "doughnutChart"}  width="400" height="400" ref={colorPickerRef}></canvas>
  );
}

export default DoughnutChart;
