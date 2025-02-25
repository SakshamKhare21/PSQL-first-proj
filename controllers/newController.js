const db = require('../db/queries');

exports.getNew = (req, res, next) => {
     res.render('usernameForm');
};

exports.postNew = async (req, res, next) => {
    const { username } = req.body;
    await db.insertUsername(username);
    console.log('username to be saved: ', req.body.username);
    res.redirect('/');
};