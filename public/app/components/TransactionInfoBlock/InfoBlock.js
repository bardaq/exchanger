import React from 'react';
import { Table } from 'reactstrap';
import Countdown from 'react-countdown-now';
import { delete_cookie } from 'sfcookies';

export default class InfoBlock extends React.Component {
	constructor(props){
		super(props)
		this.renderer = this.renderer.bind(this)
	}

	transactionDeprecated(){
		alert('transcaction deprecated!')
	}

	renderer({ hours, minutes, seconds, completed }) {
		if (completed) {
			delete_cookie('transcaction');
			return 'Транзакция просрочена';
		}
		else { return <span>Истекает через {hours}:{minutes}:{seconds}</span> }
	};

	render(){

		return ( <div className='transaction-info-block'>
			<h2>Заказ ожидает  оплаты</h2>
			<p>Чтобы совершить обмен переведите {this.props.incomeAmount} btc на адрес {this.props.wallet}. Избежать ошибок можно воспользовавшись QR кодом справа. Как только транзакция получит 1 подтверждение – мы переведем вам деньги на  карту {this.props.accountNum}. Перевод будет выполнен от физ. лица без комментариев.</p>
			<Table striped>
				<tbody>
					<tr>
						<th scope="row">Резерв суммы</th>
						<td>{this.props.outcomeAmount} {this.props.outcomeCurrency} ( <Countdown date={this.props.dataStamp + 1000*60*60} renderer={ this.renderer } /> )</td>
					</tr>
					<tr>
						<th scope="row">Резерв курса</th>
						<td>{this.props.rate} {this.props.outcomeCurrency} ( <Countdown date={this.props.dataStamp + 1000*60*60} renderer={ this.renderer } /> )</td>
					</tr>
					<tr>
						<th scope="row">Отдаете</th>
						<td>{this.props.incomeAmount} btc</td>
					</tr>
					<tr>
						<th scope="row">На  адрес</th>
						<td>{this.props.wallet}</td>
					</tr>
					<tr>
						<th scope="row">Получаете</th>
						<td>{this.props.outcomeAmount} {this.props.outcomeCurrency}</td>
					</tr>
					<tr>
						<th scope="row">На карту</th>
						<td>{this.props.accountNum}</td>
					</tr>
				</tbody>
			</Table>
		</div>)
	}
}