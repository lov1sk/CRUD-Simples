const app = require("./app.js");
const Loaders = require("./loaders/index.js");

app.listen(3000, () => {
  console.log("Server is OK");
});

Loaders.start();
