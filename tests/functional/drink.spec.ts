import { test } from '@japa/runner'

test.group('Drinks', () => {
  test('get a list of drinks', async ({ client, route }) => {
    const response = await client.get(route('DrinksController.index'))

    response.assertStatus(200)
    response.assertAgainstApiSpec()
  })

  test('get a specified drink', async ({ client, route }) => {
    const response = await client.get(route('DrinksController.show', { id: '1' }))

    response.assertStatus(200)
    response.assertAgainstApiSpec()
  })

  test('get a list of drinks by category', async ({ client, route }) => {
    const response = await client.get(route('DrinksController.getByCategory', { categoryId: '1' }))

    response.assertStatus(200)
    response.assertAgainstApiSpec()
  })
})
