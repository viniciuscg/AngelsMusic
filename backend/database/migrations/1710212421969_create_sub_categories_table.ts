import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sub_category'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.string('description').notNullable()
      table.integer('category_id').references('id').inTable('category')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}