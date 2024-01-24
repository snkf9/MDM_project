var sql =require('mssql/msnodesqlv8');

var config = {
    server: "MAIN3\\SQLEXPRESS1",
    user: "sa",
    port: "1433",
    password: "123456",
    database: "QLSV",
    driver: "msnodesqlv8",
    option: {
        trustedConnection: true
    },
};

const conn = new sql.ConnectionPool(config)
.connect().then(pool => {
    return pool;
});

module.exports = {
    conn: conn,
    sql: sql
}