import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Drink from 'App/Models/Drink'

export default class extends BaseSeeder {
  public async run () {
    await Drink.createMany([
      {
        categoryId: 1,
        name: 'Black & White',
        description: 'Black & White é uma marca escocesa de uísque inicialmente produzido por James Buchanan, 15º Presidente dos Estados Unidos.',
        imgUrl: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/6433-whisky-black-e-white-1l.jpg?s=27481d070256cfbebcd7860b8d9b4004',
      },
      {
        categoryId: 2,
        name: 'Bananinha',
        description: '...',
        imgUrl: 'https://bebidasdomundo.com/wp-content/uploads/2020/11/6155888981_1.jpg',
      },
      {
        categoryId: 3,
        name: 'Slova',
        description: '...',
        imgUrl: 'https://a-static.mlcdn.com.br/450x450/vodka-slova-garrafa-970ml/bayeuxdepositoaltograu/54fd2528f8a611ec84484201ac185079/a1f0a3e4f927567bf4eadc1fac362919.jpg',
      },
    ])
  }
}
