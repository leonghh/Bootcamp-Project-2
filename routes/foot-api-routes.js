// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the FootTraffic
  app.get("/api/user", function(req, res) {
    db.FootTraffic.findAll({
    }).then(function(dbFootTraffic) {
      res.json(dbFootTraffic);
    });
  });

  // Get route for retrieving a single FootTraffic
  app.get("/api/user/:id", function(req, res) {
    // 2. Add a join here to include the Author who wrote the Post
    db.FootTraffic.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbFootTraffic) {
      console.log(dbFootTraffic);
      res.json(dbFootTraffic);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
