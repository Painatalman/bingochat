const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const app = express()

//middlewares
app.use(express.static('public'))

// Register Handlebars view engine
app.engine(
  'html',
  handlebars({
    defaultLayout: 'index',
    extname: '.html',
    layoutsDir: 'views',
    partialsDir: 'views/partials'
  })
)
// Use Handlebars view engine
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))

//routes
app.get('/', (req, res) => {
	res.render('index')
})

//Listen on port 3000
server = app.listen(3000)

//socket.io instantiation
const io = require("socket.io")(server)

//listen on every connection
io.on('connection', (socket) => {
	console.log('New user connected')

	//default username
	socket.username = "Anonymous"

    //listen on change_username
    socket.on('change_username', (data) => {
        socket.username = data.username
    })

    //listen on new_message
    socket.on('new_message', (data) => {
        //broadcast the new message
        io.sockets.emit('new_message', {message : data.message, username : socket.username});
    })

    //listen on typing
    socket.on('typing', (data) => {
    	socket.broadcast.emit('typing', {username : socket.username})
    })
})
