const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form method="post" action="/submit">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required><br>

      <label for="age">Age:</label>
      <input type="number" id="age" name="age" required><br>

      <input type="submit" value="Submit">
    </form>
  `);
});

app.post('/submit', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  res.send(`Submitted Name: ${name}<br>Submitted Age: ${age}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
