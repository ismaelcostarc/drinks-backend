import { test } from '@japa/runner'

test.group('Categories', () => {
  test('get a list of categories', async ({ client, route }) => {
    const response = await client.get(route('CategoriesController.index'))

    response.assertStatus(200)
    response.assertAgainstApiSpec()
  })
})
