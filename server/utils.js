export function formatDate(date) {
	let d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();
	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;
	return [year, month, day].join('-');
}

export const createDaySummary = () => {
	const today = new Date(),
			activity = Math.floor(Math.random() * 30) + 1;
	return {
		date: formatDate(today),
		activity: activity
	}
}
