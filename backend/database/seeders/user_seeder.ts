import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class UserSeeder extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        email: 'user@user.com',
        fullName: 'User',
        password: 'user',
      },
    ])
  }
}
