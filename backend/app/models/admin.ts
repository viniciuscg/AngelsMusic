import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Admin extends BaseModel {
  public static table  = "admin"

  static accessTokens = DbAccessTokensProvider.forModel(Admin, {table: 'auth_admin_access_tokens'})

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare email: string

  @column()
  declare password: string

}