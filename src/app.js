const request = require('request');

const options = {
  method: 'POST',
  json: true,
  url: 'https://api.estadisticasbcra.com/usd_of',  
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODk1MTkzNDIsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJndWlsbGVybW8ucGljYXJkaUBnbWFpbC5jb20ifQ.9jOgB0hbGthcW0Alv4QnVytujtrZOA5dHCPQLHc0V5XIYPPQdjbZhGJ3ktvqbDArbSM0eQ1zcfZQWHdynpGDUA'
  }
};

let body = 'pepe';

function callback(error, response, body) {
 if (!error && response.statusCode == 200) {
    const info = JSON.parse(body);
    console.log(info.stargazers_count + " Stars");
    console.log(info.forks_count + " Forks");
  }
  console.log(response);
  console.log(body);
  
}

request(options, callback).auth(null, null, true, 'bearerToken');
console.log(body);
//console.log(response);
console.log('holaaaaa');




/*********
let https = require('https');
let request = require('request');
let data ={};

var options = {
  method: 'POST',
  body: data,
  json: true,
  url: 'https://api.estadisticasbcra.com/usd_of',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODk1MTkzNDIsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJndWlsbGVybW8ucGljYXJkaUBnbWFpbC5jb20ifQ.9jOgB0hbGthcW0Alv4QnVytujtrZOA5dHCPQLHc0V5XIYPPQdjbZhGJ3ktvqbDArbSM0eQ1zcfZQWHdynpGDUA'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
  }
}
//call the request

request(options, callback);

console.log(data);
*******/

