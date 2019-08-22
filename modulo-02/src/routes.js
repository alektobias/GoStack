import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);
routes
	.route('/users')
	.post(UserController.store)
	.put(authMiddleware, UserController.update);

routes.post('/sessions', SessionController.store);
routes.post('/files', upload.single('file'), FileController.store);
module.exports = routes;
