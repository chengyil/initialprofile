const express = require('express');
const app = express();
const InitialProfile = require('../src/intialProfile')

app.get('/', (req, res) => {
    const profile = new InitialProfile("Cheng Yi");
    console.log(req.query)
    profile
        .setName(req.query['name'])
        .setSize(req.query['size'])
        .setColor(req.query['color'])
        .setBackground(req.query['bg'])
    res.setHeader('Content-type', 'image/svg+xml');
    res.send(profile.build());
})

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  console.log("error");

  res.status(500)
  res.render('error', { error: err })
});

module.exports = app;
