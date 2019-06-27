import async from 'async';
import oracledb from 'oracledb';
import config from './conf/config';


let doconnect = function(cb) {
  oracledb.getConnection(config, cb);
};

let dorelease = function(conn) {
  conn.close(function (err) {
    if (err)
      console.error(err.message);
  });
};

let dotruncate = function(conn, cb) {
  conn.execute('TRUNCATE TABLE DOLAR', function (err) {
    return cb(err, conn);
  });
};

let doinsertDolar = function(conn, cb) {
  let sql = 'INSERT INTO DOLAR VALUES (TO_DATE(:a,"dd/mm/yyyy"), :b, :c, :d)';
  // sql = 'INSERT INTO DOLAR VALUES (:a, :b, :c, :d)';

  let binds = [
      {b: 44.22, c: 44.33, d: 44.44},
      {b: 55.22, c: 55.33, d: 55.44}
    ];
    // bindDefs is optional for IN binds but it is generally recommended.
    // Without it the data must be scanned to find sizes and types.

  let options = {
        autoCommit: true,
        bindDefs: {
        a: { type: oracledb.DATE },
        b: { type: oracledb.NUMBER },
        c: { type: oracledb.NUMBER },
        d: { type: oracledb.NUMBER }
      } };

  conn.executeMany(sql, binds, options, function (err, result) {
  if (err)
        return cb(err, conn);
      else {
        console.log('Result is:', result);
        return cb(null, conn);
      }
    });
  };

async.waterfall(
  [
    doconnect,
    dotruncate,
    doinsertDolar
  ],
  function (err, conn) {
    if (err) { console.error('In waterfall error cb: ==>', err, '<=='); }
    if (conn)
      dorelease(conn);
  });