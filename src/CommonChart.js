import React, { useEffect } from 'react';
import Chart from 'chart.js'
import chartProperties from './chartProperties';

function CommonChart(props) {
    const { type } = props;
    const colorPickerRef = React.createRef();

  useEffect(() => {
    const ctx = colorPickerRef.current.getContext('2d');
    new Chart(ctx, {
       type: type,
       data: chartProperties.data({type}),
       options: chartProperties.options({type}),
    });
    
  }, []);

  if(!type) {
    return <div>No chart type declared</div>
  }

  return (
      <canvas id={props.chartId || "commonChart"}  width="400" height="400" ref={colorPickerRef}></canvas>
  );
}

export default CommonChart;
