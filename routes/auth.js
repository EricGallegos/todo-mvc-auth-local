const express = require('express')
const passport = require('passport')
const router = express.Router()


router.get('/google', passport.authenticate('google',{ scope:
    [ 'email', 'profile' ] }))
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), (req, res) => {
    res.redirect('/todos');
  })

router.get('/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/todos');
  });
module.exports = router
