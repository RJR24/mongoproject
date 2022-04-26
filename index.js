const mongoose = require("mongoose");
<<<<<<< HEAD

mongoose
  .connect("mongodb://localhost:27017/mongoproject")
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log("could not connect to mongodb"));

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    minlength: 3,
    maxlength: 40,
    lowercase: true,
    trim: true,
  },
  last_name: { type: String, required: true },
  age: Number,
  salary: { type: Number, required: true, set: (v) => Math.round(v) , get: (v) => Math.round(v) },
  favorites: {
    type: [String],
    enum: ["sport", "writing", "hiking", "music"],
    required: true,
    validate: {
      validator: function (v) {
        return v && v.length > 0;
      },
      message: "please enter something baba!",
    },
    date: { type: Date, default: Date.now },
    admin: Boolean,
  },
});

const User = mongoose.model("User", userSchema);

=======

mongoose
  .connect("mongodb://localhost:27017/mongoproject")
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log("could not connect to mongodb"));

const userSchema = mongoose.Schema({
  first_name: String,
  last_name: { type: String, required: true },
  favorites: [],
  date: { type: Date, default: Date.now },
  admin: Boolean,
});

const User = mongoose.model("User", userSchema);

>>>>>>> 0b41f90a24643cfa279d69f78531bf0a27be76b8
async function createUser() {
  const user = new User({
    first_name: "Rostam",
    last_name: "jami",
    favorites: ["sport", "data science", "music"],
    admin: false,
  });

  const result = await user.save();
  console.log(result);
}

// createUser();

async function getUsers() {
  const users = await User.find({ last_name: "jami", admin: false });
  console.log(users);
}

// getUsers();

async function updateUser(id) {
  const user = await User.update(
    { _id: id },
    {
      $set: {
        firstname: "Boss",
      },
    }
  );
  console.log(user);
}

updateUser("62658a31ffd12b3b66635870");
