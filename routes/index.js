const thoughtController = require('../controllers/thoughtController');
const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.route("/users")
  .get(userController.getUser)
  .post(userController.createUser);

router.get("/thoughts", thoughtController.getThoughts)

module.exports = router;