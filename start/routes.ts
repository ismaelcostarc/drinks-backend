/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post("/register", "AuthController.register")
  Route.post("/login", "AuthController.login")

  Route.get('/categories', 'CategoriesController.index')
  Route.get('/categories/:categoryId/drinks', 'DrinksController.getByCategory');
  Route.get('/drinks', 'DrinksController.index')
  Route.get('/drinks/:id', 'DrinksController.show')

  Route.group(() => {
    Route.get('/favorites', 'FavoritesController.index')
    Route.post('/favorites', 'FavoritesController.store')
    Route.delete('/favorites/:id', 'FavoritesController.destroy')
  }).middleware("auth:api")
}).prefix("api/v1");