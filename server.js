const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3090;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB // NOTE: I need to change the url here to 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/spooky");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
