var options = {
  series: [{
    name: "Total",
    data: [8, 12, 21, 22, 26, 25, 20]
}],
  chart: {
  height: 200,
  width: '100%',
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight'
},

markers: {
    size: 5,
    colors: ['#9374cc'],
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

grid: {
  row: {
    colors: ['transparent'], // takes an array which will be repeated on columns
    opacity: 0.3
  },
},

colors: ['#9a7dcf'],
xaxis: {
  categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
}
};

var chart = new ApexCharts(document.querySelector("#linechart"), options);
chart.render();


