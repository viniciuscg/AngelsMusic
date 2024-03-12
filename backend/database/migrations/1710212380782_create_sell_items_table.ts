import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sell_item'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable

      table.integer('quantity').notNullable()
      table.foreign('productId').references('product.id').notNullable()
      table.foreign('sellId').references('sell.id').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}