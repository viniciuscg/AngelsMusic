import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Category from '#models/category'

export default class CategorySeeder extends BaseSeeder {
  async run() {
    await Category.createMany([
      {
        name: 'Guitar',
      },
      {
        name: 'Bass',
      },
      {
        name: 'Drums',
      },
      {
        name: 'Acustic Guitar',
      },
    ])
  }
}
