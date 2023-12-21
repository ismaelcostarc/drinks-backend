import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    const uniqueKey = 'email'

    await User.updateOrCreateMany(uniqueKey, [
      {
        name: 'Ismael',
        email: 'ismael@faster.com',
        password: 'secret',
      },
    ])
  }
}
