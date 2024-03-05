import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Category extends BaseModel {
  public static table  = "category"
  
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

}