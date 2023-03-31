const app = require("./app.js");
const database = require("./Database/mongodb.js");

database.startdb();
app.listen(3000, () => {
  console.log("Server is OK");
});
