const mongoose = require(mongoose);

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  token: String,
  ville: String,
  avatar: String,
  picture: String
});

const User = mongoose.model('users', userSchema);
