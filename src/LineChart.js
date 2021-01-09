import React, { useEffect } from 'react';
import Chart from 'chart.js'
import chartProperties from './chartProperties';

function LineChart(props) {
  const { fill = false, colorUnderLine } = props;
  const colorPickerRef = React.createRef();

  useEffect(() => {
    const ctx = colorPickerRef.current.getContext('2d');
    new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            backgroundColor: colorUnderLine, // area under the curve
            borderCapStyle: 'round',
            fill: fill, // remove area under lines
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
        }]
    },
    options: chartProperties.options(),
});
  }, []);

  return (
      <canvas id={props.chartId || "lineChart"}  width="400" height="400" ref={colorPickerRef}></canvas>
  );
}

export default LineChart;
