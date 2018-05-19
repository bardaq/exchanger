import React from "react";
import { Container, Row} from 'reactstrap';
import FaqItem from "./FaqItem";


export default class FaqSection extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { collapse: false, status: 'Closed' };
		this.faqItemsList = [
			{
				key: "faqItem0",
				title: "Как обменять?",
				content: <ul>
							<ol>1. Выберите направление какую валюту на какую хотите обменять. </ol>
							<ol>2. Заполните форму и нажмите "обменять". </ol>
							<ol>3. Вы создали заявку на обмен. Проверьте ваши реквизиты.</ol>
							<ol>4. Эту заявку нужно оплатить. </ol>
							<p>Как только получим ваш перевод – обменяем. Среднее время оперции 15 минут.</p>
						</ul>
			},
			{
				key: "faqItem1",
				title: "Сколько можно вывести за раз?",
				content: <p>Максимум за один раз мы можем совершить обмен на эквивалент суммы 10 000 usd, а минимум – 10 usd</p>
			},
			{
				key: "faqItem2",
				title: "Если я ошибся в адресе?",
				content: <p>Срочно попытайтесь отменить платеж. Мы не компенсируем убытки за ваши ошибки и создаем условия где ошибится сложно. Не вводите адрес кошелька вручную, пользуйтесь QR кодом.</p>
			},
			{
				key: "faqItem3",
				title: "Вы работаете ночью?",
				content: <p>Да. Без выходных и праздников, 24/7.</p>
			},
			{
				key: "faqItem4",
				title: "А вы точно не мошенники?",
				content: <p>Нет, не мошенники. Многие убедились в этом и пользуются сервисом. Если вы сомневаетесь – можете проверить обменом маленькой суммы.</p>
			},
			{
				key: "faqItem5",
				title: "Какая комиссия?",
				content: <p>Комиссия сервиса составляет от 1% до 4%, в зависимости от направления обмена. Вам будет начислена именно та сумма, которую вы видите в поле "Получите".</p>
			},
			{
				key: "faqItem6",
				title: "Когда я получу деньги?",
				content: <p>Обычно время от получения платежа нами до выплаты вам не превышает 10 минут. Тем не менее, сеть бывает перегруженной и требует до 30 минут. Мы советует не экономить на комиссии за перевод, когда вы оплачиваете заявку на обмен, потому что больше всего времени уходит на то, чтобы ваш перевод получил первые подтверждения.</p>
			},
			{
				key: "faqItem7",
				title: "Боюсь за личные данные",
				content: <p>Мы действительно храним данные. Но третим лицам не разглашаем. Если вам нужен анонимный обмен – свяжитесь с ними удобным вам способом.</p>
			}
		]
	}

	renderFaqItems(faqItems){
		if (faqItems.length > 0) {
			return faqItems.map((item, faqItems) => (
				<FaqItem title={item.title} content={item.content} key={item.key}/>
			))
		}
	}

	toggle() {
		this.setState({ collapse: !this.state.collapse });
	}

	render() {
		return (
			<section id="faqSection" className="faqSection">
				<Container className="d-flex flex-column">
					<h2>Часто задаваемые вопросы</h2>
					<p>Если вы не нашли ответ, то обратитесь в онлайн чат</p>
					<Row>
						{this.renderFaqItems(this.faqItemsList)}
					</Row>
			</Container>
		</section>
		);
	}
}
