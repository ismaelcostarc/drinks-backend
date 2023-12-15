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
  Route.get('/', async () => {
    return { status: 'ok' }
  })

  Route.post("register", "AuthController.register")
  Route.post("login", "AuthController.login")

  Route.resource('categories', 'CategoryController').apiOnly()
  Route.resource('drinks', 'DrinkController').apiOnly()

  Route.group(() => {
    Route.get('favorites', 'FavoriteController.index')
    Route.post('favorites', 'FavoriteController.store')
    Route.delete('favorites/:id', 'FavoriteController.destroy')
  }).middleware("auth:api")
}).prefix("api/v1/");