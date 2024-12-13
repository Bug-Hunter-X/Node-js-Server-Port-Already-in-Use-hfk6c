const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//The bug is that if you run the server using node app.js and then try to access it with your browser using the address http://localhost:3000/, you will get a 'Hello, world!' response.
//However if you run the server again using node app.js without stopping the first server, you will get an error that the port is already in use.
//This is because the first server is still running and the second server is trying to use the same port.
//To avoid this, you should stop the first server before running the second server.