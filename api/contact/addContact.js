const mongoose  = require("mongoose");
const Contact   = require("../models/contact.js");

// function to add a new contact
module.exports = async(req, res) => {
  const { name, email } = req.body;
  console.log("=> adding:", name, email);

  // it checks whether data is being received
  // *** FE does it, but here is a double checking
  if (!name || !email) return res.status(400).json({ error: "data missing" });


  // error on purpose in order to simulate an error when trying to record a new document
  // return res.json({error: "message for error"});

  try {
    mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true })
      .then(console.log("DB is okay"))
      .catch("OW :/ something got wrong");
  
      
  } catch (err) {
    console.log("### error on MongoDB connection");
    console.log(err.message);
  }

  //go to record into database
  try {

    const newContact = new Contact({
      _id: new mongoose.Types.ObjectId(),
      name,
      email
    });

    await newContact.save();

    return res.status(200).json({
      message : "success",
      content : newContact
    });

  } catch(error) {
    return res.status(400).json({ error: "something bad when recording. :/"});
  }

};