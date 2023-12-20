import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Drink from 'App/Models/Drink'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    const userIds = (await User.all()).map(user => user.id)
    const drinkIds = (await Drink.all()).map(drink => drink.id)

    if (userIds.length === 0 || drinkIds.length === 0) {
      return
    }

    for (const userId of userIds) {
      const randomDrinkIds = this.getRandomDrinkIds(drinkIds)
      const user = await User.find(userId)

      for(const randomDrinkId of randomDrinkIds) {
        await user?.related('drinks').attach([randomDrinkId])
      }
    }
  }

  public getRandomDrinkIds(drinkIds: number[]) {
    return drinkIds.sort(() => Math.random() - 0.5).slice(0, 5)
  }
}


