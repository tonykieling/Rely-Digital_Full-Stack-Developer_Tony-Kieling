const express           = require("express");
const router            = express.Router();

const contactsController = require("../controllers/contact.js");

// this route calls the controller for getting the list of contacts
router.get("/", contactsController.getContacts);


// this route calls the controller for adding the list of contacts
router.post("/", contactsController.addContacts);


module.exports = router;