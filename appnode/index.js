const express = require('express');

const cors = require('cors');
const app = express();

app.use(cors());

// Some other stuffs 
app.get('/', (req, res) => {
  res.send('Welcome --- this is node.js!');
});

app.get('/hello/:name', (req, res) => {
  res.send(req.params.name);
});

app.get('/age/:no', (req, res) => {
  res.send(req.params.no);
});



app.listen(5000, () => { 
  console.log('Express is listening on port 5000!')
})