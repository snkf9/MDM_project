var {conn, sql} = require('../../connect');
module.exports = function(){
    this.getAll = async function(result){
        //SELECT * FROM test1
        var pool = await conn;
        var sqlString = "SELECT * FROM test1";
        return await pool.request()
        .query(sqlString, function(err, data){
            if(data.recordset.length >0){
                result(null, data.recordset);
            }
            else{
                result(true, null);
            }
        });
      
    };

    this.getOne = async function(id, result){
        //SELECT * FROM test WHERE Id?
        var pool = await conn;
        var sqlString = "SELECT * FROM test1 WHERE Id= "+id;
        return await pool.request()
        .input('varId', sql.Int, id)
        .query(sqlString, function (err, data){
            if (data.recordset.length > 0 ){
                result(null, data.recordset[0]);
            }
            else{
                result(true, null);
            }
        });
    }

    this.create = async function(newData, result){
        
        //INSERT INTO table ()  VALUE ()
        var pool = await conn;
        var sqlString ="INSERT INTO test1(Name) VALUES(@name)";
        return await pool.request()
        .input('name', sql.NVarChar, newData.Name)
        .query(sqlString, function(err, data){
            if(err){
                result(true, newData);
            } 
            else{
                result(null, newData)
            }
        });
    };

    this.update = async function(newData, result){
        // UPDATE table SET ... = ...
        var pool = await conn;
        var sqlString ="UPDATE test1 SET Name = @name WHERE Id = @id";
        return await pool.request()
        .input('name', sql.NVarChar, newData.Name)
        .input('id', sql.Int, req.body.Id)
        .query(sqlString, function(err, data){
            if(err){
                result(true, newData);
            } 
            else{
                result(null, newData)
            }
        });
    };

    this.delete = async function(id, result){
        var pool = await conn;
        var sqlString = "DELETE FROM test1 WHERE Id= "+id;
        return await pool.request()
        .input('varId', sql.Int, id)
        .query(sqlString, function(err, data){
            if(err){
                result(true, null);
            } 
            else{
                result(null, data);
            }
        });
        }
}
