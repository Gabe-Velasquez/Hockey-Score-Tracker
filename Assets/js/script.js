

// fetch request to rapidAPI 
const url = 'https://api-hockey.p.rapidapi.com/games/?date=2020-10-02';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c81f6801edmsh79c0eba2b33f6e9p104d77jsnb347ea9fea83',
		'X-RapidAPI-Host': 'api-hockey.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

fetch("https://v1.hockey.api-sports.io/games/events?game=8279", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v1.hockey.api-sports.io",
		"x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
