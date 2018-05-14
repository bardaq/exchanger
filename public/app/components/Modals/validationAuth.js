export default function validationAuth(phone, pass, rpwd){
	let errors = {};

	if(rpwd){
		if( String(pass) !== String(rpwd) ) {
			errors = {...errors, passwordsDissmatch: true , warningMessage:'Пароли не совпадают' };
		}
	}

	if( String(pass).length < 8 )
		errors = {...errors, invalidPassword: true, warningMessage:'Пароль должен содержать хотябы 8 символов' };

	if( !(!(/[_]/.test(phone)) && phone !== '') )
		errors = { ...errors, invalidPhone: true, warningMessage:'Введите корректный телефон' };

	if (Object.keys(errors).length > 0) return errors;
	else return 'valid';

}