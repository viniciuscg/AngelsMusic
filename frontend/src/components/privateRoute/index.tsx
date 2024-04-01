import { ReactElement, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAdminContext } from "../../context/adminContext";
import { useUserContext } from "../../context/userContext";

interface IPrivateRouterProps {
  Component: ReactElement
}

function PrivateRoute({ Component }: IPrivateRouterProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(true); 
  const { loggedAdmin } = useAdminContext()
  const { loggedUser } = useUserContext()

  const validateAdminLogged = async () => {
    try {
      const token =  localStorage.getItem('tokenAdm') || ""
      await loggedAdmin({token})
      setIsAuthenticated(true)
    } catch (error) { 
      setIsAuthenticated(false)
    } 
  }

  const validateUserLogged = async () => {
    try {
      const token = localStorage.getItem('tokenUser') || ''
      await loggedUser({token})
      setIsAuthenticated(true)
    } catch (error) { 
      setIsAuthenticated(false)
    } 
  }

  useEffect(() => {
    validateAdminLogged()
   }, [])

  return isAuthenticated ? Component : <Navigate to="/" />;
}

export default PrivateRoute
