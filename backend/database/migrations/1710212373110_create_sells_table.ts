import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sell'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()

      table.dateTime('date').notNullable()
      table.foreign('userId').references('user.id').notNullable()
      table.double('price').notNullable()
      table.integer('status').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}