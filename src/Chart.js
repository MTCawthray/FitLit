const chart = new Chart(document.getElementById('barChartHorizontal'), {
  type: 'horizontalBar',
  data: {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    datasets: [
      {
        label: 'weekly ounces drank',
        backgroundColor: ['#3e95cd', '#8e5ea2','#3cba9f','#e8c3b9','#c45850', '#69D53E', '#69D53E'],
        data: weeklyOunces //We need to figure out how to connect our weeklyOuncesData to this when the chart lives in it's own file!
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: ''
    }
  }
});

export default chart;
