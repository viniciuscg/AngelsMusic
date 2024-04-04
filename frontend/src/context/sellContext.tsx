import { ReactElement, createContext, useContext, useState } from 'react'
import SellService from '../services/sell/sellService'

interface ISellContextProps {
  getTotalValue: () => Promise<void>
  getTotalOder: () => Promise<void>
  totalOrder: number
  totalValue: number 
}

interface IProps {
  children: ReactElement
}

export const SellContext = createContext({} as ISellContextProps)

export const SellProvider = ({ children }: IProps) => {
  const [totalValue, setTotalValue] = useState<number>(0);
  const [totalOrder, setTotalOder] = useState<number>(0);

  const getTotalValue = async () => {
    const response = await SellService.getTotalValue()
    setTotalValue(response)
  }

  const getTotalOder = async () => {
    const response = await SellService.getTotalOrders()
    setTotalOder(response)
  }

  return (
    <SellContext.Provider value={{
      getTotalValue,
      getTotalOder,
      totalValue,
      totalOrder,
    }}>
      {children}
    </SellContext.Provider>
  )
}

export const useSellContext = () => useContext(SellContext)