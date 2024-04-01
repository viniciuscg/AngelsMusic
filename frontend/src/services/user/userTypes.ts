export interface IUser {
  id: number
  fullName: string
  email: string
  password: string
}

export interface IUserLogin {
  email: string
  password: string
}

export interface IUserCreate {
  email: string
  password: string
  fullName: string
}

export interface IUserToken {
  token: string
}
