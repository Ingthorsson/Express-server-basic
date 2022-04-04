const express = require('express');
const router = express.Router();


// RUN LOGGER MIDDLEWARE FO USERS
router.use(logger);

router.get('/', (req, res) => {
    res.send("user list")
});

router.get('/new', (req, res) => {
    res.render("users/new", { firstName: "test" })
});

router.post('/', async (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error")
        res.render('users/new', { firstName: req.body.firstName })
    }
});

// GET POST DELETE ID
router.route('/:id')
    .get((req, res) => {
        req.params.id
        console.log(req.user)
        res.send(`Get user with id ${req.params.id}`)
    })
    .put((req, res) => {
        req.params.id
        res.send(`Update user with id ${req.params.id}`)
    })
    .delete((req, res) => {
        req.params.id
        res.send(`Delete user with id ${req.params.id}`)
    });


// TEMP DATA
const users = [{ name: 'bob' }, { name: 'eeek' }]
//
// MIDDLEWARE
//
router.param('id', (req, res, next, id) => {
    req.user = users[id];
    next();
});

function logger(req, res, next) {
    console.log(req.originalUrl)
    next();
}


module.exports = router