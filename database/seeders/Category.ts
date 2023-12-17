import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class extends BaseSeeder {
  public async run () {
    await Category.createMany([
      {
        name: 'Whisky',
        description: 'O uísque é uma bebida rigorosamente regulamentada; possui denominações de origem e várias classes e tipos.',
      },
      {
        name: 'Cerveja',
        description: 'A cerveja é uma bebida produzida a partir da fermentação de cereais, principalmente a cevada maltada.'
      },
      {
        name: 'Vodka',
        description: 'Vodca é uma popular bebida destilada, incolor, quase sem sabor e com um teor alcoólico entre 35 e 60%.'
      },
    ])
  }
}
