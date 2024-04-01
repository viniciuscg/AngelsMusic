import Admin from "#models/admin";
import { AdminDto } from "../dto/admin_dto.js";

export default class AdminRepository {
  async login(data: AdminDto) {
    const admin = await Admin
    .query()
    .where('email', data.email)
    .andWhere('password', data.password)
    .first()

    return admin
  }
}