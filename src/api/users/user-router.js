const router = require('express').Router();

const Users = require('../auth/auth-model');

router.get('/', (req, res) => {
  Users.getAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(404).json({ message: 'cannot fetch users' });
    });
});

module.exports = router;
