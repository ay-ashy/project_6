const usersModel = require("./../../../db/model/user");

const signUp = (req, res) => {
  const { firstName, lastName, age, country, email, password, role } = req.body;

  const user = new usersModel({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
    role,
  });

  user
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
module.exports = {
  signUp,
};
