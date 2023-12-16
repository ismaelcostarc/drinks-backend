import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Drink from 'App/Models/Drink'

export default class extends BaseSeeder {
  public async run () {
    await Drink.createMany([
      {
        categoryId: 1,
        name: 'Black & White',
        description: '...',
      },
      {
        categoryId: 2,
        name: 'Bananinha',
        description: '...'
      },
      {
        categoryId: 3,
        name: 'Slova',
        description: '...'
      },
    ])
  }
}
