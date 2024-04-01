import AdminService from "#services/admin_service"
import { loginAdminValidator } from "#validators/admin"
import { HttpContext } from "@adonisjs/core/http"

export default class AdminController {
  adminService: AdminService

  constructor() {
    this.adminService = new AdminService()
  }

  async login({ request }: HttpContext) {
    const data = request.all()
    const payload = await loginAdminValidator.validate(data)
    const token = await this.adminService.login(payload)

    return token

  }

  public async loggedAdmin ({ auth, response }: HttpContext) {
    return response.json(auth.user)
  }
}