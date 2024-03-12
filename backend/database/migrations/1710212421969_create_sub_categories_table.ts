import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sub_categories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()

      table.string('description').notNullable()
      table.float('categoryId').references('category.id').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}