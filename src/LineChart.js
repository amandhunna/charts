import React, { useEffect } from 'react';
import Chart from 'chart.js'
import chartProperties from './chartProperties';

function LineChart(props) {
  const { fill = false, colorUnderLine, data = [], multiline } = props;
  const colorPickerRef = React.createRef();

  console.log(props)
  const chartData = !multiline ? {
        datasets: [{
            label: 'Scatter Dataset',
            backgroundColor: colorUnderLine, // area under the curve
            borderCapStyle: 'round',
            fill: fill, // remove area under lines
            data: data
        }]
    }: data 


    console.log(chartData)

  useEffect(() => {
    Chart.platform.disableCSSInjection = true;
    const ctx = colorPickerRef.current.getContext('2d');
    new Chart(ctx, {
    type: 'line',
    data: chartData, 
    //{
    //    datasets: [{
    //        label: 'Scatter Dataset',
    //        backgroundColor: colorUnderLine, // area under the curve
    //        borderCapStyle: 'round',
    //        fill: fill, // remove area under lines
    //        data: data
    //    }]
    //},
    options: chartProperties.options(),
});
  }, []);

  return (
      <canvas id={props.chartId || "lineChart"}  width="400" height="400" ref={colorPickerRef}></canvas>
  );
}

export default LineChart;
