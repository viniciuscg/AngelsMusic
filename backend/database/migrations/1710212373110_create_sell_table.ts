import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sell'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.dateTime('date').notNullable()
      table.integer('user_id').references('id').inTable('user')
      table.double('price').notNullable()
      table.integer('status').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}