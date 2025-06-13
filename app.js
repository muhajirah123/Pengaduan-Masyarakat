const express = require('express');
const app = express();

// Serve static files dari folder 'public'
app.use(express.static('public')); 

// Jalankan server di port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});