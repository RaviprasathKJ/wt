const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Serving static files from the public directory

// GET request handler for the contact form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// POST request handler for form submission
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // You can handle the form data as required here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    res.send('Thank you for your message!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
