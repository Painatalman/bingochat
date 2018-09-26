
//make connection
var socket = io.connect('http://localhost:3000')

//buttons and inputs
var message = document.getElementById("message")
var username = document.getElementById("username")
var send_message = document.getElementById("send_message")
var send_username = document.getElementById("send_username")
var chatroom = document.getElementById("chatroom")
var feedback = document.getElementById("feedback")

//Emit message
send_message.addEventListener('click', () => {
  socket.emit('new_message', { message: message.value })
})

//Listen on new_message
socket.on("new_message", (data) => {
  feedback.innerHTML = ''
  message.value = ''
  chatroom.innerHTML +=`
    <p class='message'>${data.username}: ${data.message}</p>
  `
})

//Emit a username
send_username.addEventListener('click', () => {
  socket.emit('change_username', { username: username.value })
})

//Emit typing
message.addEventListener("keypress", () => {
  socket.emit('typing')
})

//Listen on typing
socket.on('typing', (data) => {
  feedback.innerHTML = `
    <p><i>${data.username} is typing a message...</i></p>
  `
})
