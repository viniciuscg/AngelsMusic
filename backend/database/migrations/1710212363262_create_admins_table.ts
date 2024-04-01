import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'admin'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.string('email').notNullable().unique()
      table.string('password').notNullable()
    
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}