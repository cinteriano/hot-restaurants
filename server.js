// Dependencies
const express = require('express');

const app = express();
const PORT = 3000;

// Data
const customerInfo = {
  name: 'Yoda',
  role: 'Jedi Master',
  age: 900,
  forcePoints: 2000,
};

const darthmaul = {
  name: 'Darth Maul',
  role: 'Sith Lord',
  age: 200,
  forcePoints: 1200,
};

// Create one more data entry for the character Obi Wan Kenobi.
const obiwanken = {
  name: 'Obi Wan Kenobi',
  role: 'Jedi Master',
  age: 57,
  forcePoints: 1220,
}
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE

//

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

app.get('/yoda', (req, res) => {
  res.json(yoda);
});

app.get('/darthmaul', (req, res) => {
  res.json(darthmaul);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
app.get('/obiwanken', (req, res) => {
  res.json(obiwanken);
});
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));