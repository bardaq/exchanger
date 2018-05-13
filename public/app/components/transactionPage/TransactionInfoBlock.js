import React from 'react';
import { Table } from 'reactstrap';
import Countdown from 'react-countdown-now';
import { delete_cookie } from 'sfcookies';

export default class TransactionPage extends React.Component {
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
			<p>Чтобы совершить обмен переведите {this.props.directionAmount} btc на адрес 1fC2yGG7E1f6t6boMncrCSQ2s3tBZBEcx. Избежать ошибок можно воспользовавшись QR кодом справа. Как только транзакция получит 1 подтверждение – мы переведем вам деньги на  карту {this.props.accountNum}. Перевод будет выполнен от физ. лица без комментариев.</p>
			<Table striped>
				<tbody>
					<tr>
						<th scope="row">Резерв суммы</th>
						<td>{this.props.paymentAmount} {this.props.currency} ( <Countdown date={this.props.dataStamp + 1000*60*60} renderer={ this.renderer } /> )</td>
					</tr>
					<tr>
						<th scope="row">Резерв курса</th>
						<td>{this.props.rate} {this.props.currency} ( <Countdown date={this.props.dataStamp + 1000*60*60} renderer={ this.renderer } /> )</td>
					</tr>
					<tr>
						<th scope="row">Отдаете</th>
						<td>{this.props.directionAmount} btc</td>
					</tr>
					<tr>
						<th scope="row">На  адрес</th>
						<td>1fC2yGG7E1f6t6boMncrCSQ2s3tBZBEcx</td>
					</tr>
					<tr>
						<th scope="row">Получаете</th>
						<td>{this.props.paymentAmount} {this.props.currency}</td>
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