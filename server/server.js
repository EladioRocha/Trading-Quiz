const express = require('express'),
  app = express(),
  path = require('path'),
  publicPath = path.join(__dirname, '..', 'public')
  
app.use(express.static(publicPath))

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
})

app.listen(3002, () => {
  console.log('Server on port 3000');
})