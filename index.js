const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const loginRouter = require('./routes/loginRoute')
const screenRouter = require('./routes/screenRoutes');
const scheduleRouter = require('./routes/scheduleRoutes');
const playlistRoutes  = require('./routes/playlistRoute');
const membersRoutes = require('./routes/AdmincreateduserRoute');


// Mongo DB Connections
mongoose.connect('mongodb://0.0.0.0:27017/login-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(response=>{
    console.log('MongoDB Connection Succeeded.')
}).catch(error=>{
    console.log('Error in DB connection: ' + error)
});


// Middleware Connections
app.use(cors())
app.use(express.json())
app.use('/api',loginRouter);
app.use('/api',screenRouter);
app.use('/schedule/',scheduleRouter);
app.use('/playlist',playlistRoutes);
app.use('/members',membersRoutes);

app.use(express.static('uploads'));

// Routes

// Connection
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('App running in port: '+PORT)
})

