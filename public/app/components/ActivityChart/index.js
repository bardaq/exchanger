import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import { GET_ACTIVITY_SUMMARIES_API_URL } from '../../config';

export default class ActivityChart extends React.Component {
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
		return <section className='activity-chart'>
			<Container fluid>
				<h2>Количество операций в день</h2>
				<Row>
					<Col xs="12" sm="12">
						<div className="chart-container">
							<Line
								data= {
									{
										labels: this.state.labels,
										datasets: [{
											label: '# of Votes',
											data: this.state.data,
											backgroundColor: 'transparent',
											borderColor: 'white',
											pointBorderColor: 'white',
											pointBackgroundColor: 'white',
											pointHoverBackgroundColor: 'white',
											pointHoverBorderColor: 'white',
											pointBorderWidth: 4,
											pointHoverRadius: 4,
											pointHoverBorderWidth: 1,
											pointRadius: 2,
											fill: false,
											borderWidth: 2,
										}]
									}
								}
								options= {
									{
										responsive: true,
										maintainAspectRatio: false,
										legend: {
											position: "none"
										},
										scales: {
											yAxes: [
												{
													ticks: {
														fontColor: "rgba(255,255,255,.5)",
														fontStyle: 300,
														beginAtZero: true,
														maxTicksLimit: 7,
														padding: 20,
														suggestedMin: 0,
														suggestedMax: 30,
													},
													gridLines: {
														drawBorder: false
													}
												}
											],
											xAxes: [
												{
													gridLines: {
														zeroLineColor: "transparent"
													},
													ticks: {
														padding:25,
														fontColor: "rgba(255,255,255,.5)",
														fontStyle: 300,
														suggestedMin: 0,
														suggestedMax: 10,
													},
													gridLines: {
														drawTicks: false,
														display: false,
														drawBorder: false
													}
												}
											]
										}
									}
							}/>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	}
}