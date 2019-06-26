const https = require('https');

let  bcra = {
    url: 'https://api.estadisticasbcra.com/usd_of',
    method: 'POST',
    json: true,
    headers: {
      'User-Agent': 'my request',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODk1MTkzNDIsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJndWlsbGVybW8ucGljYXJkaUBnbWFpbC5jb20ifQ.9jOgB0hbGthcW0Alv4QnVytujtrZOA5dHCPQLHc0V5XIYPPQdjbZhGJ3ktvqbDArbSM0eQ1zcfZQWHdynpGDUA',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});






