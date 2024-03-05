import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Category from './category.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class SubCategory extends BaseModel {
  public static table  = "sub_category"
  
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare description: string

  @belongsTo(() => Category, {
    foreignKey: "category_id"
  })
  declare category: BelongsTo<typeof Category>

}