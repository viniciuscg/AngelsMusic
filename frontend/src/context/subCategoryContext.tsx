import { Dispatch, ReactElement, SetStateAction, createContext, useContext, useEffect, useState } from 'react'
import { ICreateSubCategory, ISubCategory, IUpdateSubCategory } from '../services/subCategory/subCategoryType'
import SubCategoryService from '../services/subCategory/subCategoryService'

interface ISubCategoryContextProps {
  create: (data: ICreateSubCategory) => Promise<void>
  update: (data: IUpdateSubCategory) => Promise<void>
  getAll: () => Promise<void>
  deleteSubCategory: (id: number) => Promise<void>
  getRelated: (categoryId: number) => Promise<void>
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  isModalOpen: boolean
  subCategories: ISubCategory[]
  releatedSubCategories: ISubCategory[]
}

interface IProps {
  children: ReactElement
}

export const SubCategoryContext = createContext({} as ISubCategoryContextProps)

export const SubCategoryProvider = ({ children }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [releatedSubCategories , setReleatedSubCategories] = useState<ISubCategory[]>([]);
  const[subCategories, setSubCategories] = useState<ISubCategory[]>([]);
  
  const create = async (category: ICreateSubCategory) => {
    await SubCategoryService.create(category)
  }

  const update = async (category: ICreateSubCategory) => {
    await SubCategoryService.update(category)
  }

  const deleteSubCategory = async (id: number) => {
    await SubCategoryService.delete(id)
  }

  const getRelated = async (categoryId: number) => {
    const data = await SubCategoryService.getRelated(categoryId)
    setReleatedSubCategories(data)
  }

  const getAll = async () => {
    const data = await SubCategoryService.getAll()
    setSubCategories(data)
  }

  useEffect(() => {
    getAll()
  },[])

  return (
    <SubCategoryContext.Provider value={{
      create,
      getRelated,
      update,
      setIsModalOpen,
      isModalOpen,
      subCategories,
      deleteSubCategory,
      getAll,
      releatedSubCategories,
    }}>
      {children}
    </SubCategoryContext.Provider>
  )
}

export const useSubCategoryContext = () => useContext(SubCategoryContext)

