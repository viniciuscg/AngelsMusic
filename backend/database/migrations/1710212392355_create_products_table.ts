import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'product'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.string('model').notNullable()
      table.integer('quantity').notNullable()
      table.string('description').notNullable()
      table.string('img').notNullable()
      table.integer('price').notNullable()
      table.integer('active').notNullable()
      table.integer('category_id').references('id').inTable('category')
      table.integer('sub_category_id').references('id').inTable('sub_category')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
