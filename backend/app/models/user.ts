import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class User extends BaseModel {
  public static table  = "user"
  
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column()
  declare password: string

}