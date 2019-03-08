const express = require('express');
<<<<<<< HEAD
const app = express();

=======
const path = require('path');

const app = express();

// by default is set up to serve static
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'views')));
>>>>>>> 26abf74cf218a53e6c881fa1a03445c844d7caa4

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
