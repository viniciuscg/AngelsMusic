import { api } from "../api";
import { IUser, IUserCreate, IUserLogin, IUserToken } from "./userTypes";

export default class UserService {
  static async create (data: IUserCreate) {
    const response = await api.post<IUserCreate>('/user', data)
    return response.data
  }

  static async update (data: IUser) {
    const response = await api.post<IUser>(`/user${data.id}`, data)
    return response.data
  }

  static async delete (id: number) {
    const response = await api.delete(`/user${id}`)
    return response.data
  }

  static async login(data: IUserLogin) {
    const response = await api.post<IUserToken>('/user/login', data)
    localStorage.setItem('tokenUser', response.data.token)
    return response.data
  }

  static async loggedUser(data: IUserToken) {
    const response = await api.get<IUser>('/user', {headers: {
      Authorization: `bearer ${data.token}`
    }})
    return response.data
  }
}   