const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: '590249305851-gvo0i6om88449tdhtgq1e6nnfoqst6ol.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:5173/p'
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id }).then((existingUser) => {
    if (existingUser) {
      done(null, existingUser);
    } else {
      new User({
        googleId: profile.id,
        displayName: profile.displayName,
        email: profile.emails[0].value
      }).save().then(user => done(null, user));
    }
  });
}));
