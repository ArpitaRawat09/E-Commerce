const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  orders: {
    type: Array,
    default: [],
  },
  contacts: String,
  picture: String,
});

const user = mongoose.models.User || mongoose.model('user', userSchema);
