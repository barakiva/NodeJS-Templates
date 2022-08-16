import passport from 'passport'
import passportBearer from 'passport-http-bearer'
import User from '.././schemas/User.js'

function verifyToken(token, done) {
	User.findOne({ username: token }, function (err, user) {
	  if (err) { return done(err); }
	  if (!user) { return done(null, false); }
	  return done(null, user, { scope: 'all' });
	});
  }
const BearerStrategy =  new passportBearer.Strategy(verifyToken)
export default BearerStrategy