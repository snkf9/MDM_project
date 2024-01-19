module.exports = function(app) {
    var userController = require('../controllers/user.controller');
    
    
    app.get('/test1', userController.getList)
    

    app.get('/test1/:id', userController.getById)

    
    app.post('/test1', userController.addNew);
    

    app.put('/test1', userController.update);
    

    app.delete('/test1/:id', userController.delete);
    

}