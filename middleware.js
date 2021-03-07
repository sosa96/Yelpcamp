module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl; //returns user to a page they couldnt see before they logged in
    req.flash('error', 'You must be signed in first!');
    return res.redirect('/login');
  }
  next();
};
