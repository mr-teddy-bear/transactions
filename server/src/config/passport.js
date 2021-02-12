import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../models/User.js';
import config from './environment.js';
import bcrypt from 'bcrypt';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';




const { app: { jwtSecret, jwtTimeToLive } } = config;

passport.use(
    'local',
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        async (req, email, password, done) => {
            try {
                const user = await User.findOne({ email });

                if (user) {
                    // const isMatch = await bcrypt.comparePassword(password, user.password);
                    const isMatch = await bcrypt.compare(password, user.password);
                    if (isMatch) return done(null, user);
                    return done(null, false);
                }
                return done(null, false);
            } catch (err) {
                logger.error('passport local strategy error', err);
                return done(err, false);
            }
        }
    )
);

passport.use(
    'jwt',
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtSecret,
            jsonWebTokenOptions: {
                maxAge: jwtTimeToLive
            }
        },
        async (payload, done) => {
            try {
                const { userId } = payload;
                const user = await User.findOne({ _id: userId });
                if (!user) return done(null, false);
                return done(null, user);
            } catch (error) {
                done(error, false);
            }
        }
    )
);

export default passport;