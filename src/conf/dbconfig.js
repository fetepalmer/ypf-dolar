module.exports = {
    user          : process.env.NODE_ORACLEDB_USER || "system",
    // Instead of hard coding the password, consider prompting for it,
    // passing it in an environment variable via process.env, or using
    // External Authentication.
    password      : process.env.NODE_ORACLEDB_PASSWORD || "Landmark1",
    //password      : process.env.NODE_ORACLEDB_PASSWORD || "oracle",
  
    // For information on connection strings see:
    // https://oracle.github.io/node-oracledb/doc/api.html#connectionstrings
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/AGENCIA",
    //connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "192.168.0.202/orcl",
  
    // Setting externalAuth is optional.  It defaults to false.  See:
    // https://oracle.github.io/node-oracledb/doc/api.html#extauth
    externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
  };