import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'user'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      table.string('full_name').nullable()
      table.string('email', 100).notNullable().unique()
      table.string('password').notNullable()

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}