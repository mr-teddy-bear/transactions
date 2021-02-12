import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/User.js'
import config from '../../config/environment.js'

const { app: { jwtSecret, jwtTimeToLive } } = config;


const loginUser = async (email, password) => {


    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Пользователь не найден');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Неверный пароль');
    }
    const token = jwt.sign(
        {
            userId: user._id
        },
        jwtSecret,
        { expiresIn: jwtTimeToLive }
    );
    const resObj = {
        token,
        user: user.email
    };
    return resObj;
};

const regUser = async (email, password) => {
    const candidate = await User.findOne({ email });
    if (candidate) {
        throw new Error('Пользователь уже существует');
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashPassword });
    await user.save();
    return user;
};

export { loginUser, regUser };
