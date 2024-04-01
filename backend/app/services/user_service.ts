import User from "#models/user"
import { LoginUserDto, LogoutUserDto, UserDto } from "../dto/user_dto.js"
import UserRepository from "../repositories/user_repository.js"

export default class UserService {
  userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  async create(data: Omit<UserDto, "id">) {
    return this.userRepository.create(data)
  }

  async update(data: UserDto){
    return this.userRepository.update(data)
  }

  async delete(id: number){
    return this.userRepository.delete(id)
  }

  
  async login(data: LoginUserDto){
    const user = await this.userRepository.login(data)
    
    if (!user) throw new Error()

    const token = await User.accessTokens.create(user)
  
    return token
  }

  public async logout(data: LogoutUserDto) {
    return await this.userRepository.logout(data)
  }
}