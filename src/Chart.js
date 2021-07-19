const chart = {
  horizontalBar: (weeklyOunces) => {
    return new Chart(document.getElementById('barChartHorizontal'), {
      type: 'horizontalBar',
      data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [
          {
            label: 'weekly ounces drank',
            backgroundColor: ['#3e95cd', '#8e5ea2','#3cba9f','#e8c3b9','#c45850', '#69D53E', '#69D53E'],
            data: weeklyOunces
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
  },

  groupedBar: (hours, quality) => {
    return new Chart(document.getElementById("barChartGrouped"), {
      type: 'bar',
      data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [
          {
            label: 'hours slept',
            backgroundColor: '#3e95cd',
            data: [hours[0], hours[1], hours[2], hours[3], hours[4], hours[5], hours[6]]
          }, {
            label: 'sleep quality',
            backgroundColor: '#8e5ea2',
            data: [quality[0], quality[1], quality[2], quality[3], quality[4], quality[5], quality[6]]
          }
        ]
      },
      options: {
        title: {
          display: false,
          text: ''
        }
      }
    });
  }
}

export default chart;
