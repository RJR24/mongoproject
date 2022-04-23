const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/mongoproject')
.then(()=> console.log('connected to mongodb'))
.catch((err)=> console.log('could not connect to mongodb'))


const userSchema = mongoose.Schema({
  first_name : String,
  last_name : {type : String , required : true },
  favorites : [],
  date : {type : Date , default : Date.now},
  admin : Boolean
})


const User = mongoose.model('User' , userSchema) ;

async function createUser(){
  const user = new User({
    first_name : 'Reza2',
    last_name : 'Rezaeijami',
    favorites : ['sport' , 'data science' , 'music'],
        admin : true ,
  });
  
  const result = await user.save();
  console.log(result);
} 

createUser();

async function getUsers (){
  const users = await User.find();
  console.log(users);
}

getUsers();