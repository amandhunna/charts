import React, { useEffect } from 'react';
import Chart from 'chart.js'
import chartProperties from './chartProperties';

function MultiDoughnutChart(props) {
  const colorPickerRef = React.createRef();

  useEffect(() => {
    const ctx = colorPickerRef.current.getContext('2d');
    new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
          data: [
             10,20,30
              ],
              backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C"
          ],
      }, {
          data: [
            10,10,40

          ],
              backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C"
          ],
      }],
      labels: [
          "Red",
          "Green",
          "Yellow"
      ]
  },
    options: {
      ...chartProperties.options(),
        //circumference: 0.5
      
      },
});
  }, []);

  return (
      <canvas id={props.chartId || "mDoughnutChart"}  width="400" height="400" ref={colorPickerRef}></canvas>
  );
}

export default MultiDoughnutChart;
