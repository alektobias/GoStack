import { Router } from 'express';

import UserController from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionController';

import AuthMiddleware from './app/middlewares/auth';

const router = Router();

router.route('/').get((req, res) => {
	return res.json({ message: 'ok' });
});

router
	.route('/users')
	.post(UserController.store)
	.put(AuthMiddleware, UserController.update);
router.route('/session').post(SessionController.store);

export default router;
