// const mongoose = require('mongoose');

// // import environmental variables
// require('dotenv').config({ path: 'variables.env' });

// // Connect to Database and handle any bad connections
// mongoose.connect(process.env.DATABASE);
// mongoose.connection.on('error', err => {
//   console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
// });

// import models -> creates a Singleton
require('./models/Demo');

// Start our app!
const app = require('./app');

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
