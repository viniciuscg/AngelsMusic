import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Admin extends BaseModel {
  public static table  = "admin"

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare email: string

  @column()
  declare password: string

}