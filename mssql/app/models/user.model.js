var {conn, sql} = require('../../connect');
module.exports = function(){
    this.getAll = async function(result){
        //SELECT * FROM test1
        var pool = await conn;
        var sqlString = "SELECT * FROM SV";
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

    this.getOne = async function(newData, result){
        //SELECT * FROM test WHERE Id?
        var pool = await conn;
        var sqlString = "SELECT * FROM SV WHERE Id= @id ";
        return await pool.request()
        .input('id', sql.Int, newData.Id)
        .query(sqlString, function (err, data){
            if (data.recordset.length > 0 ){
                result(null, data.recordset[0]);
            }
            else{
                result(true, null);
                console.log(err);
            }
        });
    }

    this.create = async function(newData, result){
        
        //INSERT INTO table ()  VALUE ()
        var pool = await conn;
        console.log(newData);
        var sqlString ="INSERT INTO SV ( First_Name , Last_Name , Age , Gender) VALUES (@first_name, @last_name, @age, @gender )";
        
        return await pool.request()
        .input('first_name', sql.NVarChar, newData.first_name)
        .input('last_name', sql.NVarChar, newData.last_name)
        .input('age', sql.VarChar, newData.age)
        .input('gender', sql.VarChar, newData.gender)
        .query(sqlString, function(err, data){
            if(err){
                result(true, newData);
                console.log(err);
            } 
            else{
                result(null, newData)
            }
            
        });
    };

    this.update = async function(newData, result){
        // UPDATE table SET ... = ...
        var pool = await conn;
        var sqlString ="UPDATE SV SET First_Name = @first_name , Last_Name =@last_name, Age =@age , Gender = @gender WHERE Id = @id";
        return await pool.request()
        
        .input('first_name', sql.NVarChar, newData.first_name)
        .input('last_name', sql.NVarChar, newData.last_name)
        .input('age', sql.VarChar, newData.age)
        .input('gender', sql.VarChar, newData.gender)
        .input('id', sql.Int, newData.Id)
        .query(sqlString, function(err, data){
            if(err){
                result(true, newData);
                console.log(err)
            } 
            else{
                result(null, newData)
            }
        });
    };

    this.delete = async function(newData, result){
        var pool = await conn;
        var sqlString = "DELETE FROM SV WHERE Id=@id ";
        return await pool.request()
        .input('id', sql.Int, newData.Id)
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
