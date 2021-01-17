const mongoose  = require("mongoose");
const Contact   = require("../models/contact.js");

/**
 * 
 * the functions below are available for the front-end either: record a new contact or get contact's list
 * 
*/

// function to get contacts
const getContacts = async(req, res) => {
  console.log("inside controller getcontacts");
  // do not need checking, it only queries the db
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
  }
};


// function to add a new contact
const addContacts = async(req, res) => {
  const { name, email } = req.body;
  console.log("received::", name, email);

  // it checks whether data is being received
  // *** FE does it, but here is a double checking
  if (!name || !email) return res.status(400).json({ error: "data missing" });

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


module.exports = {
  getContacts,
  addContacts
};

