// Create web server application
// 1. Import the express module
const express = require("express");
// 2. Create an express application
const app = express();
// 3. Define port number
const port = 3000;
// 4. Define routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// 5. Run server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

