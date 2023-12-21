import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class extends BaseSeeder {
  public async run() {
    await Category.createMany([{
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
    {
      name: 'Rum',
      description: 'Rum é uma bebida alcoólica destilada de açúcar ou melaço de cana-de-açúcar fermentado.'
    },
    {
      name: 'Tequila',
      description: 'A tequila é uma bebida destilada do México, feita da agave-azul.'
    },
    {
      name: 'Gin',
      description: 'Gin é uma bebida destilada à base de cereais e aromatizada com zimbro e outros botânicos.'
    },
    {
      name: 'Licor',
      description: 'Licor é uma bebida alcoólica adocicada, geralmente com sabor de frutas, ervas ou especiarias.'
    },
    ])
  }
}
