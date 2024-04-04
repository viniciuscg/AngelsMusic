import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Category from '#models/category'
import SubCategory from '#models/sub_category'

export default class Product extends BaseModel {
  public static table  = "product"
  
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare model: string

  @column()
  declare quantity: number

  @column()
  declare description: string 
  
  @column()
  declare img: string 

  @column()
  declare price: number

  @column({ columnName: "category_id" })
  declare categoryId: number 

  @column({ columnName: "sub_category_id" })
  declare subCategoryId: number

  @column({ serialize: Boolean,  })
  declare active: boolean

  @belongsTo(() => Category, {
    foreignKey: "categoryId"
  })
  declare category: BelongsTo<typeof Category>

  @belongsTo(() => SubCategory, {
    foreignKey: "subCategoryId"
  })
  declare sub_category: BelongsTo<typeof SubCategory>
}