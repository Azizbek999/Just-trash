// Import
const { static } = require("express")
const express = require("express")
const app = express()
const port = process.env.PORT || 3030
const home = require('./routers/home')

app.use(express.static('public'))
app.use('img', express.static(__dirname + 'public/img'))
app.use('css', express.static(__dirname + 'public/css'))
app.use('js', express.static(__dirname + 'public/js'))

app.set('view engine', 'ejs')

app.use('/home', home)

app.listen(port, (err) => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`app is listening on port: ${port}`);
})