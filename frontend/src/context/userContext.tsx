import { ReactElement, createContext, useContext, useState } from 'react'
import UserService from '../services/user/userService'
import { IUser, IUserCreate, IUserLogin, IUserToken } from '../services/user/userTypes'

interface IUserContextProps {
  login: (data: IUserLogin) => Promise<void>
  loggedUser: (data: IUserToken) => Promise<void>
  create: (data: IUserCreate) => Promise<void>
  user: IUser | undefined
}

interface IProps {
  children: ReactElement
}

export const UserContext = createContext({} as IUserContextProps)

export const UserProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser>()

  const login = async (data: IUserLogin) => {
    await UserService.login(data)
  }

  const loggedUser = async (data: IUserToken) => {
    const response = await UserService.loggedUser(data)
    setUser(response)
  }

  const create = async (data: IUserCreate) => {
    await UserService.create(data)
  }

  return (
    <UserContext.Provider value={{
      login,
      loggedUser,
      create,
      user,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)