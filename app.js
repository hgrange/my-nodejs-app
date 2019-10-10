const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from CP4A 2 !");
});
 
module.exports.app = app;
