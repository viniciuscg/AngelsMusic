import User from "#models/user"
import { LoginUserDto, LogoutUserDto, UserDto } from "../dto/user_dto.js"

export default class UserRepository {
  async create(data: Omit<UserDto, "id">) {
    const user = new User

    user.email = data.email
    user.fullName = data.fullName
    user.password = data.password

    await user.save()
    return user
  }

  async update(data: UserDto){
    const findUser = await User.findOrFail(data.id) 

    findUser.email = data.email
    findUser.password = data.password
    findUser.fullName = data.fullName

    await findUser.save()
    return findUser
  }

  async delete(id: number){
    await User
        .query()
        .where('id', id)
        .delete()
  }

  async login(data: LoginUserDto) {
    const user = await User
    .query()
    .where('email', data.email)
    .andWhere('password', data.password)
    .first()

    return user
  }

  public async logout(data: LogoutUserDto) {
    await User
      .query()
      .where('token', data.token)
      .delete()
  }
}