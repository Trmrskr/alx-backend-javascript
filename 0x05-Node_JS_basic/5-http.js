const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const HOST = 'localhost';

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let dbInfo = 'This is the list of our students\n';
    await countStudents(process.argv[2])
      .then((msg) => {
        dbInfo += msg;
        res.end(dbInfo);
      })
      .catch((err) => {
        dbInfo += err.message;
        res.end(dbInfo);
      });
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});

module.exports = app;
