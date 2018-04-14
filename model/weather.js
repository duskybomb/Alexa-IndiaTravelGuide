// var Client = require('node-rest-client').Client;
// var client = new Client();
const request = require('request');

const API_KEY = "appid=14fd805499977b570d354d57c4c473b2";
const UNIT_SYSTEM = "units=metric";
const ENDPOINT = "http://api.openweathermap.org/data/2.5/weather?";

var Weather = {
    weatherFromCity: function(city, callback) {
        console.log("I am here.");
        const apiUrl = ENDPOINT + API_KEY + "&" + UNIT_SYSTEM + "&" + 'id=' + city;
        console.log(apiUrl);
        console.log(city);
        request.get(apiUrl, (error, response, body) => {
            console.log(response);
            // console.log(data);
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the body

            callback(body);
        });
    }
};


/*
request.get(url, (error, response, body) => {
            // let json = JSON.parse(body);
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the body

            const theFact = body;
*/


module.exports = Weather;