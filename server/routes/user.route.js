const UserController = require('../controllers/user.controller');  

module.exports = (app) => {
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.getUser);
    app.post('/api/users/new', UserController.createUser);
    app.delete('/api/users/:id', UserController.deleteUser);
}