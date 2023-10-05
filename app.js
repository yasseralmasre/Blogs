const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes')

//connect to database
const dbURL = 'mongodb+srv://yasser:2122923Ya@cluster0.ealpmom.mongodb.net/';
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
        .then((result) => app.listen(3000))
        .catch((err) => console.log(err));

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests


//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//mongoose and mongo sandbox routes

//creat
app.get('/add-blog', (req,res) => {
  const blog = new Blog({
    title : 'new blog2',
    snippet: 'about my new blog2',
    body: ' more about my new blog2'
  });

  blog.save()
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
})

//read
app.get('/all-blogs', (req,res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
})

app.get('/single-blog', (req,res) => {
  Blog.findById('651bb6a5b0e525094c4b813b')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
})


//routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

//blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});