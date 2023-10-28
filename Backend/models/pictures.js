const mongoose = require(mongoose);

const pictureSchema = mongoose.Schema({
  picture: [String]
});

const Picture = mongoose.model('pictures', pictureSchema);
