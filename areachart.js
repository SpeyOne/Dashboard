var options = {
  series: [{
  name: 'series1',
  data: [52, 45, 50, 45, 45, 52, 48, 50, 45, 48, 47]
}, {
  name: 'series2',
  data: [42, 49, 43, 45, 49, 45, 48, 45, 52, 50, 48]
}],
  chart: {
  height: 300,
  type: 'area',
  toolbar: {
    show: false,
  }
},
dataLabels: {
  enabled: false,
},
stroke: {
  show: false,
  curve: 'smooth'
},

legend: {
  show: false,
},
xaxis: {
  type: 'datetime',
  format: 'dd/MM',
  labels: {
    datetimeFormatter: {
      year: 'YYYY',
      month: 'MM',
      day: 'dd.MM',
      hour: 'HH:mm',
    }
  },
  categories: ["2021-05-30", "2021-05-31", "2021-06-01", "2021-06-02", "2021-06-03", "2021-06-04", "2021-06-05", "2021-06-06", "2021-06-07", "2021-06-08", "2021-06-09"]
},
  colors: ['#d7a9df', '#f9669a'],  
  fill: {
    opacity: 0.85,
    type: ['solid'],
  },
tooltip: {
  x: {
    type: 'datetime',
    format: 'dd/MM',
  },
},
};

var chart = new ApexCharts(document.querySelector("#areachart"), options);
chart.render();

