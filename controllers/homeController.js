const db = require('../db/queries');

const homeController = async (req, res, next) => {
    const usernames = await db.getAllUsernames();
    console.log('username will be logged here -wip');
    res.render('home', {usernames: usernames});
}

module.exports = { homeController };