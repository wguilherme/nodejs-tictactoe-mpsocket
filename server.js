import http from 'http';
import express from 'express';
import socketIo from 'socket.io'
import ejs from 'ejs'

const app = express();

const server = http.Server(app).listen(8080);
const io = socketIo(server);
const clients = {};

app.use(express.static('./public'))
app.use('./vendor', express.static('./node_modules'))

app.set('vire engine', 'html')
app.engine('html', ejs.renderFile)

app.get('/', (req, res) => {
   return res.render('index.html')
})


