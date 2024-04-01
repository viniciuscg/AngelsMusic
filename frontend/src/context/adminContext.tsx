import { ReactElement, createContext, useContext, useState } from 'react'
import AdminService from '../services/admin/adminService';
import { IAdmin, IAdminToken } from '../services/admin/adminType';


interface IAdminContextProps {
  login: (data: IAdmin) => Promise<void>
  loggedAdmin: (data: IAdminToken) => Promise<void>
  admin: IAdmin | undefined
}

interface IProps {
  children: ReactElement
}

export const AdminContext = createContext({} as IAdminContextProps)

export const AdminProvider = ({ children }: IProps) => {
  const [admin, setAdmin] = useState<IAdmin>()

  const login = async (data: IAdmin) => {
    await AdminService.login(data)
  }

  const loggedAdmin = async (data: IAdminToken) => {
    const response = await AdminService.loggedAdmin(data)
    setAdmin(response)
  }

  return (
    <AdminContext.Provider value={{
      login,
      loggedAdmin,
      admin,
    }}>
      {children}
    </AdminContext.Provider>
  )
}

export const useAdminContext = () => useContext(AdminContext)