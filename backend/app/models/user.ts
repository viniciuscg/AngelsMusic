import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class User extends BaseModel {
  public static table  = "user"

  static accessTokens = DbAccessTokensProvider.forModel(User, {table: 'auth_user_access_tokens'})

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string

  @column()
  declare email: string

  @column()
  declare password: string

}