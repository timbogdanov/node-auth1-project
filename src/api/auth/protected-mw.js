const express = require('express');

module.exports = (req, res, next) => {
  //check if client is authenticated
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.status(401).json({ message: 'you shall not pass' });
  }
};
