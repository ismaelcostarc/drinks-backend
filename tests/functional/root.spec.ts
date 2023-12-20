import { test } from '@japa/runner'

test('display status ok', async ({ client }) => {
  const response = await client.get('/')

  response.assertStatus(200)
  response.assertBodyContains({ status: 'ok' })
})
