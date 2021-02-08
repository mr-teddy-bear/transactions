import { getMoney, addTransaction, getTransaction } from './service.js';


const getMoneyController = async (req, res) => {
    try {
        //const { userId } = req.query;
        const userId = req.user._id;
        const currentMoney = await getMoney(userId);
        res.json(`На вашем балансе ${currentMoney}`);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

const getTransactionsController = async (req, res) => {
    try {
        const userId = req.user._id;
        const allTransactions = await getTransaction(userId);
        res.json({ message: `Количество транзакций: ${allTransactions.length}`, allTransactions });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

const addTransactionController = async (req, res) => {
    try {
        const { title, type, sumOperation } = req.body;
        const userId = req.user._id;
        const newTransaction = await addTransaction(title, type, sumOperation, userId);
        res.json({ message: `Произведена транзакция ${title},  currentMoney: ${newTransaction.currentMoney}` });
    } catch (e) {
        res.status(500).json({ message: e.message || 'Что-то пошло не так...' });
    }
};


export { getMoneyController, addTransactionController, getTransactionsController };