"use strict";
exports.__esModule = true;
var async_1 = require("async");
var oracledb_1 = require("oracledb");
var config_1 = require("./conf/config");
var doconnect = function (cb) {
    oracledb_1["default"].getConnection(config_1["default"], cb);
};
var dorelease = function (conn) {
    conn.close(function (err) {
        if (err)
            console.error(err.message);
    });
};
var dotruncate = function (conn, cb) {
    conn.execute('TRUNCATE TABLE DOLAR', function (err) {
        return cb(err, conn);
    });
};
var doinsertDolar = function (conn, cb) {
    var sql = 'INSERT INTO DOLAR VALUES (TO_DATE(:a,"dd/mm/yyyy"), :b, :c, :d)';
    // sql = 'INSERT INTO DOLAR VALUES (:a, :b, :c, :d)';
    var binds = [
        { b: 44.22, c: 44.33, d: 44.44 },
        { b: 55.22, c: 55.33, d: 55.44 }
    ];
    // bindDefs is optional for IN binds but it is generally recommended.
    // Without it the data must be scanned to find sizes and types.
    var options = {
        autoCommit: true,
        bindDefs: {
            a: { type: oracledb_1["default"].DATE },
            b: { type: oracledb_1["default"].NUMBER },
            c: { type: oracledb_1["default"].NUMBER },
            d: { type: oracledb_1["default"].NUMBER }
        }
    };
    conn.executeMany(sql, binds, options, function (err, result) {
        if (err)
            return cb(err, conn);
        else {
            console.log('Result is:', result);
            return cb(null, conn);
        }
    });
};
async_1["default"].waterfall([
    doconnect,
    dotruncate,
    doinsertDolar
], function (err, conn) {
    if (err) {
        console.error('In waterfall error cb: ==>', err, '<==');
    }
    if (conn)
        dorelease(conn);
});
