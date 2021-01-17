const express     = require("express");
const PORT        = process.env.PORT || 3333;
const path        = require('path');
const app         = express();
const bodyParser  = require("body-parser");
const mongoose    = require("mongoose");

const dbSettings  = require("./settings.js");

const contactsRoutes = require("./api/routes/contact.js");

// dev env
const cors = require('cors');
app.use(cors());


// settings related to boy-parser, which allows extended urlencoder and enables to receive json format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// it checks JSON malformatted messages
app.use((err, req, res, next) => {
  if (err) {
    return res.status(409).json({
      error: err.message
    });
  }
  else
    next()
});


try {
  mongoose.connect(dbSettings, {
    useNewUrlParser: true,
    useUnifiedTopology: true });
} catch (err) {
  console.log("### error on MongoDB connection");
  console.log(err.message);
}


// calls the route regarding contact, which allows add or get contacts
app.use("/contact", contactsRoutes);

// app.use((req, res) => res.send({error: "something bad happened"}));


// it deliveres front-end files to the client/browser
app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, './public', 'index.html'))
});


app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
