import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Application from '@ioc:Adonis/Core/Application'

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run()
  }

  public async run() {
    await this.runSeeder(await import('../Category'))
    await this.runSeeder(await import('../User'))
    await this.runSeeder(await import('../Drink'))
    await this.runSeeder(await import('../Favorite'))
  }
}
