import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes
	.route('/users')
	.post(UserController.store)
	.put(authMiddleware, UserController.update);

routes.post('/sessions', SessionController.store);
module.exports = routes;
