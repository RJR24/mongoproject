const mongoose = require("mongoose");

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
