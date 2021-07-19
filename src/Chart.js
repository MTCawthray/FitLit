class Chart {
  constructor(node, weeklyOunces) {
    this.type = 'horizontalBar';
    this.data = {
      labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
      dataSets: [
              {
                label: '',
                backgroundColor: ['#3e95cd', '#8e5ea2','#3cba9f','#e8c3b9','#c45850'],
                data: weeklyOunces
              }
            ]
          };
    this.options = {
        legend: { display: false },
        title: {
          display: true,
          text: 'weekly ounces drank'
        }
      }
    }
  }
  
export default Chart;
