import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sell_item'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.integer('quantity').notNullable()
      table.integer('product_id').references('id').inTable('product')
      table.integer('sell_id').references('id').inTable('sell')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}