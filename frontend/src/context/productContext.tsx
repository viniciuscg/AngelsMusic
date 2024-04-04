import { Dispatch, ReactElement, SetStateAction, createContext, useContext, useEffect, useState } from 'react'
import ProductService from '../services/product/productService';
import { IProduct, IProductCreate, IProductUpdate } from '../services/product/productType';

interface IProductContextProps {
  products: IProduct[]
  getAll: () => Promise<void>
  create: (data: IProductCreate) => Promise<void>
  deactivate: (id: number) => Promise<void>
  update: (data: IProductUpdate) => Promise<void>
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
  
  const update = async (product: IProductUpdate) => {
    return await ProductService.update(product)
  }

  const getAll = async () => {
    const response = await ProductService.getAll()
    setProducts(response)
  }

  const deactivate = async (id: number) => {
    await ProductService.deactivate(id)
    getAll()
  }

  const create = async (product: IProductCreate) => {
    await ProductService.create(product)
    getAll()
  }

  useEffect(() => {
    getAll()
  },[])

  return (
    <ProductContext.Provider value={{
      getAll,
      products,
      create,
      update,
      setIsModalOpen,
      isModalOpen,
      deactivate,
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => useContext(ProductContext)