const chart = {
	horizontalBar: (weeklyOunces) => {
		return new Chart(document.getElementById('barChartHorizontal'), {
			type: 'horizontalBar',
			data: {
				labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
				datasets: [
					{
						label: 'weekly ounces drank',
						backgroundColor: [
							'#4CC9F0',
							'#4CC9F0',
							'#4CC9F0',
							'#4CC9F0',
							'#4CC9F0',
							'#4CC9F0',
							'#4CC9F0',
						],
						data: weeklyOunces,
					},
				],
			},
			options: {
				legend: { display: false },
				title: {
					display: true,
					text: '',
				},
			},
		});
	},

	groupedBar: (hours, quality) => {
		return new Chart(document.getElementById('barChartGrouped'), {
			type: 'bar',
			data: {
				labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
				datasets: [
					{
						label: 'hours slept',
						backgroundColor: '#a1c181',
						data: hours,
					},
					{
						label: 'sleep quality',
						backgroundColor: '#06d6a0',
						data: quality,
					},
				],
			},
			options: {
				title: {
					display: false,
					text: '',
				},
			},
		});
	},
};

export default chart;
