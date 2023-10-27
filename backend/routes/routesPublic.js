import express from 'express';

import { getPostsPublic } from './../controllers/public/getPostsPublic.js'
import { getPostsPublicById } from '../controllers/public/getPostsPublicById.js';
import { login } from '../controllers/auth/login.js';
import { register } from '../controllers/auth/register.js';

const routerPublic = express.Router();

// routing untuk public
// 1. get posts untuk halaman home
// 2. get post by id
// 3. login

routerPublic.get('/post', getPostsPublic)
routerPublic.get('/post/:id', getPostsPublicById)
routerPublic.post('/login', login)
routerPublic.post('/register', register)

export default routerPublic;