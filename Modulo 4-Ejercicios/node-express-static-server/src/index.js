const path = require('path');
const express = require('express');
const app = express();

// create app server
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}/contact`);
});

// config express static server
const staticServerPath = path.join(__dirname, '../public'); // relative to the root of the project

// not found error
// not found error
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/contact.html'));
});
app.get('*', (req, res) => {
  // relative to this directory
  const notFoundFileRelativePath = '404-not-found.html';
  const notFoundFileAbsolutePath = path.join(staticServerPath, notFoundFileRelativePath);
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
