var async = require('async');
var oracledb = require('oracledb');
var dbConfig = require('./conf/dbconfig.js');

var doconnect = function(cb) {
  oracledb.getConnection(dbConfig, cb);
};

var dorelease = function(conn) {
  conn.close(function (err) {
    if (err)
      console.error(err.message);
  });
};

var dotruncate = function(conn, cb) {
  conn.execute("TRUNCATE TABLE DOLAR", function (err) {
    return cb(err, conn);
  });
};

var doinsert = function(conn, cb) {
  var sql = "INSERT INTO DOLAR VALUES (:a, :b)";

  var binds = [
    { a: 1, b: "Test 1 (One)." },
    { a: 2, b: "Test 2 (Two)." },
    { a: 3, b: "Test 3 (Three)." },
    { a: 4 },
    { a: 5, b: "Test 5 (Five)." }
  ];

  // bindDefs is optional for IN binds but it is generally recommended.
  // Without it the data must be scanned to find sizes and types.
  var options = {
    autoCommit: true,
    bindDefs: {
      a: { type: oracledb.NUMBER },
      b: { type: oracledb.STRING, maxSize: 15 }
    } };

  conn.executeMany(sql, binds, options, function (err, result) {
    if (err)
      return cb(err, conn);
    else {
      console.log("Result is:", result);
      return cb(null, conn);
    }
  });
};

async.waterfall(
  [
    doconnect,
    dotruncate,
    doinsert
  ],
  function (err, conn) {
    if (err) { console.error("In waterfall error cb: ==>", err, "<=="); }
    if (conn)
      dorelease(conn);
  });