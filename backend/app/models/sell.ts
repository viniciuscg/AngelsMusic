import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import { SellStatus } from '../dto/enum.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Sell extends BaseModel {
  public static table  = "sell"

  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare date: DateTime

  @column()
  declare userId: number
  
  @belongsTo(() => User, {
    foreignKey: "userId"
  })
  declare user: BelongsTo<typeof User>

  @column()
  declare price: number
    
  @column()
  declare status: SellStatus
}