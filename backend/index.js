const connectMongo = require('./db')
const express = require('express')
const cors = require('cors')

connectMongo();
const app = express()
const port = 5000
app.use(cors())
//MiddleWare 
app.use(express.json())
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})