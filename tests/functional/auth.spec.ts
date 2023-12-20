import { test } from '@japa/runner'

test.group('Auth', () => {
  test('login a user correctly', async ({ client, route }) => {
    const response = await client.post(route('AuthController.login')).form({
      email: 'ismael@faster.com',
      password: 'secret',
    })

    response.assertStatus(200)
    response.assertAgainstApiSpec()
  })

  test('login a user with wrong credentials', async ({ client, route }) => {
    const response = await client.post(route('AuthController.login')).form({
      email: 'ismael@faster.com',
      password: 'secret2',
    })

    response.assertStatus(400)
    response.assertAgainstApiSpec()
  })

  test('try to login with incomplete credentials', async ({ client, route }) => {
    const response = await client.post(route('AuthController.login'))

    response.assertStatus(422)
    response.assertAgainstApiSpec()
  })
})
