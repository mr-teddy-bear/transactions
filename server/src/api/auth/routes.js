import { Router } from 'express';
import { loginController, regController } from './controller.js';
import passport from '../../config/passport.js'
//import validation from '../../midleware/validation';
//import regSchema from '../../midleware/validationLoginSchema';

const router = Router();

// login
router.post('/', passport.authenticate('local', { session: false }), loginController);
router.post('/reg', regController);

export default router;