import { Dispatch, ReactElement, SetStateAction, createContext, useContext, useEffect, useState } from 'react'
import CategoryService from '../services/category/categoryService'
import { ICategory, ICreateCategory } from '../services/category/categoryType';

interface ICategoryContextProps {
  categories: ICategory[]
  getAll: (data: ICategory[]) => Promise<void>
  update: (data: ICategory) => Promise<void>
  create: (data: ICreateCategory) => Promise<void>
  deleteCategory: (id: number) => Promise<void>
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  isModalOpen: boolean
}

interface IProps {
  children: ReactElement
}

export const CategoryContext = createContext({} as ICategoryContextProps)

export const CategoryProvider = ({ children }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[categories, setCategories] = useState<ICategory[]>([]);
  
  const getAll = async () => {
    const data = await CategoryService.getAll()
    setCategories(data)
  }

  const update = async (category: ICategory) => {
    await CategoryService.update(category)
    getAll()
  }

  const create = async (category: ICreateCategory) => {
    await CategoryService.create(category)
    getAll()
  }

  const deleteCategory = async (id: number) => {
    await CategoryService.delete(id)
    const filteredBudgets = categories.filter(budget => budget.id !== id)
    setCategories(filteredBudgets)
  }

  useEffect(() => {
    getAll()
   }, [])

  return (
    <CategoryContext.Provider value={{
      categories,
      getAll,
      update,
      create,
      deleteCategory,
      setIsModalOpen,
      isModalOpen,
    }}>
      {children}
    </CategoryContext.Provider>
  )
}

export const useCategoryContext = () => useContext(CategoryContext)