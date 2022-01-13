const express = require('express');
const cors = require('cors');
const app = express();


app.use(express.static('client/build'));
app.use(cors());

app.get('/accounts/all', function (req, res) {
  res.send({
    name: 'peter',
    email: 'peter@mit.edu',
    password: 'secret',
  });
});

const port = 3000;
app.listen(port);
console.log(`listening on port ${port}...`);