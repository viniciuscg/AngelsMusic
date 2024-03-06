import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import { SellStatus } from '../dto/enum.js'

export default class Sell extends BaseModel {
  public static table  = "sell"

  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare date: DateTime

  @column()
  declare userId: number
  
  @column()
  declare price: number
    
  @column()
  declare status: SellStatus
}