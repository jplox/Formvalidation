const express = require("express"); // express module
const router = express.Router(); //  router
const User = require("../models/user"); // getting schema present in models folder

/**
 * Getting All the Schema
 */
router.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.json(data); //
  } catch (err) {
    res.send("Error", err);
  }
});

/**
 * Post Schema
 */
router.post("/", async (req, res) => {
  const users = new User({
    //client side data
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    mobile_no: req.body.mobile_no,
    password: req.body.password,
    password_confirmation: req.body.password_confirmation,
  });
  try {
    const a = await users.save();
    res.json(a);
    console.log(JSON.stringify(a));
  } catch (err) {
    res.send(err);
  }
});
router.post("/login", (req, res) => {
  User.find(req.body, (err, data) => {
    if (data.length) res.status(200).send(data);
    else res.status(415).send(err);
  });
});

module.exports = router;
