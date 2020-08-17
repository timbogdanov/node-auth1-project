const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('./user-model');

router.post('/register', (req, res) => {
  const { username, password } = req.body;

  const hash = bcrypt.hashSync(password, 8);

  Users.add({ username, password: hash })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(200).json({ message: error.message });
    });
});

module.exports = router;
