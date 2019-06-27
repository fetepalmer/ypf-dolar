import request = require('request');


// tslint:disable-next-line: max-line-length
const bcraToken = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODk1MTkzNDIsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJndWlsbGVybW8ucGljYXJkaUBnbWFpbC5jb20ifQ.9jOgB0hbGthcW0Alv4QnVytujtrZOA5dHCPQLHc0V5XIYPPQdjbZhGJ3ktvqbDArbSM0eQ1zcfZQWHdynpGDUA';

async function getLastDolar(callback: (value: number, date: string) => void) {
  function processResponse(error, _, result) {
    if (error) console.error(error);
    else {
      const {v, d}  = result[result.length - 1];
      callback(v, d);
  }
  }
  request.get('https://api.estadisticasbcra.com/usd_of', { json: true }, processResponse).auth('', '', true, bcraToken);
}

getLastDolar((value, date) => console.log(value, date));
