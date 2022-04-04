const express = require('express');
const bp = require('body-parser')
const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(express.static("public"))
app.use(express.json())
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index", {text:"oook"})
})

const userRouter = require("./routes/users");
app.use('/users', userRouter)

app.listen(3000, () => console.log('Server running'));