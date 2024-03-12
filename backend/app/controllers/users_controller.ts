import UserService from "#services/user_service"
import { UserDto } from "../dto/user_dto.js"

export default class UserController {
    userService: UserService

    constructor() {
        this.userService = new UserService()
    }

    async create(data: Omit<UserDto, "id">) {
        return this.userService.create(data)
    }

    async update(data: UserDto){
        return this.userService.update(data)
    }

    async delete(id: number){
        return this.userService.delete(id)
    }
}