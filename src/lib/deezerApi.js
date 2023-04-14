import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://deezerdevs-deezer.p.rapidapi.com/track/%7Bid%7D',
  headers: {
    'X-RapidAPI-Key': '881581ba0bmsh6d4e7225aeb7ba1p181078jsn54651a41ac85',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});