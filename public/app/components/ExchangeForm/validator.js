export default function validation(transaction, errorSetter){
	let errors = {};

	if( transaction.incomeAmount < 0.0001 )
		errors = {...errors, invalidPaymentAmount: true};

	// if( !(!(/[_]/.test(transaction.accountNum)) && transaction.accountNum !== '' ) )
	// 	errors = {...errors, invalidAccountNum: true};

	if( !(!(/[_]/.test(transaction.phone)) && transaction.phone !== '') )
		errors = {...errors, invalidPhone: true};

	if( !transaction.agreeWithTerms )
		errors = {...errors, invalidCheck: true};

	if (Object.keys(errors).length > 0) return errorSetter(errors);
	else return 'valid';

}