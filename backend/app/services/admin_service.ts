import Admin from "#models/admin"
import { AdminDto } from "../dto/admin_dto.js"
import AdminRepository from "../repositories/admin_repository.js"

export default class AdminService {
  adminRepository: AdminRepository

  constructor() {
    this.adminRepository = new AdminRepository()
  }

  async login(data: AdminDto){
    const admin = await this.adminRepository.login(data)
    
    if (!admin) throw new Error()

    const token = await Admin.accessTokens.create(admin)
  
    return token
  }
}