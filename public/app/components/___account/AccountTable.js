import React from "react";
import { Container, Row, Col } from 'reactstrap';


class AccountTable extends React.Component {
	constructor(props){
		super(props);
		this.state= {
			transactions: []
		}
	}

	componentDidMount(){
		// const api = fetch('http://localhost:3000/transactions')
		// .then(res => res.json())
		// .then( json => {
		// 	this.setState({transactions: json})
			// console.log('transactions',transactions)
		// });
	}

	render(){
		const noTransactions = 'У вас пока не было транзакций. Чтобы совершить обмен пополните аккаунт. В зависимости от суммы вы получите более выгодный курс обмена.'
		return (
			<div className="card mb-3">
				<div className="card-header">
					<i className="fa fa-table"></i> История ваших транзакций
				</div>
				<div className="card-body">
					{!this.state.transactions ? noTransactions : this.state.transactions.toString()}
				</div>
			</div>
	)}
}

export default AccountTable;

// <div className="table-responsive">
//   <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
//     <thead>
//       <tr>
//         <th>ID</th>
//         <th>Адрес</th>
//         <th>Сумма</th>
//         <th>Курс</th>
//         <th>Дата</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <th>13841384</th>
//         <th>1sds12sad2e1dc8734132sda123</th>
//         <th>0.000034</th>
//         <th>16530 usd/btc</th>
//         <th>12.01.2018 16:00</th>
//       </tr>
//       <tr>
//         <th>13841384</th>
//         <th>1sds12sad2e1dc8734132sda123</th>
//         <th>0.000034</th>
//         <th>16530 usd/btc</th>
//         <th>12.01.2018 16:00</th>
//       </tr>
//     </tbody>
//   </table>
// </div>