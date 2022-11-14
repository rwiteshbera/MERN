const jwt = require("jsonwebtoken");
const dotenv = require('dotenv').config()
const mongoose = require("mongoose");
const User = mongoose.model("User");

JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

module.exports = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    // authorization === Bearer JSON_WEBTOKEN
    if (!authorization) {
      console.log("Authorization Failed");
      return res.status(401).json({ error: "Authorization failed" });
    }

    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, JWT_SECRET_KEY, (err, payload) => {
      if (err) {
        return res
          .status(401)
          .json({ error: "You must be logged in", err, token, JWT_SECRET_KEY });
      }

      const { _id } = payload;
      User.findById(_id).then((userData) => {
        req.user = userData;
        next();
      });
    });
  } catch (error) {
    console.log(error);
  }
};
