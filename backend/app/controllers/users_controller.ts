import UserService from "#services/user_service"
import { createUserValidator, deleteUserValidator, loginUserValidator, logoutUserValidator, updateUserValidator } from "#validators/user"
import { HttpContext } from "@adonisjs/core/http"

export default class UserController {
  userService: UserService

  constructor() {
    this.userService = new UserService()
  }

  async create({ request }: HttpContext) {
    const data = request.all()
    const payload = await createUserValidator.validate(data)

    return this.userService.create(payload)
  }

  async update({ request }: HttpContext){
    const { id } = request.params()
    const data = request.all()
    const payload = await updateUserValidator.validate({...data, id})

    return this.userService.update(payload)
  }

  async delete({ request }: HttpContext){
    const { id } = request.params()
    const payload = await deleteUserValidator.validate(id)

    return this.userService.delete(payload.id)
  }
  
  async login({ request }: HttpContext) {
    const response = request.all()
    const payload = await loginUserValidator.validate(response)

    return this.userService.login(payload)
  }

  public async loggedUser ({ auth, response }: HttpContext) {
    return response.json(auth.user)
  }

  public async logout ({ auth }: HttpContext) {
    const payload = await logoutUserValidator.validate(auth.user)

    return await this.userService.logout(payload)
  }
}