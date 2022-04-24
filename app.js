// const mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost:27017/mongoproject')
// .then(console.log('connected'))
// .catch((err)=>{console.log('not connect')})

// const userSchema = new mongoose.Schema({
//   firstname : String,
//   lastname : {type : String , required : true},
//   admin : Boolean,
//   password : Number
// })

// const User = new mongoose.model('User' , userSchema);

// async function createUser () {
//   const user = new User ({
//     firstname : 'mar',
//     lastname : 'Rezaeijami',
//     admin : false,
//     password : 1232334
//   })
//   const result = await user.save();
//   console.log(result);
// }
// createUser ();

// async function getUser () {
//   const user = await User.find({firstname : 'mar' , admin : true})
//   console.log(user);
// }

// getUser();