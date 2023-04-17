const express = require('express');
const app = express();
const connectDb = require("./config/dbConnection");
const errorhandler = require('./middleware/errorhandler')

const port = process.env['PORT'] || 8000;

connectDb()

app.use(express.json()) //body-parser
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorhandler)


app.listen(port, () => {
  console.log('server started on port ' + port)
})