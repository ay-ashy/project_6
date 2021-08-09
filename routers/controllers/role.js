const roleRouter = require("./../../db/model/role");

const roleFun = (req, res) => {
  console.log(roleRouter);
  const { role } = req.body;

  const userRole = new roleRouter({ role });

  userRole
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { roleFun };
