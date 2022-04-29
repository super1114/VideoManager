module.exports = app => {
  const Controller = require("../controllers/controller.js");

  var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/totalvideosize", Controller.getTotalVideoSize);
  router.get("/metadata", Controller.getMetadata);
  router.patch("/update", Controller.updateMetadata);
  app.use("/", router);
};
