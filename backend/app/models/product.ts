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

  @belongsTo(() => Category, {
    foreignKey: "category"
  })
  declare sell: BelongsTo<typeof Category>

  @belongsTo(() => SubCategory, {
    foreignKey: "sub_category"
  })
  declare subCategory: BelongsTo<typeof SubCategory>
}