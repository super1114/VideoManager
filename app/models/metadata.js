module.exports = (sequelize, Sequelize) => {
  const Metadata = sequelize.define("metadata", {
    id: {
      primaryKey: true,
      type: Sequelize.NUMBER
    },
    video_size: {
      type: Sequelize.NUMBER
    },
    viewer_count: {
      type: Sequelize.NUMBER
    },
  });

  return Metadata;
};
