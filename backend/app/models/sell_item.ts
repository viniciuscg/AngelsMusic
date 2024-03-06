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

  @column()
  declare productId: number

  @column()
  declare sellId: number

  @belongsTo(() => Product, {
    foreignKey: "productId"
  })
  declare product: BelongsTo<typeof Product>

  @belongsTo(() => Sell, {
    foreignKey: "sellId"
  })
  declare sell: BelongsTo<typeof Sell>
  
}