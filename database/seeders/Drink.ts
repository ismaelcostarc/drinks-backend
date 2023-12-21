import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Drink from 'App/Models/Drink'

export default class extends BaseSeeder {
  public async run() {
    await Drink.createMany([
      {
        categoryId: 1,
        name: 'Black & White',
        description: 'Black & White é uma marca escocesa de uísque inicialmente produzido por James Buchanan, 15º Presidente dos Estados Unidos.',
        imgUrl: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/6433-whisky-black-e-white-1l.jpg?s=27481d070256cfbebcd7860b8d9b4004',
      },
      {
        categoryId: 2,
        name: 'Budweiser',
        description: 'Budweiser é uma cerveja americana produzida pela Anheuser-Busch.',
        imgUrl: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/1510-cerveja-budweiser-lata-350ml.jpg?s=27481d070256cfbebcd7860b8d9b4004',
      },
      {
        categoryId: 3,
        name: 'Absolut Vodka',
        description: 'Absolut Vodka é uma marca sueca de vodka produzida em Åhus, no sul da Suécia.',
        imgUrl: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/10401-vodka-absolut-azul-1l.jpg?s=27481d070256cfbebcd7860b8d9b4004',
      },
      {
        categoryId: 4,
        name: 'Havana Club',
        description: 'Havana Club é uma marca de rum produzida em Santa Cruz del Norte, Cuba.',
        imgUrl: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/8244-rum-havana-club-anejo-7-anos-1l.jpg?s=27481d070256cfbebcd7860b8d9b4004',
      },
      {
        categoryId: 5,
        name: 'Patrón',
        description: 'Patrón é uma marca de tequila produzida no México.',
        imgUrl: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/10919-tequila-patron-silver-750ml.jpg?s=27481d070256cfbebcd7860b8d9b4004',
      },
      {
        categoryId: 6,
        name: 'Bombay Sapphire',
        description: 'Bombay Sapphire é uma marca de gin produzida pela Bacardi.',
        imgUrl: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/7213-gin-bombay-sapphire-1l.jpg?s=27481d070256cfbebcd7860b8d9b4004',
      },
      {
        categoryId: 7,
        name: 'Baileys',
        description: 'Baileys é um licor irlandês à base de whisky e creme de leite.',
        imgUrl: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/7266-licor-baileys-irish-cream-1l.jpg?s=27481d070256cfbebcd7860b8d9b4004',
      },
      {
        categoryId: 4,
        name: 'Appleton Estate',
        description: 'Appleton Estate é uma marca de rum jamaicana.',
        imgUrl: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/20901-rum-appleton-estate-8-anos-1l.jpg?s=27481d070256cfbebcd7860b8d9b4004',
      },
      {
        categoryId: 2,
        name: 'Stella Artois',
        description: 'Stella Artois é uma cerveja lager belga, originária da cidade de Leuven.',
        imgUrl: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/1027-cerveja-stella-artois-long-neck-330ml.jpg?s=27481d070256cfbebcd7860b8d9b4004',
      },
      {
        categoryId: 3,
        name: 'Cîroc Vodka',
        description: 'Cîroc é uma marca francesa de vodka produzida a partir de uvas.',
        imgUrl: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/16547-vodka-ciroc-red-berry-750ml.jpg?s=27481d070256cfbebcd7860b8d9b4004',
      },
      {
        categoryId: 1,
        name: 'Jameson',
        description: 'Jameson é uma marca de uísque irlandês produzida pela Irish Distillers.',
        imgUrl: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/6336-whisky-jameson-1l.jpg?s=27481d070256cfbebcd7860b8d9b4004',
      },
      {
        categoryId: 5,
        name: 'José Cuervo',
        description: 'José Cuervo é uma marca de tequila mexicana.',
        imgUrl: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/10063-tequila-jose-cuervo-especial-gold-750ml.jpg?s=27481d070256cfbebcd7860b8d9b4004',
      },
      {
        categoryId: 6,
        name: 'Beefeater',
        description: 'Beefeater é uma marca de gin produzida em Londres.',
        imgUrl: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/10136-gin-beefeater-londres-dry-750ml.jpg?s=27481d070256cfbebcd7860b8d9b4004',
      },
      {
        categoryId: 7,
        name: 'Kahlúa',
        description: 'Kahlúa é um licor de café originário do México.',
        imgUrl: 'https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/7258-licor-kahlua-750ml.jpg?s=27481d070256cfbebcd7860b8d9b4004',
      },
    ]
    )
  }
}
