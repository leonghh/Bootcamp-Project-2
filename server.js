var express = require("express")
var compression = require('compression')
var bodyParser = require('body-parser')

var app = express();

app.use(compression());

var PORT = process.env.PORT || 8080;

var db = require("./models")

app.use(express.static("public"));
app.use(express.static("public/assets/images"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes
require("./routes/api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/foot-api-routes.js")(app);
require("./routes/vehicle-api-routes.js")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
