var options = {
    series: [{
    type: 'column',
    data: [50, 30, 60, 50, 60, 65, 68]
  }, {
    name: 'Social Media',
    type: 'line',
    data: [50, 30, 60, 50, 60, 65, 68]
  }],
  
    chart: {
    height: 365,
    width: '100%',
    type: 'line',
    toolbar: {
      show: false,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: "vertical",
      shadeIntensity: 1,
      gradientToColors: ['#7b56bd'], // optional, if not defined - uses the shades of same color in series
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [20, 70, 100],
      colorStops: []
    }
  },



  stroke: {
    width: [0, 2]
  },

  legend: {
    show: false,
  },

  dataLabels: {
    enabled: false,
    enabledOnSeries: [1]
  },
  labels: ['30 May 2021', '31 May 2021', '01 Jun 2021', '02 Jun 2021', '03 Jun 2021', '04 Jun 2021', '05 Jun 2021'],
  xaxis: {
    type: 'datetime',
    format: 'dd/MM',
    labels: {
      datetimeFormatter: {
        year: 'YYYY',
        month: 'MM',
        day: 'dd.MM',
        hour: 'HH:mm',
      },
    }
  },

  markers: {
    size: 5,
    colors: ['#FFC400'],
    strokeOpacity: 1,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 0,
    offsetX: 0,
    offsetY: 0,
    onClick: undefined,
    onDblClick: undefined,
    showNullDataPoints: true,
    hover: {
      size: undefined,
      sizeOffset: 3
    }
},

  colors: ['#A489D3', '#FFC400'],
  
  yaxis: [{
  }, {
    opposite: true,
  }],
  };

  var chart = new ApexCharts(document.querySelector("#linecolumnchart"), options);
  chart.render();


