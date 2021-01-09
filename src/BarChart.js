import React, { useEffect } from 'react';
import Chart from 'chart.js';

import chartProperties from './chartProperties';

function BarChart(props) {
  const colorPickerRef = React.createRef();

  useEffect(() => {
    const ctx = colorPickerRef.current.getContext('2d');
    new Chart(ctx, {
    type: 'bar',
    data: chartProperties.data(),
    options: chartProperties.options(),
});
  }, []);

  return (
      <canvas id={props.chartId || "barChart"}  width="400" height="400" ref={colorPickerRef}></canvas>
  );
}

export default BarChart;
