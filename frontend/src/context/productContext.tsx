import { Dispatch, ReactElement, SetStateAction, createContext, useContext, useState } from 'react'
import ProductService from '../services/product/productService';
import { IProduct, IProductCreate } from '../services/product/productType';

interface IProductContextProps {
  products: IProduct[]
  getAll: () => Promise<void>
  create: (data: IProductCreate) => Promise<void>
  update: (data: IProduct) => Promise<void>
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  isModalOpen: boolean
}

interface IProps {
  children: ReactElement
}

export const ProductContext = createContext({} as IProductContextProps)

export const ProductProvider = ({ children }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[products, setProducts] = useState<IProduct[]>([]);
  
  const update = async (Product: IProduct) => {
    return await ProductService.update(Product)
  }

  const getAll = async () => {
    const response = await ProductService.getAll()
    setProducts(response)
  }

  const create = async (product: IProductCreate) => {
    await ProductService.create(product)
  }

  return (
    <ProductContext.Provider value={{
      getAll,
      products,
      create,
      update,
      setIsModalOpen,
      isModalOpen,
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => useContext(ProductContext)