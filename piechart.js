var options = {
    series: [35, 26, 35],
    colors:['#ff80ab','#f50057','#ff4081'],
    labels: ['Sweet & Simple LTD. 37:45 h', 'Nike Running Shoes 16:22 h', 'Some Cool Company 3:14 h'],
    fill: {
        colors:
            ['#ff80ab','#f50057','#ff4081']
        },
    chart: {
    type: 'donut',
    size: 350,
  },

  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: 'left',
    offsetX: -10,
    width: 350,
    markers: {
        width: 10,
        height: 10,
        fillColors: ['#ff4081', '#f50057', '#ff80ab'],
    }
},
  };

  var chart = new ApexCharts(document.querySelector("#piechart"), options);
  chart.render();

