import React, { useEffect } from 'react';
import Chart from 'chart.js'
// https://codepen.io/Shokeen/pen/rywxmY

function LineChart(props) {
    const { fill = false  } = props; 
  const colorPickerRef = React.createRef();

  useEffect(() => {
    
    Chart.defaults.global.defaultFontFamily = "Lato";
    Chart.defaults.global.defaultFontSize = 18;

    var dataFirst = {
        label: "Car A - Speed (mph)",
        data: [0, 59, 75, 20, 20, 55, 40],
        lineTension: 0,
        fill: fill,
        borderColor: 'red'
    };

    var dataSecond = {
        label: "Car B - Speed (mph)",
        data: [20, 15, 60, 60, 65, 30, 70],
        lineTension: 0,
        fill: fill,
        borderColor: 'blue'
    };

    var speedData = {
      labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
      datasets: [dataFirst, dataSecond]
    };

    var chartOptions = {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 80,
          fontColor: 'black'
        }
      }
    };
    const ctx = colorPickerRef.current.getContext('2d');
    var lineChart = new Chart(ctx, {
      type: 'line',
      data: speedData,
      options: chartOptions
    });
  }, []);

  return (
      <canvas id={props.chartId || "mlc"}  width="400" height="400" ref={colorPickerRef}></canvas>
  );
}

export default LineChart;
