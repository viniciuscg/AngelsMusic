import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Sell from '#models/sell'
import Product from '#models/product'

export default class SellItem extends BaseModel {
  public static table  = "sell_item"
  
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare quantity: number

  @belongsTo(() => Product, {
    foreignKey: "product_id"
  })
  declare product: BelongsTo<typeof Product>

  @belongsTo(() => Sell, {
    foreignKey: "sell_id"
  })
  declare sell: BelongsTo<typeof Sell>
  
}