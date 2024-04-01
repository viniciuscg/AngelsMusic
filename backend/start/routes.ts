import AdminController from '#controllers/admin_controller'
import CategoryController from '#controllers/category_controller'
import ProductController from '#controllers/products_controller'
import SellController from '#controllers/sell_controller'
import UserController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import SubCategoryController from '#controllers/sub_category_controller'

//Routes user
router.post('/user', [UserController, 'create'])
router.post('/user/login', [UserController, 'login'])
router.put('/user', [UserController, 'update'])
router.delete('/user', [UserController, 'delete'])
router.get('/user', [UserController, 'loggedUser']).use(middleware.auth({
    guards: ['userApi']
}))

//Routes products
router.post('/product', [ProductController, 'create'])
router.put('/product', [ProductController, 'update'])
router.post('/product/deactivate', [ProductController, 'deactivate'])
router.get('/product', [ProductController, 'get'])

//Routes sells
router.post('/sell', [SellController, 'create'])
router.put('/sell', [SellController, 'update'])
router.get('/sell', [SellController, 'get'])

//Routes Category
router.post('/category', [CategoryController, 'create'])
router.put('/category/:id', [CategoryController, 'update'])
router.get('/category', [CategoryController, 'getAll'])
router.delete('/category/:id', [CategoryController, 'delete'])

//Routes Sub Category
router.post('/sub-category', [SubCategoryController, 'create'])
router.put('/sub-category/:id', [SubCategoryController, 'update'])
router.get('/sub-category/category/:id', [SubCategoryController, 'getRelated'])
router.get('/sub-category', [SubCategoryController, 'getAll'])
router.delete('/sub-category/:id', [SubCategoryController, 'delete'])

//Routes Admin
router.post('/admin', [AdminController, 'login'])
router.get('/admin', [AdminController, 'loggedAdmin']).use(middleware.auth({
    guards: ['adminApi']
}))
