const getContacts = require("./contact/getContacts.js");
const addContact  = require("./contact/addContact.js");

export default async (req, res) => {
  console.log("[index].js");

  const { method } = req;

  switch (method) {
    case "GET":
      console.log("GETTTTTTT");
      getContacts(req, res);
      break;
    case "POST":
      console.log("POSTTTTTTTT");
      addContact(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
