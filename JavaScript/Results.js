const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '46e7505e3dmsh6a226f5ed56d4e4p148738jsnfd3fe16a8db6',
		'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
	}
};

fetch('https://priceline-com-provider.p.rapidapi.com/v1/hotels/booking-details?date_checkout=2022-11-16&date_checkin=2022-11-15&hotel_id=6733503&rooms_number=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));