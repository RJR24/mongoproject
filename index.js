const mongoose = require("mongoose");

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

async function createUser() {
  const user = new User({
    first_name: "Rostam",
    last_name: "jami",
    age: 26,
    salary: 19.8,
    favorites: ["sport", "music"],
    admin: false,
  });
  try {
    const result = await user.save();
    console.log(result);
  } catch (ex) {
    console.log(ex.message);
  }
}


async function getUsers(id) {
  const users = await User.find({_id : id});
  console.log(users[0].salary);
}

// async function updateUser(id){
  //   const user = await User.find(id)
  //   if(!user) return;
  //   // user.admin = true;
  //   // user.first_name = "Updated Name";
  
  //   user.set({
    //     admin : true,
    //     first_name : 'pahlevoon!'
    //   })
    
    //   const result = await user.save();
    
    // }
    
    
    
    async function updateUser(id) {
      const result = await User.findByIdAndUpdate(
        id,
        {
          $set: {
            admin: true,
            first_name: "IRAN",
          },
        },
        { new: true }
        );
        console.log(result);
      }
      // updateUser("626503fc56f5419336ee3892");
      
      async function removeUser(id) {
        const result = await User.findByIdAndRemove(id);
        console.log(result);
      }
      
      // removeUser ('626417d3a5a9dd18bae0ba48');
      getUsers('6266e570226ad0fd2170adbb');
      // createUser();
    // updateUser("fa6e85bff952c");
