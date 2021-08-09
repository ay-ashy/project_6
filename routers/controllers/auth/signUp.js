const createUser = require("./../../../db/model/user");

const signUp = (req, res) => {
  const { firstName, lastName, age, country, email, password, role } = req.body;

  const user = new createUser({
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
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
module.exports = {
  signUp,
};
