import { CreateSubCategoryDto, UpdateSubCategoryDto } from "../dto/sub_category_dto.js"
import SubCategoryRepository from "../repositories/sub_category_repository.js"

export default class SubCategoryService {
  subCategoryRepository: SubCategoryRepository

  constructor() {
    this.subCategoryRepository = new SubCategoryRepository()
  }

  async create(data: CreateSubCategoryDto){
    return this.subCategoryRepository.create(data)
  }

  async getRelated(categoryid: number){
    return this.subCategoryRepository.getRelated(categoryid)
  }

  async getAll() {
    return await this.subCategoryRepository.getAll()
  } 
  
  async update(data: UpdateSubCategoryDto){
    return this.subCategoryRepository.update(data)
  }
  async delete(id: number){
    return this.subCategoryRepository.delete(id)
  }
}