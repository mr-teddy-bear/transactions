import Transactions from "../../models/Transactions.js";

const getMoney = async (userId) => {
  const finalTransaction = await Transactions.findOne({ userId }).sort({
    _id: -1,
  });
  return parseInt(finalTransaction.currentMoney) || 0;
};

const getTransaction = async (userId) => {
  const allTransactions = await Transactions.find({ userId });
  const transactions = allTransactions.map((transaction) => {
    return {
      id: transaction._id,
      title: transaction.title,
      sumOperation: parseInt(transaction.sumOperation),
      type: transaction.type,
      date: transaction.date,
    };
  });
  return transactions;
};

const addTransaction = async (title, type, sumOperation, userId) => {
  const finalTransaction = await Transactions.findOne({ userId }).sort({
    _id: -1,
  });

  const finalMoney = !finalTransaction
    ? 0
    : parseInt(finalTransaction.currentMoney);
  const currentMoney = finalMoney + sumOperation;
  const transaction = await Transactions.create({
    title,
    currentMoney,
    type,
    sumOperation,
    userId,
  });
  await transaction.save();

  return transaction;
};

export { getMoney, addTransaction, getTransaction };
