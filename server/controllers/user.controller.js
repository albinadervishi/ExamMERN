const User = require('../model/user.model');

module.exports.findAllUsers = (req, res) => {
    User.find() 
         .then((allUsers) =>{res.json({pirates: allUsers })})
         .catch ((err) => {res.json({ message: "Something went wrong", error: err})});
}

module.exports.getUser = (request, response) => {
    User.findOne({ _id: request.params.id })
        .then(user => response.json(user))
        .catch(err => response.json(err));
}

module.exports.createUser = (request, response) => {
    const { firstName, position } = request.body;
    User.exists({ firstName })
      .then(firstNameExists => {
        if (firstNameExists) {
          return Promise.reject({ errors: { firstName: { message: 'This firstname is already taken' } } });
        } else {
          return User.exists({ position: 'Captain' });
        }
      })
      .then(captainExists => {
        if (captainExists && position === 'Captain') {
          return Promise.reject({ errors: { position: { message: 'A pirate with the role Captain already exists' } } });
        } else {
          return User.create(request.body);
        }
      })
      .then(user => response.json(user))
      .catch(err => response.json(err));
  };
  

  module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
