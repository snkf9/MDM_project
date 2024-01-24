module.exports = function(app) {
    var userController = require('../controllers/user.controller');
    
    
    app.post('/fetch', userController.getList)
    

    app.post('/getone', userController.getById)

    
    app.post('/add', userController.addNew);
    

    app.post('/update', userController.update);
    

    app.post('/delete', userController.delete);
    

}