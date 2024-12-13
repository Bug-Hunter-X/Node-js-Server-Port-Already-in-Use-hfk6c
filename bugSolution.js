const express = require('express');
const app = express();
let server; // Declare server variable outside the try block

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const port = 3000;

const startServer = () => {
  try {
    server = app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    if (error.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use.  Shutting down existing server...`);
      if (server) {
        server.close(() => {
          console.log('Existing server closed successfully.');
          startServer(); // Try starting the server again
        });
      } else {
        console.error('Failed to start server.');
      }
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }
};

startServer();