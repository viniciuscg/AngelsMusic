export interface UserDto {
  id: number
  fullName: string
  email: string
  password: string
}

export interface LoginUserDto {
  email: string
  password: string
}

export interface LogoutUserDto {
  token: string
}