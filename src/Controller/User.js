const User = require("../models/User");

exports.User = (req, res) => {
  //res.status(200).json({ msg: "hello I am user" });

  const { Email, Name, Subject, Message } = req.body;

  const user = new User({
    Email: Email,
    Name: Name,
    Subject: Subject,
    Message: Message,
  });

  user.save((error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      res.status(201).json({ user });
    }
  });
};
