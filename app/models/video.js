module.exports = (sequelize, Sequelize) => {
  const Video = sequelize.define("video", {
    created_by: {
      type: Sequelize.STRING
    },
    video_id: {
      type: Sequelize.NUMBER
    }
  });

  return Video;
};
