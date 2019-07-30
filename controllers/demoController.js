// const mongoose = require('mongoose');

// const Demo = mongoose.model('Demo');

exports.homePage = (req, res, next) => {
  res.render('index', { title: 'Home' });
};
