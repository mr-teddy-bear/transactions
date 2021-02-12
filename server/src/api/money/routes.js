import { Router } from 'express';
import { getMoneyController, addTransactionController, getTransactionsController } from './controller.js';
//import validation from '../../midleware/validation';
//import regSchema from '../../midleware/validationLoginSchema';

const router = Router();

// login
router.get('/balance', getMoneyController);
router.get('/', getTransactionsController)
router.post('/', addTransactionController);

export default router;