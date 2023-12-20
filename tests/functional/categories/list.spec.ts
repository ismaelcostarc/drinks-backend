import { test } from '@japa/runner'

test.group('Categories list', async () => {
  test('get a list of categories', async ({ client }) => {
    const response = await client.get('/api/v1/categories')

    response.assertAgainstApiSpec()
  })
})
