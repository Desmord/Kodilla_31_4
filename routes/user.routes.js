const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/logged', (req, res) => {

  if (req.user) {
    res.render(`logged`, {
      givenName: req.user.name.givenName,
      familyName: req.user.name.familyName,
      imgUrl: 'http://localhost:8000/avatar'
    });
  } else {
    res.redirect(`/no-permission`)
  }

});



router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile/settings', (req, res) => {

  if (req.user) {
    res.render(`settings`);
  } else {
    res.redirect(`/no-permission`)
  }
})

router.get('/profile', (req, res) => {

  if (req.user) {
    res.render(`profile`);
  } else {
    res.redirect(`/no-permission`)
  }

})


module.exports = router;