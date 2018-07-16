

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// const newTodo = new Todo({
//   text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc)
// }, (e) => {
//   console.log('Unable to save todo')
// });

// const otherTodo = new Todo({
//   text: 'Feed the cat',
//   completed: true,
//   completedAt: 123
// });

// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//   console.log(err)
// })

const User = mongoose.model('User', {
  email: {
  type: String,
  required: true,
  trim: true,
  minlength: 5
  }
});

const user = new User({
  email: 'joe@joey.com'
});

user.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
 }, (err) => {
   console.log(err)
})