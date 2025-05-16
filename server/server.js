const express = require('express');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/job');
const app = express();

app.use(express.json());
app.use('/api/jobs', jobRoutes);

mongoose.connect('mongodb://localhost:27017/freelance', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

app.listen(5000, () => {
    console.log('Server running on port 5000');
});