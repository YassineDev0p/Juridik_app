const express = require('express')
const db = require('./queries')
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express()
const port = 3001
app.use(cors());
app.use(bodyParser.json())
app.use(
bodyParser.urlencoded({
extended: true,
})
)
app.get('/', (request, response) => {
response.json({ info: 'Backend with Express Node and Postgres' })
})
app.listen(port, () => {
console.log(`App running on port ${port}.`)
})

app.get('/getClients', db.getClients)
app.post('/createClient', db.createClient)
app.get('/getFiles', db.getFiles)
app.post('/createAppoint', db.createAppoint)
app.post('/createFile', db.createFile)
app.get('/getAppoints', db.getAppoints)
app.post('/changeAppointmentStatus', db.changeAppointmentStatus);
app.post('/update_file_progress', db.update_file_progress);
app.get('/getUpdates', db.getUpdates)
app.post('/createUpdate', db.createUpdate)
app.get('/getFeedbacks', db.getFeedbacks)
app.post('/createFeedback', db.createFeedback)
app.get('/getTransactions', db.getTransactions)
app.post('/createTransaction', db.createTransaction)
app.get('/getbookedAppoints', db.getbookedAppoints)
app.get('/getcancelledAppoints', db.getcancelledAppoints)
app.get('/getuserBookedAppointments/:client_id', db.getuserBookedAppointments)
app.get('/getuserCancelledAppointments/:client_id', db.getuserCancelledAppointments)
app.get('/getuserPendingAppointments/:client_id', db.getuserPendingAppointments)
app.get('/getbalance/:client_id', db.getbalance)
app.get('/getuserfiles/:client_id', db.getuserfiles)
app.get('/getusertransactions/:client_id', db.getusertransactions)
app.get('/TransactionStats', db.TransactionStats)


