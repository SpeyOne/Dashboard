var options = {
  series: [{
    name: "Desktops",
    data: [800, 700, 850, 800, 900, 1000, 1204, 1100, 1000, 900]
}],
  chart: {  
  height: 110,
  width: 170,
  type: 'line',
  toolbar: {
     show: false,
  },
},

dataLabels: {
  show: false
},
stroke: {
  curve: 'smooth',
  colors: ['#ec407a']  
},
legend: {
    show: false,
  },
  grid: {
  show: false,
  },

  xaxis: {
    labels: {
        show: false,
        showDuplicates: false,
        trim: false,
    },
    axisBorder: {
        show: false,
    },
    axisTicks: {
        show: false,
    },
    crosshairs: {
        show: false,
        },
    },
    yaxis: {
        show: false,
        showAlways: false,
        showForNullSeries: false,
        seriesName: undefined,
        opposite: false,
        reversed: false,
        logarithmic: false,
        forceNiceScale: false,
        floating: false,
        decimalsInFloat: undefined,
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        crosshairs: {
            show: false,
        },
        tooltip: {
            enabled: false,
            offsetX: 0,
        },
        
    }
    
    
};


var chart = new ApexCharts(document.querySelector("#onelinechart"), options);
chart.render();


