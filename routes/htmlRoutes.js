// Reference to Eddie P HW: WK-11 (Note-Taker)

// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  // Custom html routes
  app.get("/plants", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/plants.html"));
  });

  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/plothomepage.html"));
  });

  app.get("/forecast", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/forecast.html"));
  });

  app.get("/plot", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/plotpage.html"));
  });
  // Custom routes end

  // If no matching route is found default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/landingpage.html"));
  });
};
