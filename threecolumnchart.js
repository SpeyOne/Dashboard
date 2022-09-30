var options = {
  series: [{
  data: [45, 33.33, 45]
}, {
  data: [35, 33.33, 35]
}, {
  data: [20, 33.33, 20]
}],
  chart: {
  type: 'bar',
  height: 200,
  stacked: true,
  toolbar: {
    show: false
  },
  zoom: {
    enabled: true
  }
},
responsive: [{
  breakpoint: 480,
  options: {
  }
}],
plotOptions: {
  bar: {
    horizontal: false,
    borderRadius: 0
  },
},
xxaxis: {
    lines: {
      show: false,
    }
  },
  yaxis: {
    lines: {
      show: false,
    }
  },
legend: {
 show: false,
},
fill: {
  opacity: 1
}
};

var chart = new ApexCharts(document.querySelector("#threecolumnchart"), options);
chart.render();


