import { UserDto } from "../dto/user_dto.js"
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
}