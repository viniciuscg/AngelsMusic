import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()

      table.string('model').notNullable()
      table.integer('quantity').notNullable()
      table.string('description').notNullable()
      table.string('img').notNullable()
      table.integer('price').notNullable()
      table.foreign('categoryId').references('category.id').notNullable()
      table.foreign('subCategoryId').references('sub_category.id').notNullable()

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
