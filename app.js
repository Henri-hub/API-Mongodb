
const express = require('express')
      , mongoose = require('mongoose')
      , verifyToken = require('./routes/verifyToken')
      , app = express()
      , port = 1977

// Mongoose
mongoose.connect('mongodb://localhost:27017/monblog', { useNewUrlParser: true, useUnifiedTopology: true })
console.log("Status Mongoose :",mongoose.connection.readyState);

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Route
const {getHomePage} = require ('./routes/index')
      ,authRoute = require ('./routes/auth')
      ,usersRoute = require('./routes/users')
      ,articlesRoute = require('./routes/articles')
      ,categoriesRoute = require('./routes/categories')


app.use('/api/users', usersRoute)
app.use('/api/articles', articlesRoute)
app.use('/api/categories', categoriesRoute)
app.use('/api/auth', authRoute)
app.get('/', verifyToken, getHomePage)


app.listen(port, () => console.log(`Le serveur tourne correctement sur le port: ${port}`))
