import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Admin from '#models/admin'

export default class AdminSeeder extends BaseSeeder {
  async run() {
    await Admin.createMany([
      {
        email: 'admin@admin.com',
        password: 'admin',
      },
    ])
  }
}