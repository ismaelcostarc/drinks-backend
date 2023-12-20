import Database from '@ioc:Adonis/Lucid/Database'
import { test } from '@japa/runner'
import Drink from 'App/Models/Drink'
import User from 'App/Models/User'

test.group('Favorites', () => {
  test('get a list of favorite drinks', async ({ client, route }) => {
    const user = await User.find(1)
    const response = await client.get(route('FavoritesController.index')).loginAs(user)

    response.assertStatus(200)
    response.assertAgainstApiSpec()
  })

  test('bookmark a drink', async ({ client, route }) => {
    const user = await User.find(1)

    const newDrink = new Drink();
    newDrink.categoryId = 1
    newDrink.description = ''
    newDrink.name = '...'
    newDrink.imgUrl = '...'

    const drink = await newDrink.save();

    const response = await client
      .post(route('FavoritesController.index'))
      .loginAs(user)
      .form({
        drink_id: drink.$original.id
      })

    response.assertStatus(201)
    response.assertAgainstApiSpec()

    await drink.delete()
  })
})
