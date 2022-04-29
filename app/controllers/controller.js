const db = require("../models");
const Video = db.video;
const Metadata = db.metadata;

exports.getTotalVideoSize = (req, res) => {
  const user = req.body.created_by;
  var condition = { created_by: user };

  Video.findAll({ where: condition })
    .then(data => {
      let total = 0;
      for(var i=0; i< data.length; i++) {
        Metadata.find({id: data[i].video_id})
          .then(res => {
            total+=res.video_size;
          }).catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred"
            });      
          })
      }
      return res.send({total:total, msg: "success"})
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    });
};

exports.getMetadata = (req, res) => {
  const video_id = req.body.video_id;

  Metadata.findOne(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};

exports.updateMetadata = (req, res) => {
  const video_id = req.body.video_id;
  const size = req.body.video_id;
  const viewer_count = req.body.viewer_count;

  Metadata.update({video_size:size, viewer_count: viewer_count}, {
    where: { id: video_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Video Size and viewer count was updated successfully."
        });
      } else {
        res.send({
          message: "Cannot update"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating metadata"
      });
    });
};

