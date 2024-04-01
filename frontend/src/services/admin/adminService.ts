import { api } from "../api";
import { IAdmin, IAdminToken } from "./adminType";

export default class AdminService {
  static async login(data: IAdmin) {
    const response = await api.post<IAdminToken>('/admin', data)
    localStorage.setItem('tokenAdm', response.data.token)
    return response.data
  }

  static async loggedAdmin(data: IAdminToken) {
    const response = await api.get<IAdmin>('/admin', {headers: {
      Authorization: `Bearer ${data.token}`
    }})
    return response.data
  }
}