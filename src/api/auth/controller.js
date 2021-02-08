import { loginUser, regUser } from './service.js';


const loginController = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const resObj = await loginUser(email, password);
        const { token, user } = resObj;
        res.status(200).json({ message: `Выполнен выход ${user}. Создан токен ${token}` });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

const regController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = await regUser(email, password);
        res.status(201).json({
            message: `Создан пользователь email: ${email} и паролем ${newUser.password}`
        });
    } catch (e) {
        res.status(500).json({ message: e.message || 'Что-то пошло не так...' });
    }
};


export { loginController, regController };