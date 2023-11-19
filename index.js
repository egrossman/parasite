const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
console.log(app)

app.use(express.static('client/build'));

app.get('/', (req, res) => {
      res.send('Hello from our server!')
})

app.listen(process.env.PORT || 8080, () => {
      console.log('server listening on port 8080')
})