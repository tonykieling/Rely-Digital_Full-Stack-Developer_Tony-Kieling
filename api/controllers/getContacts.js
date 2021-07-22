const mongoose  = require("mongoose");
const Contact   = require("../models/contact.js");

/**
 * 
 * the functions below are available for the front-end either: record a new contact or get contact's list
 * 
*/

// function to get contacts
module.exports = async(req, res) => {
  console.log("INSIDE getContacts");

  try {
    mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true })
      .then(console.log("DB is okay"))
      .catch("OW :/ something got wrong");
  
      
    // do not need checking anything, it only queries the db
    try {
      const contacts = await Contact
        .find();
  
      if (!contacts) return res.status(200).json({ message: "db is empty" });
  
      return res.status(200).json({
        message : "success",
        length  : contacts.length,
        content : contacts
      });
      
    } catch(error) {
      return res.status(400).json({ error: "something bad when getting data. :/"});
    } finally {
      console.log("closing connection");
      mongoose.disconnect();
    }

      
  } catch (err) {
    console.log("### error on MongoDB connection");
    console.log(err.message);
  }


};

// module.exports = (req, res) => {
//   const { name = 'World' } = req.query;
//   console.log("INSIDE contact.js");
//   res.status(200).send({message: `Hello ${name}!`});
// };


// const app = require('express')();

// app.get('/api', (req, res) => {
//   console.log("inside /API");
//   const path = "PaTh";
//   res.setHeader('Content-Type', 'text/html');
//   res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
//   res.end({
//     message: `Hello! Go to item: <a href="${path}">${path}</a>`}
//   );
// });

// app.get('/contact', (req, res) => {
//   console.log("/conatct");
//   const slug = "Req.paramS";
//   res.end({
//     message: `Item: ${slug}`}
//   );
// });

// module.exports = app;