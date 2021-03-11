// Dependencies
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Data
const reservation = [
  {
  customerName: 'John',
  customerEmail: 'j@j.com',
  customerID: 1,
  phoneNumber: '5555555',
},
{
  customerName: 'Josh',
  customerEmail: 'j@j.net',
  customerID: 2,
  phoneNumber: '5545555',
}
];

const waitlist = [
{
  customerName: 'Jim',
  customerEmail: 'j@j.org',
  customerID: 3,
  phoneNumber: '4444444',
}
];

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/api/reservation', (req, res) => {
  res.json(reservation);
});

app.get('/api/waitlist', (req, res) => {
  res.json(waitlist);
});


if (reservation.length < 5) {
  app.post('/api/reservation', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newReservation = req.body;

  console.log(newReservation);

  // We then add the json the user sent to the character array
  reservation.push(newReservation);

  // We then display the JSON to the users
  res.json(newReservation);
});
} else {
  app.post('/api/waitlist', (req, res) => {
    
    const newWaitlist = req.body;
  
    console.log(newWaitlist);
  
    waitlist.push(newWaitlist);
  
    res.json(newWaitlist);
  });
};

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));