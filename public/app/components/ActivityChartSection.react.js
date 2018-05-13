import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import { GET_ACTIVITY_SUMMARIES_API_URL } from '../config';

export default class ActivityChartSection extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			labels: [],
			data: []
		}
	}


	componentDidMount(){
		let newLabels = [], newData = [];

		fetch(GET_ACTIVITY_SUMMARIES_API_URL)
		.then(res => res.json())
		.then(data => {
			for( let i = 0; i<7; i++){
				newLabels.push(data[i].date);
				newData.push(data[i].activity)
			}
		})
		.then( () => {
			this.setState({
				labels: newLabels,
				data: newData
			})
		})
	}

	render() {
		return <section className='activity-chart-section'>
			<Container>
				<Row>
					<Col xs="12" sm="12">
						<h3>Количество операций в день</h3>
						<Line
							data= {{
								labels: this.state.labels,
								datasets: [{
									label: '# of Votes',
									data: this.state.data,
									backgroundColor: [
										'rgba(255, 99, 132, 0.2)',
										'rgba(54, 162, 235, 0.2)',
										'rgba(255, 206, 86, 0.2)',
										'rgba(75, 192, 192, 0.2)',
										'rgba(153, 102, 255, 0.2)',
										'rgba(255, 159, 64, 0.2)'
									],
									borderColor: [
										'rgba(255,99,132,1)',
										'rgba(54, 162, 235, 1)',
										'rgba(255, 206, 86, 1)',
										'rgba(75, 192, 192, 1)',
										'rgba(153, 102, 255, 1)',
										'rgba(255, 159, 64, 1)'
									],
									borderWidth: 1
								}]
							}}
							options= {
								{
									scales: {
										yAxes: [{
											ticks: {
												beginAtZero:true
											}
										}]
									},
									legend: {
										display: false
									}
								}
							}
						/>
					</Col>
				</Row>
			</Container>
		</section>
	}
}