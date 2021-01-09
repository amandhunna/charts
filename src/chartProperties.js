const data = (values = {} ) => {
    const { hover, labels, type  } = values;

    let chartPoints = [12, 19, 3, 5, 2, 3];

    const odds = ['line', 'scatter'].includes(type);
    if(odds) { }

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green'], // labels
        datasets: [{
            label: 'ONE', //hover,
            data: chartPoints,
            backgroundColor: [
                '#1abc9c',
                '#27ae60',
                '#e74c3c',
                '#bdc3c7',
            ],
            borderColor: [
                '#1abc9c',
                '#27ae60',
                '#e74c3c',
                '#bdc3c7',
            ],
            borderWidth: 1
        }]
    };
    return data;
}

const options = (values = {}) => { 
    
    const { 
        enableYScale = false,
        enableXScale = false,
        showLines = true
    } = values;

   const  options =  {
     scales: {
            ...enableYScale ? { 
                yAxes: [{
                    ticks: {
                    beginAtZero: true
                  }
                }],
            } : {}
        },
        spanGaps: false,
        showLines: showLines, // line graph
    }
    return options;
}

export default {
    data,
    options,
};
